import network
import socket
import time
import sys
from DLMachine import DLMachine
sys.path.append("webserver/")
from secrets import secrets

class DLServer:
    
    def __init__(self):
        self.ssid = secrets['ssid']
        self.pw = secrets['pw']
        self.s = socket.socket()
        self.machine = DLMachine()
        
        self.runServer()
        self.action()

    def runServer(self):
        wlan = network.WLAN(network.STA_IF)
        wlan.active(True)
        wlan.connect(self.ssid, self.pw)

        # Wait for connect or fail
        max_wait = 10
        while max_wait > 0:
            if wlan.status() < 0 or wlan.status() >= 3:
                break
            max_wait -= 1
            print('waiting for connection...')
            time.sleep(1)

        # Handle connection error
        if wlan.status() != 3:
            raise RuntimeError('network connection failed')
        else:
            print('connected')
            status = wlan.ifconfig()
            print( 'ip = ' + status[0] )

        # Open socket
        addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]

        
        self.s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.s.bind(addr)
        self.s.listen(1)

        print('listening on', addr)
        
    
    def action(self):
        # Wait for button press and execute function
        # Listen for connections
        while True:
            try:
                cl, addr = self.s.accept()
                print('client connected from', addr)
                #identifies the request
                request = cl.recv(1024)
                #turns the request into a string
                request = str(request)


                try:
                    #splits it down to the bit we're interested in (eg index.html, style.css)
                    request = request.split()[1]
                    

                except IndexError:
                    pass
                
                    
                if '/button1' in request:
                    self.machine.button1()
                    cl.send('HTTP/1.1 200 OK\n\nButton pressed!\n')
                    cl.close()
                    continue
                elif '/button2' in request:
                    self.machine.button2()
                    cl.send('HTTP/1.1 200 OK\n\nLED Button pressed!\n')
                    cl.close()
                    continue
                elif '/button3' in request:
                    self.machine.button3()
                    cl.send('HTTP/1.1 200 OK\n\nServo Button pressed!\n')
                    cl.close()
                    continue
                elif '/button4' in request:
                    self.machine.button4()
                    cl.send('HTTP/1.1 200 OK\n\nServo Button pressed!\n')
                    cl.close()
                    continue   
                    
                else:
                
                    # works out what the file type of the request is so we send back the file as the correct MIME type
                    if '.html' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-type: text/html\r\n\r\n'
                    elif '.css' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: text/css\r\n\r\n'
                    elif '.js' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: text/javascript\r\n\r\n'
                    elif '.svg' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: image/svg+xml\r\n\r\n'
                    elif '.svgz' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: image/svg+xml\r\n\r\n'
                    elif '.png' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: image/png\r\n\r\n'
                    elif '.ico' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: image/x-icon\r\n\r\n'
                    elif '.py' in request:
                        file_header = 'HTTP/1.1 200 OK\r\nContent-Type: text/python\r\n\r\n'
                    
                    else:
                        # doesnt send a header type if not extension not listed. In many cases the file will still load - but you may be better to look up the MIME type for the file and add to the above list
                        file_header = '/'
                        #continue

                 
                    #runs the requested file through the open bit at the top of the code to get the file contents
                    response = self.get_request_file(request)
                    print(response)
                
                    #A little check to ensure it's getting the right MIME type for the file it needs.
                    print('file header = ', file_header)

                    #send back what type of file it is
                    cl.send(file_header)
                    #sends the content back
                    cl.send(response)
                    #finishes up
                   
                    cl.close()

            except OSError as e:
                print(e)
                cl.close()
                print('connection closed')

    
    # this is compiling the file ready when requested
    def get_request_file(self, request_file_name):
        with open(request_file_name, 'r') as file:
            file_requested = file.read()
        return file_requested

            
        

from picozero import LED
from time import sleep

class DLLed:
    
    def __init__(self, pin):
        self.led = LED(pin)
        
    def ledOn(self):
        self.led.on()
        
    def ledOff(self):
        self.led.off()

    def ledFlicker(self):
        for i in range(1,10):
            self.led.on()
            sleep(0.1)
            self.led.off()
            sleep(0.1)
            

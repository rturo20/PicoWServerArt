from time import sleep
from picozero import Servo

class DLServo:
    
    def __init__(self, pin):
        self.servo = Servo(pin)
        
        
    def servoOn(self):
       
        self.servo.min()
        sleep(1)
        self.servo.mid()
        sleep(1)
        self.servo.max()
        sleep(1)
        self.servo.min()
        sleep(1)
        self.servo.off()
        
    
    def servoOff(self):
        self.servo.off()
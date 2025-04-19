from DLServo import DLServo
from DLPicoLed import DLPicoLed
from DLLed import DLLed


class DLMachine:
    
    def __init__(self):
        self.servo = DLServo(16)
        self.picoLed = DLPicoLed()
        self.led = DLLed(26)
        self.picoLedToggle = True
        self.extlLedToggle = True
        self.servoOn = True
        
    def onLed(self):
        self.led.ledOn()
        
    def offLed(self):
        self.led.ledOff()
        
    def onPicoLed(self):
        self.picoLed.ledOn()
        
    def offPicoLed(self):
        self.picoLed.ledOff()
        
    def onServo(self):
        self.servo.servoOn()
        
    def offServo(self):
        self.servo.servoOff()
        
    def button1(self):
        if self.picoLedToggle:
            self.onPicoLed()
        else:
            self.offPicoLed()
        self.picoLedToggle = not self.picoLedToggle
        
    def button2(self):
        if self.extlLedToggle:
            self.onLed()
        else:
            self.offLed()
        self.extlLedToggle = not self.extlLedToggle
        
    def button3(self):
        if self.servoOn:
            self.onServo()
        else:
            self.offServo()
        self.servoOn = not self.servoOn
        
    def button4(self):
        self.led.ledFlicker()
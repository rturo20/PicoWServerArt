from picozero import pico_led

class DLPicoLed:
    
    def __init__(self):
        self.led = pico_led
        
    def ledOn(self):
        self.led.on()
        
    def ledOff(self):
        self.led.off()
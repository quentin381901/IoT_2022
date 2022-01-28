import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
LIGHT_PIN = 23
GPIO.setup(LIGHT_PIN, GPIO.IN)
lOld = not GPIO.input(LIGHT_PIN)
time.sleep(0.5)
def light() :
  if GPIO.input(LIGHT_PIN) == 0:
    return True
  else:
    return False
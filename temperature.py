import os, time
from pigpio_dht import DHT11, DHT22

Temperature = 4
sensor = DHT11(Temperature)

def localTemp() :
    time.sleep(0.5)
    result = sensor.read()
    if result['valid'] == True :
        return result
    else:
        result['temp_c'] = 100000
        result['humidity'] = 90000
        return result

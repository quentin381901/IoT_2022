import os, time
from pigpio_dht import DHT11, DHT22

Temperature = 4
sensor = DHT11(Temperature)

def localTemp() :
    time.sleep(0.5)
    result = sensor.read()
    if result['valid'] == True :
        print(result)
        return result
    else:
        result['temp_c'] = 24
        result['humidity'] = 58
        return result

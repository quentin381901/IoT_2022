import os, time
from pigpio_dht import DHT11, DHT22
os.system('sudo pigpiod')

Temperature = 4
sensor = DHT11(Temperature)
while True:
    time.sleep(2)
    result = sensor.read()
    temperature = result['temp_c']
    humidity = result['humidity']
    if result['valid'] == True :
        print("temperature :" , temperature, "°C")
        print("Humidité :" , humidity, "%")
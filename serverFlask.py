# -*- coding: utf-8 -*-
import os
import sys
import time
from flask import Flask, flash, redirect, render_template, request, session, abort
#from utils.temperature import *
#from utils.lightDetector import *
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

global name
name = "momo"


def test():
    return name

# a virer utiliser celui de temp.py
global result
result = []

result = {'temp_c': 0,'humidity': 0 }


def localTemp():
    print("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    result['temp_c'] = 24
    result['humidity'] = 58
    return result


@app.route("/test", methods=['GET'])
def hello():
   # return "Bienvenue sur le BackEnd"
   # localTemp()
    return {'name': test(), 'temperature': localTemp()['temp_c'], 'humidity': localTemp()['humidity']}


@app.route("/temperature/", methods=['GET'])
def getTemperature():
    localTemp()
    return {'temperature': localTemp()['temp_c'], 'humidity': localTemp()['humidity']}


@app.route("/light/", methods=['GET'])
def getLight():
    light()
    return {'light': light()}

# http request


def do_GET(self):
    self.send_response(00)
    self.send_header("Content-type", "text/html")
    self.end_headers()
    self.wfile.write(
        bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
    self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
    self.wfile.write(bytes("<body>", "utf-8"))
    self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
    self.wfile.write(bytes("</body></html>", "utf-8"))


if __name__ == "__main__":
    app.run(debug=True, port=8080, host='0.0.0.0')

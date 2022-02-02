# -*- coding: utf-8 -*-
import os, sys, time
from flask import Flask, flash, redirect, render_template, request, session, abort
from utils.temperature import *
from utils.lightDetector import *

app = Flask(__name__)

@app.route("/")
def hello():
    return "Bienvenue sur le BackEnd"

@app.route("/temperature/", methods=['GET'])
def getTemperature():
    localTemp()
    return {'temperature': localTemp()['temp_c'], 'humidity' : localTemp()['humidity']}

@app.route("/light/")
def getLight():
    light()
    return {'light': light()}

if __name__ == "__main__":
    app.run(debug=True, port=8080, host='0.0.0.0')

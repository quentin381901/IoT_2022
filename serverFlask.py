# -*- coding: utf-8 -*-
from flask import Flask
import webbrowser, os, sys, time
from flask import Flask, flash, redirect, render_template, request, session, abort
from function import *
from temperature import *
from lightDetector import *

app = Flask(__name__)


# exemple
@app.route("/")
def hello():
    return "Hello World!"


# exemple
@app.route("/test/")
def get_text():
    return display_text("servertest")


@app.route('/test2')
def get_text2():
    return {'name': display_text("ma route test 2")}


#  return render_template('index.html', name=display_text("serverFlask"))


@app.route("/temperature/", methods=['GET'])
def getTemperature():
    localTemp()
    return render_template('temperature.html', temperature=localTemp()['temp_c'], humidity=localTemp()['humidity'])

@app.route("/light/", methods=['GET'])
def getLight():
    light()
    return render_template('lightDetector.html', light=light())

# test exemple
@app.route('/time')
def get_current_time():
    return {'time': time.time()}


def do_GET(self):
    self.send_response(00)
    self.send_header("Content-type", "text/html")
    self.end_headers()
    self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
    self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
    self.wfile.write(bytes("<body>", "utf-8"))
    self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
    self.wfile.write(bytes("</body></html>", "utf-8"))


if __name__ == "__main__":
    app.run(debug=True, port=8080, host='0.0.0.0')

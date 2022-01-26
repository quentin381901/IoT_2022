# -*- coding: utf-8 -*-
from flask import Flask
import webbrowser, os, sys, time
from flask import Flask, flash, redirect, render_template, request, session, abort

import os, time
from function import *

# from temperature import *

app = Flask(__name__)

# exemple
@app.route("/")
def hello():
    return "Hello World!"

#exemple
@app.route("/test/", methods=['GET'])
def  get_text():
    display_text("serverFlask")
    return render_template('index.html',name = display_text("serverFlask"))


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

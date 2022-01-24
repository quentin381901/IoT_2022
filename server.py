import webbrowser, os, sys, time
import sqlite3 as sql
from http.server import BaseHTTPRequestHandler, HTTPServer
import os, time
from pigpio_dht import DHT11, DHT22
os.system('sudo pigpiod')

class RequestHandler_httpd(BaseHTTPRequestHandler):
  def do_GET(self):
    messagetosend = bytes('Hello World',"utf")
    self.send_response(200)
    self.send_header('Content-Type', 'text/plain')
    self.send_header('Content-Length', len(messagetosend))
    self.end_headers()
    self.wfile.write(messagetosend)
    print(self.requestline)
    return

def open_chromium(url):
  chrome_path = '/usr/bin/chromium-browser --start-fullscreen'
  webbrowser.get(chrome_path).open(url)

server_address_httpd = ('localhost',8080)
httpd = HTTPServer(server_address_httpd, RequestHandler_httpd)
print('Server started')
httpd.serve_forever()

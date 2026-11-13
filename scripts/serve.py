"""
Zero-dependency Python static server launcher for Mohamed Ahmed Portfolio
"""
import http.server
import socketserver
import os
import sys

PORT = 8080
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

os.chdir(ROOT)

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

print(f"======================================================")
print(f" Mohamed Ahmed Portfolio Server running at:")
print(f" http://localhost:{PORT}/")
print(f" Root: {ROOT}")
print(f"======================================================")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer terminated.")

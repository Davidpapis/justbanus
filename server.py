import http.server
import socketserver
import sys

class DevHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Clear-Site-Data', '"cache"')
        super().end_headers()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3030
    server = http.server.ThreadingHTTPServer(('', port), DevHandler)
    print(f'Just Banus server running on port {port} with cache-busting')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

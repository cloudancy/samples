import bottle
import os

def send_file(file_path, size):
    with open(file_path) as f:
        block = f.read(4096)
        while block:
            yield block
            block = f.read(4096)
			
			
def application(environ, start_response):
	
	size = os.path.getsize("index.html")
	headers = [
		("Content-type", "text/html"),
		("Content-length", str(size)),
	]
	start_response("200 OK", headers)
	return send_file("index.html", size)
	  


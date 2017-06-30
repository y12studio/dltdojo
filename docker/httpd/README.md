### Use docker-compose up to start all the services

* host ip(example) : 192.168.99.100
* httpd1 : 192.168.99.100:8081
* httpd2 : 192.168.99.100:8082

```
$ docker-compose build
$ docker-compose up -d
$ docker-compose ps
     Name              Command          State          Ports
--------------------------------------------------------------------
httpd_httpd1_1   nginx -g daemon off;   Up      0.0.0.0:8081->80/tcp
httpd_httpd2_1   nginx -g daemon off;   Up      0.0.0.0:8082->80/tcp
```

### Review the HTTP request and response

try using the command "bash" this will open an interactive bash termina

#### Open an interactive bash terminal on httpd1

```
$ docker-compose exec httpd1 bash
```

#### curl -v http://google.com/
```
bash-4.3# curl -v http://google.com
* Rebuilt URL to: http://google.com/
*   Trying 216.58.200.46...
* TCP_NODELAY set
* Connected to google.com (216.58.200.46) port 80 (#0)
> GET / HTTP/1.1
> Host: google.com
> User-Agent: curl/7.52.1
> Accept: */*
>
< HTTP/1.1 302 Found
< Cache-Control: private
< Content-Type: text/html; charset=UTF-8
< Referrer-Policy: no-referrer
< Location: http://www.google.com.tw/?gfe_rd=cr&ei=yuJVWebNCvH88wfHmp7oAg
< Content-Length: 262
< Date: Fri, 30 Jun 2017 05:34:02 GMT
<
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://www.google.com.tw/?gfe_rd=cr&amp;ei=yuJVWebNCvH88wfHmp7oAg">here</A>.
</BODY></HTML>
* Curl_http_done: called premature == 0
* Connection #0 to host google.com left intact
```
#### curl -v http://httpd2/
```
bash-4.3# curl -v http://httpd2/
*   Trying 172.18.0.2...
* TCP_NODELAY set
* Connected to httpd2 (172.18.0.2) port 80 (#0)
> GET / HTTP/1.1
> Host: httpd2
> User-Agent: curl/7.52.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: nginx/1.12.0
< Date: Fri, 30 Jun 2017 05:31:47 GMT
< Content-Type: text/html
< Content-Length: 375
< Last-Modified: Fri, 30 Jun 2017 05:24:41 GMT
< Connection: keep-alive
< ETag: "5955e099-177"
< Accept-Ranges: bytes
<
<!DOCTYPE html>
<html>
<head>
<title>HTTPD2</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>HTTPD2</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>
</body>
* Curl_http_done: called premature == 0
* Connection #0 to host httpd2 left intact
```

#### curl -v http://httpd3/

```
bash-4.3# curl -v http://httpd3/
*   Trying 172.18.0.4...
* TCP_NODELAY set
* Connected to httpd3 (172.18.0.4) port 80 (#0)
> GET / HTTP/1.1
> Host: httpd3
> User-Agent: curl/7.52.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Fri, 30 Jun 2017 05:52:35 GMT
< Server: Apache/2.4.25 (Unix)
< Last-Modified: Mon, 11 Jun 2007 18:53:14 GMT
< ETag: "2d-432a5e4a73a80"
< Accept-Ranges: bytes
< Content-Length: 45
< Content-Type: text/html
<
<html><body><h1>It works!</h1></body></html>
* Curl_http_done: called premature == 0
* Connection #0 to host httpd3 left intact
```

### Build the dltdojo/httpd image

```
$ docker build -t dltdojo/httpd .
$ docker push dltdojo/httpd
```

### REFERENCES
* https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
* https://en.wikipedia.org/wiki/HTML
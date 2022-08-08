> docker build -t pieterpad_server:latest .

> docker run --rm -p 4000:4000 --name pieterserver -v $(pwd):/server:ro -v /server/node_modules pieterpad_server:latest

> docker stop pieterserver

> docker build -t pieterpad_chat:latest .

> docker run --rm -p 8000:8000 --name pieterchat -v $(pwd):/chat:ro -v /chat/node_modules pieterpad_chat:latest

> docker stop pieterchat

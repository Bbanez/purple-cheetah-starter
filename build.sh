#!/bin/bash

app_name="purple-cheetah-starter"

docker stop ${app_name}
docker rm ${app_name}
docker rmi ${app_name}

docker build . -t ${app_name}
docker run -p 1280:1280 --name ${app_name} ${app_name}
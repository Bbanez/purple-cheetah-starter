#!/bin/bash

app_name="purple-cheetah-starter"

docker stop ${app_name}
docker rm ${app_name}
docker rmi ${app_name}
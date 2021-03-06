#!/bin/bash

BLOG_PATH=/home/ubuntu/blog/blogggg

cd $BLOG_PATH

echo '> git pull'
git pull

echo '> install node dependencies'
npm i

echo '> build project'
sudo npm run build

SERVER_PID=$(pgrep -xf 'node server/index.js')

if [ -z $SERVER_PID ]; then
	echo '> no process to kill'
else
	echo '> kill process'
	sudo kill -TERM $SERVER_PID
	sleep 3
fi

echo '> start project'
nohup npm run start &



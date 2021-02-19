run:
		npm start
install:
		npm install
test:
		npm run test-once
clear:
		npm run clean
build:
		npm run build
docker-build:
		docker build -t sound-quiz .
docker-run:
		docker run -p 80:80 sound-quiz:latest
docker-run-daemon:
		docker run -p 80:80 -d sound-quiz:latest


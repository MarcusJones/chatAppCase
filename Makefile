build-app:
	docker build -t chat-app .

build-mongo:
	docker build -t chat-mongodb ./MongoDB/

run-app-stack:
	docker run --rm --name chat-mongodb -d -p 27017:27017 chat-mongodb

tear-down:
	docker stop chat-mongodb

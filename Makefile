build-app:
	docker build -t chat-app .

build-mongo:
	docker build -t chat-mongodb ./MongoDB/

run-app-stack:
	docker network create chat-network || true
	docker run --rm --name chat-mongodb -d --network chat-network chat-mongodb
	sleep 5
	docker run \
		--rm  \
		--name chat-app \
		--network chat-network \
		-e MONGODB_URI='mongodb://chat-mongodb:27017' \
		-p 8000:8000 \
		chat-app

tear-down:
	docker stop chat-mongodb
	docker stop chat-app
	docker container rm chat-app
	docker network rm chat-network

save-images:
	mkdir -p .images
	docker save -o ./.images/chat-app.tar chat-app
	docker save -o ./.images/chat-mongodb.tar chat-mongodb
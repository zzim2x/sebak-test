REGISTRY = gcr.io/devenv-205606

all: client-api

client-api:
	docker build -f ./client-api-test/Dockerfile -t $(REGISTRY)/client-api-test:latest ./client-api-test
	docker push $(REGISTRY)/client-api-test:latest


VERSION     ?= $(shell git describe --tags --abbrev=0 2>/dev/null || echo latest)
SERVICE     ?= rest-website
IMAGE       := gcr.io/ashanaakh-dev/$(SERVICE):$(VERSION)

.PHONY: default build push run ci deploy secret

default: build run

build:
	@echo '> Building "$(SERVICE)" docker image...'
	@docker build -t $(IMAGE) .

push: build
	gcloud docker -- push $(IMAGE)

run:
	@echo '> Starting "$(SERVICE)" container...'
	@docker run -d --name $(SERVICE) -p 8080:8080 $(IMAGE)
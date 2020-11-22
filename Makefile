start:
	make build
	make run
build:
	docker build -t web-products -f local.Dockerfile .
run:
	docker run --rm -d -p 3010:80 -e PORT=80 web-products
clean:
	docker rm -f web-products
reset:
	make clean
	make start

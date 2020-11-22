start:
	make build
	make run
build:
	docker build -t web-products -f local.Dockerfile .
run:
	docker run --rm --name web-products -d -p 3010:80 -e PORT=80 web-products
clean:
	docker stop web-products
reset:
	make clean
	make start

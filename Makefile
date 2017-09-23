wls:
	docker-compose -f docker-compose.yml -f docker-compose.watch.yml up --no-deps -d $(S)

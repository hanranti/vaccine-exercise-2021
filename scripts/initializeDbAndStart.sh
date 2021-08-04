./scripts/installAndBuild.sh
./scripts/convertDataToJson.sh

docker-compose down
docker-compose run -d -T vaccine-exercise-db
sleep 10
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "DROP DATABASE \"vaccine_db\""
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "CREATE DATABASE \"vaccine_db\""
docker-compose run -d -T populate
sleep 60
docker-compose up -d --scale populate=0
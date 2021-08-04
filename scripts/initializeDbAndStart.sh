./scripts/installAndBuild.sh
./scripts/convertDataToJson.sh

docker-compose down
docker-compose up -d vaccine-exercise-db
sleep 10
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "DROP DATABASE \"vaccine_db\""
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "CREATE DATABASE \"vaccine_db\""
docker-compose up -d populate
sleep 60
docker-compose up --scale populate=0
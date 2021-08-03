./scripts/installAndBuild.sh
docker-compose down
docker-compose up -d vaccine-exercise-db
sleep 30

docker exec -u postgres vaccine-exercise-db psql -c "DROP DATABASE \"vaccine_db\""
docker exec -u postgres vaccine-exercise-db psql -c "CREATE DATABASE \"vaccine_db\""
./scripts/convertDataToJson.sh
DB_HOST=localhost node ./scripts/populate/populate.js
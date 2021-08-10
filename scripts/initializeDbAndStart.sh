./scripts/installAndBuild.sh
./scripts/convertDataToJson.sh

docker-compose down
docker-compose up -d vaccine-exercise-db
sleep 5
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "DROP DATABASE \"vaccine_db\""
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "CREATE DATABASE \"vaccine_db\""
DB_HOST=localhost node scripts/populate/populate.js
docker-compose up
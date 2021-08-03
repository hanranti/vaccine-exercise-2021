./scripts/installAndBuild.sh
echo 'run db container'
docker-compose down
docker-compose up -d vaccine-exercise-db
sleep 10

echo 'initialize db'
docker exec -u postgres vaccine-exercise-db psql -c "DROP DATABASE \"vaccine_db\""
docker exec -u postgres vaccine-exercise-db psql -c "CREATE DATABASE \"vaccine_db\""
./scripts/convertDataToJson.sh
DB_HOST=localhost node ./scripts/populate/populate.js
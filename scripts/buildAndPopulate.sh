./scripts/installAndBuild.sh
echo 'run db container'
docker-compose down
docker-compose run -d vaccine-exercise-db
sleep 10

echo 'initialize db'
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "DROP DATABASE \"vaccine_db\""
docker-compose exec -T -u postgres vaccine-exercise-db psql -c "CREATE DATABASE \"vaccine_db\""
./scripts/convertDataToJson.sh
node ./scripts/populate/populate.js
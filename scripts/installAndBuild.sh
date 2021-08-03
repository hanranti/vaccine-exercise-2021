echo 'npm installations'
cd scripts/populate
npm install
cd ../../frontend
npm install
cd ../backend
npm install
cd ..
npm install
echo 'build docker-compose'
docker-compose build
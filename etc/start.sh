cd dist

npm install --omit=dev

export NODE_ENV=test

node src/server.js
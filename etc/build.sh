rimraf dist

export NODE_ENV=production

tsc -p ./tsconfig.json --pretty

rimraf dist/src/public

cp -R src/public dist/src/public

cp -R src/views dist/src/views

cp package.json dist/
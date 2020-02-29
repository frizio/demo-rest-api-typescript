npm init -y

npm i express cors mongoose morgan bcrypt jsonwebtoken passport passport-jwt

npm i -D typescript tsc-watch
npm i -D @types/express @types/cors @types/mongoose @types/morgan @types/bcrypt @types/jsonwebtoken @types/passport @types/passport-jwt

npx tsc --init

mkdir src/
cd src/
touch index.ts app.ts database.ts

mkdir config controllers middlewares controllers models routes

cd ..

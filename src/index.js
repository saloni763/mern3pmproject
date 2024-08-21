import express from 'express';
import dotenv from 'dotenv';
import Database from './config/Database.js';
import webRoute from './routes/web.js';
const app = express();
dotenv.config();


let conn = new Database();


app.use('/', webRoute);


let port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

console.log(env)

if(env === 'development') {
app.listen(port,() => {
    console.log(`Server is running on port http://localhost:${port}`);
});
}else{
    console.log('production mode');
}
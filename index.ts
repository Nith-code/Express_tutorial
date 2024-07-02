import express, { NextFunction, Request, Response } from 'express'
import userRouter from './Route/user';
import prodRouter from './Route/product';
import * as dotenv from 'dotenv';
import connectDatabase from './database/connection';
dotenv.config();


const app = express();
connectDatabase();

app.use(express.json());
app.use('/api/users', userRouter)
app.use('/api/prods', prodRouter)

console.log('Hello user-feature');

const port = 3000;

// app.get('/api/user', (request : Request,response : Response, next : NextFunction) => {
//     response.json(
//         {
//             name : 'Phanith',
//             department : 'SE'
//         }
//     )
// })


app.listen(port, () => {
    console.log(`Running on Port ${port}`)
});


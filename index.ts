import express, { NextFunction, Request, Response } from 'express'
import userRouter from './router/user';
import { getProduct } from './handler/product';
import productRouter from './router/product';

const app = express();
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)
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


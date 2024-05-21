import { Request, Response } from "express";

export function getProduct(req : Request, res : Response){
    res.send(
        [
            {
                name : 'BMW',
                year : '2023',
                price : 200000
            },
            {
                name : 'Toyota',
                year : '2024',
                price : 10000
            }
        ]
    )
}
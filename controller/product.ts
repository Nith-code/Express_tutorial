import { Request, Response, NextFunction } from "express";

export function getProd(req : Request, res : Response){
    const prods = [
        {
            id : 1,
            prod1 : 'toothpaste',
            price : 1000,
            expire : '20/07/2024'
        },
        {
            id : 2,
            prod1 : 'shampoo',
            price : 2000,
            expire : '25/07/2024'
        },
        {
            id : 3,
            prod1 : 'Lotion',
            price : 4000,
            expire : '30/07/2024'
        }
    ]

    const prodFilter = prods.filter((prod)=> {
        var prodPrice = prod.price;
        if (prodPrice <= 2000) {
            return prod;
        }
    })

    res.send(
        {
            status : 'arrived',
            data : prods
        }
    )
}
export function getProdById(req : Request, res : Response){
    res.send({});
}
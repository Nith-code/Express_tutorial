import { Request, Response } from "express";

export function getUser(req : Request, res : Response){
    const users = [
        {
            id: 1,
            username: 'Lim Phanith',
            dept: 'IT',
        },
        {
            id: 2,
            username: 'Bou Leapheng',
            dept: 'SE',
        },
        {
            id: 3,
            username: 'Sopheak Rithmunny',
            dept: 'SE',
        },
        {
            id: 4,
            username: 'Sok Sopheak',
            dept: 'TM',
        },
        {
            id: 5,
            username: 'Seour Tongmeng',
            dept: 'AC',
        }
    ]
    const filterArray = users.filter((user)=> {
        var department = user.dept;
        if (department === 'SE') {
            return user;
        }   
    });
    res.send({
        status : 'Success',
        data : filterArray
    }
    );
}
export function getUserById(req : Request, res : Response){
    res.send({});
}
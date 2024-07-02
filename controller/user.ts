import { Request, Response } from "express"; 
import Users from "../database/models/users";
import { create, deleteById, getUserByUsername, getUserFromDbById } from "../services/users";


export async function deleteUserById (req : Request, res : Response){
  console.log("deleting");
  const userId = req.params.id;
  try {
    //Check user 
    const user = await getUserFromDbById(userId)
    if (!user){
      res.status(404).json("User not found")
    }
    const deletedUser = await deleteById(userId);
    console.log(deletedUser);
    res.status(200).json({message : "User deleted"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({error : 'Internal Server Error'})
  }
}


export async function getUserDbById (req : Request, res : Response){
  console.log("running")
  const userId = req.params.id; 
  try{
    const user = await getUserFromDbById(userId);
    return res.json(user)
  }
  catch(error ){
    console.log(error)
    return res.status(500).json({ error: 'Internal Server Error' });
  };  
}


export async function createUsers (req : Request, res : Response) {
  console.log("Create user is running");
  const data = req.body;
  const u = await create(data.username, data.email, data.password, data.status);
  return res.json(u);
}

export function getUser(req: Request, res: Response) {
  const users = [
    {
      user_id: 1,
      full_name: "Rahel Gartsyde",
      user_email: "rgartsyde0@woothemes.com"
    },

    {
      user_id: 2,
      full_name: "Sada Clarkin",
      user_email: "sclarkin1@msn.com"
    },

    {
      user_id: 3,
      full_name: "Traci Jaquin",
      user_email: "tjaquin2@ftc.gov"
    },

    {
      user_id: 4,
      full_name: "Emory Bickardike",
      user_email: "ebickardike3@phpbb.com"
    },

    {
      user_id: 5,
      full_name: "Orelie Humpage",
      user_email: "ohumpage4@sphinn.com"
    },

    {
      user_id: 6,
      full_name: "Goddard Leckenby",
      user_email: "gleckenby5@trellian.com"
    },

    {
      user_id: 7,
      full_name: "Wilhelmina Dwine",
      user_email: "wdwine6@ifeng.com"
    },

    {
      user_id: 8,
      full_name: "Lilllie Canto",
      user_email: "lcanto7@jigsy.com"
    },

    {
      user_id: 9,
      full_name: "Agnella Jonathon",
      user_email: "ajonathon8@comsenz.com"
    },

    {
      user_id: 10,
      full_name: "Sergent Ondrasek",
      user_email: "sondrasek9@oracle.com"
    }
  ];
  const filterArray = users.filter((user) => {
    var id = user.user_id;
    if (id >=5 ) {
      return user;
    }
  });
  res.send({
    status: "Success",
    data: filterArray
  });
}
export async function getUserById(req: Request, res: Response) {
  const users = [
    {
      user_id: 1,
      full_name: "Rahel Gartsyde",
      age : 15,
      user_email: "rgartsyde0@woothemes.com"
    },

    {
      user_id: 2,
      full_name: "Sada Clarkin",
      age : 16,
      user_email: "sclarkin1@msn.com"
    },

    {
      user_id: 3,
      full_name: "Traci Jaquin",
      age : 17,
      user_email: "tjaquin2@ftc.gov"
    },

    {
      user_id: 4,
      full_name: "Emory Bickardike",
      age : 18,
      user_email: "ebickardike3@phpbb.com"
    },

    {
      user_id: 5,
      full_name: "Orelie Humpage",
      age : 19,
      user_email: "ohumpage4@sphinn.com"
    },

    {
      user_id: 6,
      full_name: "Goddard Leckenby",
      age : 19,
      user_email: "gleckenby5@trellian.com"
    },

    {
      user_id: 7,
      full_name: "Wilhelmina Dwine",
      age : 20,
      user_email: "wdwine6@ifeng.com"
    },

    {
      user_id: 8,
      full_name: "Lilllie Canto",
      age : 21,
      user_email: "lcanto7@jigsy.com"
    },

    {
      user_id: 9,
      full_name: "jame",
      age : 29,
      user_email: "ajonathon8@comsenz.com",
    },

    {
      user_id: 10,
      full_name: "jame",
      age : 19,
      user_email: "sondrasek9@oracle.com"
    }
  ];
  const userId = Number(req.params.id);
  const user = users.find(u => u.user_id === userId);
  console.log(userId);
  

  if (user) {
      res.json(user);
  } else {
      res.status(404).json({ error: "User not found" });
  }
}


export async function getUserQuery(req : Request, res : Response){
  const users = [
    {
      user_id: 1,
      full_name: "Rahel Gartsyde",
      age : 15,
      user_email: "rgartsyde0@woothemes.com"
    },

    {
      user_id: 2,
      full_name: "Sada Clarkin",
      age : 16,
      user_email: "sclarkin1@msn.com"
    },

    {
      user_id: 3,
      full_name: "Traci Jaquin",
      age : 17,
      user_email: "tjaquin2@ftc.gov"
    },

    {
      user_id: 4,
      full_name: "Emory Bickardike",
      age : 18,
      user_email: "ebickardike3@phpbb.com"
    },

    {
      user_id: 5,
      full_name: "Orelie Humpage",
      age : 19,
      user_email: "ohumpage4@sphinn.com"
    },

    {
      user_id: 6,
      full_name: "Goddard Leckenby",
      age : 19,
      user_email: "gleckenby5@trellian.com"
    },

    {
      user_id: 7,
      full_name: "Wilhelmina Dwine",
      age : 20,
      user_email: "wdwine6@ifeng.com"
    },

    {
      user_id: 8,
      full_name: "Lilllie Canto",
      age : 21,
      user_email: "lcanto7@jigsy.com"
    },

    {
      user_id: 9,
      full_name: "jame",
      age : 29,
      user_email: "ajonathon8@comsenz.com",
    },

    {
      user_id: 10,
      full_name: "jame",
      age : 19,
      user_email: "sondrasek9@oracle.com"
    }
  ];


  const u_id = Number(req.query.id);
  console.log("user ID", u_id);.44
  const username = req.query.fullName;
  console.log("Name",username,);
  const userAge = Number(req.query.age);
  console.log("age", userAge);
  const userEmail = req.query.email;
  console.log("email", userEmail);
  
  
  
  
  const user = await users.find((u)=>u.full_name === username && u.age === userAge);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({error : "User not found"})
  }
}





  


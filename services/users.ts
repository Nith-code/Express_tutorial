import Users from "../database/models/users";

export async function create(
  username: String,
  email: string,
  password: string,
  status?: string
) {
  // const userDto = {username, em}
  const newUserObj = new Users({
    username: username,
    email: email,
    password: password,
    status: status
  });
  await newUserObj.save();
  return {
    message: "create successfully"
  };
}

export async function getUserFromDbById(id : string) {
    return await Users.findById(id)
}
export async function getUserByUsername(username:string) {
    return await Users.findOne({username : username})
    
}

export async function deleteById (id : string){
  return await Users.findByIdAndDelete(id)
}
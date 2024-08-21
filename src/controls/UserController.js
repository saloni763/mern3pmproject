import User from "../routes/user.js";
class UserController{

    async index(req, res){
      try{
        const users = await User.find({});
        return res.json(users);
      }catch(err){
        console.log(err);
        return res.status(500).json({error: "Internal Server Error"});
      }
      }
    
    async show(req, res){
        return res.send('Show User');
    }

    async create(req, res){
        return res.send('Create User');
    }

    async update(req, res){
        return res.send('Update User');
    }
    async delete(req, res){
        return res.send('Delete User');

    }
}

export default UserController;
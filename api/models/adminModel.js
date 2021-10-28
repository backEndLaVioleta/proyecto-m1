import users from '../data/users.js';

class Admin {

    getAllUsers(){
        // we take out admin from the array
        return Promise.resolve(users);
    };

    getOneUserById(id){
        return Promise.resolve(users.find(element => element.userId ==id));
    }
    removeMovie(id){
        const index = users.findIndex(element => element.userId ==id);
        const userremove= users.splice(index,1);
        return Promise.resolve(userremove);
    }
    
}

export default new Admin();
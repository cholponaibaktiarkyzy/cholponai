
class User {
    constructor(username , age, password) {
        this.username= username;
        this.age = age;
        this.password= password;
    }
    login(name,password){
        if(name ===this.username && password===this.password){
            console.log('Welcome '+this.username)
        }else{
            console.error('Error')
        }
    }
}

const Jacob = new User('Maddy',18,'Maddy*');
Jacob.login('Maddy','Maddy*');






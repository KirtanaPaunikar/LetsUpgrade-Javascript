class Users
{
    constructor(name, age, email)
    {
        this.name= name;
        this.age= age;
        this.email= email;
        this.coins=0;
        this.courses= []
    }
    login()
    {
        console.log(`${this.name} has logged in successfully!!!`);
        return this;
    }
    getDetails()
    {
        console.log(`Name of user is ${this.name} and email id is ${this.email}`);
        return this;
    }
    logout()
    {
        console.log(`${this.name} has logged out successfully!!!`);
        return this;
    }
}

class Moderator extends Users
{
    addCoins(user, coin)
    {
        user.coins += coin;
        console.log(`Moderator ${this.name} has added ${user.coins} coins to ${user.name}.`);
    }
    deleteCoins(user, coin)
    {
        user.coins -= coin;
        console.log(`Moderator ${this.name} has deducted ${user.coins} coins to ${user.name}.`);
    }
}

class Admin extends Moderator
{
    addCourse(user, course)
    {
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user, course)
    {
        user.courses.pop(course);
        console.log(user);
    }
}

let user1= new Users("Kirtana", 22, "k@gmail.com");
let user2= new Users("Piyush", 19, "p@gmail.com");
let mod= new Moderator("Arun", 25, "a@gmail.com");
let admin= new Admin("Ram", 26, "r@gmail.com");

// admin.addCourse(user1, 'javaScript');
// admin.addCourse(user2, 'javaScript');
// admin.addCourse(user1, 'java');

user1.login().getDetails().logout();
mod.addCoins(user1,10);
mod.addCoins(user1,10);
mod.deleteCoins(user1,10);
        // OBJECT
let users={
    name:'Deepali Singh',
    email:'deepalisingh@gmail.com',
    address:'Kanpur'
}
console.log(users);
console.log("Name-"+users.name);
console.log("Email ID-"+users.email);
console.log("Address-"+users.address);

// OBJECT USING FUNCTION
function test(){
    console.log("Welcome",users.name);
}
test();

// FUNCTION WITHIN OBJECT
let user2={
    name:'Shruti Mishra',
    email:'shruti@gmail.com',
    address:'Unnao',
    welcome:function(){
        return "Welcome "+this.email;
    }
}
console.log(user2.welcome())

// OBJECT USING ARRAY
const user3=[
    {
        name:'Deepa',
        email:'deepa@gmail.com',
    },
    {
        name:'Shruti',
        email:'shruti@gmail.com',
    },
    {
        name:'Dhruv',
        email:'dhruv@gmail.com',
    },
    {
        name:'Aishu',
    },
    {
        name:'Komal',
        email:'komal@gmail.com',
    },
]
// console.log(user3);
for(let i=0;i<user3.length;i++){
    // console.log(user3[i]);
    // console.log("Email-"+user3[i].email);
    // console.log("Name-"+user3[i].name);
    // console.log("Email-"+user3[i].email);
    console.log(user3[i].email ||'email is not available');
}

//OBJECT WITHIN OBJECT
let employee={
    name:'Deepali Singh',
    email:'deepalisingh@gmail.com',
    address:{
        building_no:'541/A',
        area:'Tail Mill',
        pincode:'208010',
        city:'Kanpur',
        state:'UP'
    }
}
console.log(employee);
console.log(employee.address);
console.log(employee.address.city);

//OTHER PROPERTIES OF OBJECT LIKE USING SPACE
let user4={
    'first name':'deepali',
    email:'deepa@gmail.com'
}
console.log(user4);
console.log(user4["first name"])

//ADD NEW VALUE AND UPDATE VALUE
user4.age='20';
console.log(user4)

user4.email='deepalisingh@gmail.com';
console.log(user4);

//DYNAMICALLY ADDING KEY AND VALUE IN OBJECT
let userDefinedKey=prompt("Please Enter the field-");
let userDefinedValue=prompt("Please Enter the Value for "+userDefinedKey);
let user5={
    name:'Avneesh',
    email:'avneesh@gmail.com',
    [userDefinedKey]:userDefinedValue,
}
console.log(user5);
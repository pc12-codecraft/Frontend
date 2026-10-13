//non singleton
//const tinderUser = {}   //{}

//singleton
const tinderUser = new Object();  //{}
tinderUser.id = "123abc";
tinderUser.name = "samay";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
//{ id: '123abc', name: 'samay', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "priya",
            lastname : "chauhan",
        }
    }
}
//console.log(regularUser);
/*
{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'priya', lastname: 'chauhan' } }
}
*/

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

 const obj3 = {obj1, obj2}
 //console.log(obj3);
 //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

 const obj4 = Object.assign({}, obj1,obj2);
// console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2};
//console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id : 1,
        email : "h@gmail.com",
    },
    {
        id : 1,
        email : "h@mail.com",
    },
    {
        id : 1,
        email : "h@gmail.com",  //2
    }
]

//console.log(users[1].email);
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
/*
h@mail.com
{ id: '123abc', name: 'samay', isLoggedIn: false }
[ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'samay', false ]
[ [ 'id', '123abc' ], [ 'name', 'samay' ], [ 'isLoggedIn', false ] ]
true
*/
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh",
}

//console.log(course.courseInstructor);

const {courseInstructor} = course;
//console.log(courseInstructor);

const {courseInstructor : instructor} = course;
//console.log(instructor);
//hitesh


//API format

// {
//     "course" : "js in hindi",
//     "rate" : "999",
//     "courseProfessor" : "hitesh", 
// }

[
    {},
    {}, 
]


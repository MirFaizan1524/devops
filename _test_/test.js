const request = require('supertest');
const app = require("../app.js");

// test('addition of two numbers',()=>{

//     a=1,
//    b= 4,
//    sum = a+b;
//   expect(sum).toBe(5) 

// })

describe('Testing the get APi',()=>{
// Case 1.


test('Testing the default route',async()=>{
    
    let response = await request(app).get('/');
    let jsonResponse = await JSON.parse(response.text); 
    expect(jsonResponse).toMatchObject({success:true})

})
   




})




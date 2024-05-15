/**
    
//* ------------------------------------------------------------------

//_Test => Create Tourist 
async function CreateTourist () {
    console.log("Test => Create Tourist");
    try {
        const response = await axios.post(`${process.env.REACT_APP_TOURIST_URL}/api/v1/tourists`, {
            username: 'dev_sample',
            name: 'Sample Tourist',
            country: 'Sri Lanka',
            phone_number: '0712345678',
            password: 't_dev'
        });
        // console.log(response.data);
        console.log("\tPassed => Create Tourist");
        console.log("\t****************************** \n");
    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Create Tourist");
        console.log("\t****************************** \n");
    }
} 


//_Test => Update Tourist
async function UpdateTourist () {
    console.log("Test => Update Tourist");
    try {
        const response = await axios.put(`${process.env.REACT_APP_TOURIST_URL}/api/v1/tourists`, {
            username: 'dev_sample',
            name: 'Sample Tourist',
            country: 'Sri Lanka',
            phone_number: '0712345678',
            password: 't_dev',
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY'
        });
        // console.log(response.data);
        console.log("\tPassed => Update Tourist");
        console.log("\t****************************** \n");
    }  
    catch (error) { 
        console.error(error);
        console.log("\tFailed => Update Tourist");
        console.log("\t****************************** \n");
    }
} 
//_Test => Delete Tourist
async function DeleteTourist () {
    console.log("Test => Delete Tourist");
    try {
        const response = await axios.delete(`${process.env.REACT_APP_TOURIST_URL}/api/v1/tourists`, {
            data: {
                username: 'dev_sample'
            }
        });
        // console.log(response.data);
        console.log("\tPassed => Delete Tourist");
        console.log("\t****************************** \n");
    } 
    catch (error) {
        console.error(error);
        console.log("\tFailed => Delete Tourist");
        console.log("\t****************************** \n");
    }
}

 */

const request = require("supertest")('https://downsouth-tourist.onrender.com');

describe("POST / /api/v1/tourists", function () {
    it("creates a new tourist", async function () {
        const response = await request.post("/api/v1/tourists").send({
            username: 'dev_sample',
            name: 'Sample Tourist',
            country: 'Sri Lanka',
            phone_number: '0712345678',
            password: 't_dev'
        });

        expect(response.status).toEqual(201);
        expect(response.body).not.toBeNull();
    });
});

describe("PUT / /api/v1/tourists", function () {
    it("updates a tourist", async function () {
        const response = await request.put("/api/v1/tourists").send({
            username: 'dev_sample',
            name: 'Sample Tourist',
            country: 'Sri Lanka',
            phone_number: '0712345678',
            password: 't_dev',
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY'
        });

        expect(response.status).toEqual(201);
        expect(response.body).not.toBeNull();
    });
});

describe("DELETE / /api/v1/tourists", function () {
    it("deletes a tourist", async function () {
        const response = await request.delete("/api/v1/tourists").send({
            username: 'dev_sample'
        });

        expect(response.status).toEqual(201);
        expect(response.body).not.toBeNull();
    });
});
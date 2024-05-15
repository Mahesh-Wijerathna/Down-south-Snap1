

const request = require("supertest")('https://downsouth-auth.onrender.com');

describe("POST / /api/v1/auth", function () {
    it("creates a new user", async function () {
        const response = await request.post("/api/v1/auth").send({
            username: 'dev_sample',
            usertype: 'admin',
            password: 'dev',
        });

        expect(response.status).toEqual(201);
        expect(response.body).not.toBeNull();
    });
});

describe("POST / /api/v1/auth/login", function () {
    it("logs in a user", async function () {
        const response = await request.post("/api/v1/auth/login").send({
            username: 'dev_sample',
            password: 'dev',
        });

        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
});

describe("GET / /api/v1/auth/verifytoken", function () {
    it("verifies a token", async function () {
        const response = await request.get("/api/v1/auth/verifytoken").set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY');

        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
});

describe("PUT / /api/v1/auth/update", function () {
    it("updates a user", async function () {
        const response = await request.put("/api/v1/auth/update").send({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY',
            username: 'dev_sample',
            usertype: 'admin',
            password: 'dev',
        });

        expect(response.status).toEqual(201);
        expect(response.body).not.toBeNull();
    });
});

describe("DELETE / /api/v1/auth/delete", function () {
    it("deletes a user", async function () {
        const response = await request.delete("/api/v1/auth/delete").send({
            username: 'dev_sample'
        });

        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
});
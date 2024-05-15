

const request = require("supertest")('https://downsouth-m-center.onrender.com');

describe("POST / /api/v1/m_center", function () {
    it("creates a new medical center", async function () {
        const response = await request.post("/api/v1/m_center").send({
            name: 'Sample Medical Center',
            longitude: 6.9271,
            latitude: 79.8612,
            destination: 'Sample Destination2',
            phone_number: '0712345678',
            owner_name: 'Sample Owner',
            description: 'Sample Description',
            username: 'm_dev2',
            password: 'dev2'

        });

        expect(response.status).toEqual(201);
        expect(response.body).not.toBeNull();
    });
}
);

describe("GET / /api/v1/m_center", function () {
    it("gets all medical centers", async function () {
        const response = await request.get("/api/v1/m_center");
        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
}
);

describe("GET / /api/v1/m_center/m_dev2", function () {
    it("gets one medical center", async function () {
        const response = await request.get("/api/v1/m_center/m_dev2");
        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
}
);

describe("GET / /api/v1/m_center/search_by_destination?destination=Sample Destination1", function () {
    it("searches with destination", async function () {
        const response = await request.get("/api/v1/m_center/search_by_destination?destination=Sample Destination1");
        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
}
);

describe("GET / /api/v1/m_center/search_by_radius?longitude=80&latitude=80&radius=100", function () {
    it("searches with radius", async function () {
        const response = await request.get("/api/v1/m_center/search_by_radius?longitude=80&latitude=80&radius=100");
        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
}
);

describe("PUT / /api/v1/m_center", function () {
    it("updates a medical center", async function () {
        const response = await request.put("/api/v1/m_center").send({
            name: 'Sample Medical Center',
            longitude: 6.9271,
            latitude: 79.8612,
            destination: 'Sample Destination1',
            phone_number: '0712345678',
            owner_name: 'Sample Owner',
            description: 'Sample Description',
            username: 'm_dev2',
            password: 'dev',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY',

        });

        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
}
);

describe("DELETE / /api/v1/m_center", function () {
    it("deletes a medical center", async function () {
        const response = await request.delete("/api/v1/m_center").send({
            username: 'm_dev2'
        });

        expect(response.status).toEqual(200);
        expect(response.body).not.toBeNull();
    });
}
);



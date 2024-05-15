const request = require("supertest")("https://downsouth-appointment.onrender.com");


describe("POST / /api/v1/appointment", function () {
    it("creates a new appointment", async function () {
      const response = await request.post("/api/v1/appointment").send({
        appointment_id: 'dev_id',
        date: '2024-03-26',
        time: '21:56',
        medical_center: 'hh',
        doctor: 'hh',
        patient: 'hh',
        description: 'hh',
        username: 'hh'
      });
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    });
  }
);
    
  
 

describe("GET / /api/v1/appointment/dev_id", function () {
    it("returns one when  appointment_id is requested", async function () {
      const response = await request.get("/api/v1/appointment/dev_id");
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    });
  }
);

describe("GET / /api/v1/appointment", function () {
    it("returns all appointments", async function () {
      const response = await request.get("/api/v1/appointment");
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    });
  }
);

describe("GET / /api/v1/appointment/search_with_username/user1", function () {
    it("returns all appointments with username", async function () {
      const response = await request.get("/api/v1/appointment/search_with_username/user1");
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    });
  }
);

describe("GET / /api/v1/appointment/search_with_m_center/medical_center", function () {
    it("returns all appointments with medical center", async function () {
      const response = await request.get("/api/v1/appointment/search_with_m_center/medical_center");
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    });
  }
);

describe("PUT / /api/v1/appointment", function () {
    it("updates a appointment", async function () {
      const response = await request.put("/api/v1/appointment").send({
        appointment_id: 'dev_id',
        date: '2024-03-26',
        time: '21:56',
        medical_center: 'hh',
        doctor: 'hh',
        patient: 'hh',
        description: 'hh',
        username: 'hh'
      });
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    });
  }
);



describe("DELETE / /api/v1/appointment", function () {
    it("deletes a appointment", async function () {
      const response = await request.delete("/api/v1/appointment").send({
        appointment_id: 'dev_id'
      });
  
      expect(response.status).toEqual(201);
      expect(response.body).not.toBeNull();
      
    }
  );
  }
);  
  

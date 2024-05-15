


const fs = require('fs');


const request = require("supertest")('https://downsouth-destination.onrender.com');

describe("POST / /api/v1/destination", function () {
    it("creates a new destination", async function () {
        const imagePath = '../testing/source.jpg';
        const fileData = fs.readFileSync(imagePath); 
        const blob = new Blob([fileData], { type: 'image/jpeg' }); 
        const formData = new FormData();
        formData.append('name', 'Sample Destination1');
        formData.append('file', blob, 'source.jpg'); 
        const response = request.post(`/api/v1/destination/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type
            }
        });
  
      
      expect(response.body).not.toBeNull();
      
    });
  }
);


describe("PUT / /api/v1/destination", function () {
    it("updates a destination", async function () {
        const imagePath = '../testing/updated.PNG';
        const fileData = fs.readFileSync(imagePath); 
        const blob = new Blob([fileData], { type: 'image/jpeg'}); 
        const formData = new FormData();
        formData.append('name', 'Sample Destination1');
        formData.append('file', blob, 'updated.PNG'); 
        const response = request.put(`/api/v1/destination/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type
            }
        });
  
      
      expect(response.body).not.toBeNull();
      
    });
  }
);
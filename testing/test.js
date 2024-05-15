require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

console.clear(); 
console.log("Hello World From Test.js");

console.log("======================== \n");
console.log("CENTRAL URL" + process.env.REACT_APP_CENTRAL_SERVER_URL);
console.log("AUTH URL = "+process.env.REACT_APP_AUTH_URL);
console.log("TOURIST URL = "+process.env.REACT_APP_TOURIST_URL);
console.log("MEDICAL CENTER URL = "+process.env.REACT_APP_MEDICAL_CENTER_URL);
console.log("APPOINTMENT URL = "+process.env.REACT_APP_APPOINTMENT_URL);
console.log("DESTINATION URL = "+process.env.REACT_APP_DESTINATION_URL+ "\n");

//_Test => Base URLS
async function Base() {
    console.log("Test => Base URL\n");
    try {
        
         axios.get(`${process.env.REACT_APP_CENTRAL_SERVER_URL}`);
         axios.get(`${process.env.REACT_APP_AUTH_URL}`);
         axios.get(`${process.env.REACT_APP_TOURIST_URL}`);
         axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}`);
         axios.get(`${process.env.REACT_APP_DESTINATION_URL}`);
         axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}`);
        
        
        
        
        const response0 = await axios.get(`${process.env.REACT_APP_CENTRAL_SERVER_URL}`);
        const response1 = await axios.get(`${process.env.REACT_APP_AUTH_URL}`);
        const response2 = await axios.get(`${process.env.REACT_APP_TOURIST_URL}`);
        const response3 = await axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}`);
        const response4 = await axios.get(`${process.env.REACT_APP_DESTINATION_URL}`);
        const response5 = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}`);
        
        //console.log("\n\n" + response0.data + "\n" + response1.data + "\n" + response2.data + "\n" + response3.data + "\n" + response4.data + "\n" + response5.data + "\n"); ;
        console.log("\tPASSED => Base URL Test");
        console.log("\t********************** \n");
    } catch (error) {
        console.log("\tFailed => Base URL Test");
        console.log("\t********************** \n");
        console.error(error);
    }
    
}

// print hello evry 5 minus 





//_Test => Get one with appointment_id
async function getOneAppointment() {
    console.log("Test => Get one with appointment_id");
    
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/dev_id`);
        // console.log(response.data);
        console.log("\tPassed => Get one with appointment_id ");
        console.log("\t************************************* \n");
    } catch (error) {
        //console.error(error);
        console.log("\tFailed => Get one with appointment_id");
        console.log("\t************************************* \n");
    }
    
}

//_Test => Get all appointments
async function getAllAppointments() {
    console.log("Test => Get all appointments\n");
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment`);
        //console.log(response.data);
        console.log("\tPassed => Get all appointments");
        console.log("\t****************************** \n");

    } catch (error) {
        console.log("\tFailed => Get all appointments");
        console.log("\t****************************** \n");
        //console.error(error);
    }
    
}

//_Test => Create a appointment
async function createAppointment() {
    console.log("Test => Create a appointment\n");
    
    try {
        const response = await axios.post(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment`, {
            appointment_id: 'dev_id',
            date: '2024-03-26',
            time: '21:56',
            medical_center: 'hh',
            doctor: 'hh',
            patient: 'hh',
            description: 'hh',
            username: 'hh'
        });
        // console.log(response.data);
        console.log("\tPassed => Appointment Create");
        console.log("\t****************************** \n");
    } catch (error) {
        // console.error(error);
        console.log("\tFailed => Appointment Create");
        console.log("\t****************************** \n");
    }
    
    

}

//_Test => Update a appointment
async function updateAppointment() {
    console.log("Test => Update a appointment");
    
    
    const appointmentData = {
        appointment_id: "dev_id",
        date: "2021-09-01",
        time: "10:00",
        medical_center: "Sample Medical Center",
        doctor: "Dr. Smith",
        patient: "sample patient",
        description: "Checkup",
        username: "user1"
    };

    try {
        const response = await axios.put(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/`, appointmentData, {
            headers: { 'Content-Type': 'application/json' }
        });
        //console.log('Appointment updated successfully:', response.data);
        console.log("\tPassed => Appointment Update");
        console.log("\t****************************** \n");
    } catch (error) {
        // console.error('Error updating appointment:', error);
        console.log("\tFailed => Appointment Update");
        console.log("\t****************************** \n");
    }
    
}

//_Test => Delete a appointment
async function deleteAppointment() {
    console.log("Test => Delete a appointment");
    
    
    const appointmentData = {
        appointment_id: "dev_id"
    };

    try {
        const response = await axios.delete(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/`, { data: appointmentData });
        // console.log('Appointment deleted successfully:', response.data);
        console.log("\tPassed => Appointment Delete");
        console.log("\t****************************** \n");
    } catch (error) {
        // console.error('Error deleting appointment:', error);
        console.log("\tFailed => Appointment Delete");
        console.log("\t****************************** \n");
    }
    
}

//_Test => Search with Username
async function SearchWithUserName () {
    console.log("Test => Search with username");
    
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/search_with_username/user1`);
        // console.log(response.data);
        console.log("\tPassed => Search with username");
        console.log("\t****************************** \n");
    } catch (error) {
        // console.error(error);
        console.log("\tFailed => Search with username");
        console.log("\t****************************** \n");
    }
    
}

//_Test => Search with Medical Center
async function SearchWithMedicalCenter () {
    console.log("Test => Search with Medical Center");
    
    try {
        const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_URL}/api/v1/appointment/search_with_m_center/medical_center`);
        // console.log(response.data);
        console.log("\tPassed => Search with Medical Center");
        console.log("\t****************************** \n");
    } catch (error) {
        // console.error(error);
        console.log("\tFailed => Search with Medical Center");
        console.log("\t****************************** \n");
    }
    
}

async function RUN_ALL_APPOINTMENT () {
    await Base();
    await createAppointment();
    await getAllAppointments();
    await getOneAppointment();
    await SearchWithUserName();
    await SearchWithMedicalCenter();
    await updateAppointment();
    await deleteAppointment();
}

// RUN_ALL_APPOINTMENT();

//* -------------------------------------------------------------------

//_Test => Create Destination
async function CreateDestination () {
    console.log("Test => Create Destination");
    const imagePath = "./source.jpg";
    try {
        const fileData = fs.readFileSync(imagePath); 
        const blob = new Blob([fileData], { type: 'image/jpeg' }); 
        const formData = new FormData();
        formData.append('name', 'Sample Destination1');
        formData.append('file', blob, 'source.jpg'); 
        const response = await axios.post(`${process.env.REACT_APP_DESTINATION_URL}/api/v1/destination/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type
            }
        });
        console.log("\tPassed => Create Destination");
        console.log("\t****************************** \n");        
    } catch (error) {
        console.error("Error reading file:", error);
        console.log("\tFailed => Create Destination");
        console.log("\t****************************** \n");
    }
}

//_Test => Update Destination
async function UpdateDestination () {
    console.log("Test => Update Destination");
    const imagePath = "./updated.PNG";
    try {
        const fileData = fs.readFileSync(imagePath); 
        const blob = new Blob([fileData], { type: 'image/jpeg'}); 
        const formData = new FormData();
        formData.append('name', 'Sample Destination1');
        formData.append('file', blob, 'updated.PNG'); 
        const response = await axios.put(`${process.env.REACT_APP_DESTINATION_URL}/api/v1/destination/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set content type
            }
        });
        console.log("\tPassed => Update Destination");
        console.log("\t****************************** \n");        
    } catch (error) {
        console.error("Error reading file:", error);
        console.log("\tFailed => Update Destination");
        console.log("\t****************************** \n");
    }
}

async function RUN_ALL_DESTINATION () {
    await CreateDestination();
    await UpdateDestination();
} 

// RUN_ALL_DESTINATION(); 

//* -------------------------------------------------------------------

//_Test => Create User
async function CreateUser () {
    console.log("Test => Create User");
    try {
        const response = await axios.post(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth`, {
            username: 'dev_sample',
            usertype: 'admin',
            password: 'dev',
        }); 
        console.log(response.data);
        console.log("\tPassed => Create User");
        console.log("\t********************* \n");
    } 
    catch (error) {
        console.error(error);
        console.log("\tFailed => Create User");
        console.log("\t********************* \n");
    }
    //await new Promise(resolve => setTimeout(resolve, 1000));
}

//_Test => Login User
async function LoginUser () {
    console.log("Test => Login User");
    try {
        const response = await axios.post(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/login`, {
            username: 'dev_sample',
            password: 'dev',
        });
        // console.log(response.data);
        console.log("\tPassed => Login User");
        console.log("\t********************* \n");
        
    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Login User");
        console.log("\t********************* \n");
    }
    //await new Promise(resolve => setTimeout(resolve, 1000));
}

//_Test => Verify Token
async function VerifyToken () {
    console.log("Test => Verify Token");
    try {
        const response = await axios.get(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/verifytoken`, {
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY'
            }
        });
        console.log(response.data);
        console.log("\tPassed => Verify Token");
        console.log("\t********************* \n");
        
    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Verify Token");
        console.log("\t********************* \n");
    }
    
} 

//_Test => Update User
async function UpdateUser () {
    console.log("Test => Update User");
    try {
        const response = await axios.put(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/update`, {
            
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY',
            username: 'dev_sample', 
            usertype: 'admin',
            password: 'dev', 
        }); 
        // console.log(response.data);
        console.log("\tPassed => Update User");
        console.log("\t********************* \n");
        
    } 
    catch (error) {
        console.error(error);
        console.log("\tFailed => Update User");
        console.log("\t********************* \n");
    }
    
}

//_Test => Delete User
async function DeleteUser () {
    console.log("Test => Delete User");
    try {
        const response = await axios.delete(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/delete`, {
            data: {
                username: 'dev_sample'
            }
        }); 
        // console.log(response.data);
        console.log("\tPassed => Delete User");
        console.log("\t********************* \n");
        
    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Delete User");
        console.log("\t********************* \n");
    }
    
}



RUN_ALL_AUTH = async () => {
    Base();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await CreateUser();
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    await LoginUser();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await VerifyToken();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await UpdateUser();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await DeleteUser(); 

} 

// RUN_ALL_AUTH(); 
 
//* ------------------------------------------------------------------

//_Test => Create Medical Center
async function CreateMedicalCenter () {
    //console.log( await axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}`));
    console.log("Test => Create Medical Center");
    try {
         const response = await axios.post(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center`, {
            name: 'Sample Medical Center',
            longitude: 6.9271, 
            latitude: 79.8612,
            destination : 'Sample Destination2',
            phone_number: '0712345678',
            owner_name: 'Sample Owner',
            description: 'Sample Description',
            username: 'm_dev2',
            password: 'dev2'

        });
        // console.log(response.data);
        console.log("\tPassed => Create Medical Center");
        console.log("\t****************************** \n");

    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Create Medical Center");
        console.log("\t****************************** \n");
    }
}

//_Test => Get all Medical Centers
async function GetAllMedicalCenters () {
    console.log("Test => Get all Medical Centers");
    try {
        const response = await axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center`);
        // console.log(response.data);
        console.log("\tPassed => Get all Medical Centers");
        console.log("\t****************************** \n");
 
    } 
    catch (error) {
        console.error(error);
        console.log("\tFailed => Get all Medical Centers");
        console.log("\t****************************** \n");
    } 
}

//_Test => Get one Medical Center
async function GetOneMedicalCenter () {
    console.log("Test => Get one Medical Center");
    const username = 'm_dev2'; 
    try {
        const response = await axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center/${username}`);
        // console.log(response.data);
        console.log("\tPassed => Get one Medical Center");
        console.log("\t****************************** \n");
 
    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Get one Medical Center");
        console.log("\t****************************** \n");
    }
} 
//_Test => Search with Destination
async function SearchWithDestination () {
    console.log("Test => Search with Destination");
    try {
        const response = await axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center/search_by_destination?destination=Sample Destination1`);
        // console.log(response.data);
        console.log("\tPassed => Search with Destination");
        console.log("\t****************************** \n");
    }
    catch (error) {    
        console.error(error);
        console.log("\tFailed => Search with Destination");
        console.log("\t****************************** \n");
    }
}
//_Test => Search with Radius
async function SearchWithRadius () {
    console.log("Test => Search with Radius");
    try { 

        const longitude = 80; 
        const latitude = 80;  
        const radius = 100;
 
        const response = await axios.get(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center/search_by_radius?longitude=${longitude}&latitude=${latitude}&radius=${radius}`);
        // console.log(response.data); 
        console.log("\tPassed => Search with Radius"); 
        console.log("\t****************************** \n"); 
    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Search with Radius");
        console.log("\t****************************** \n");
    } 
} 
 

//_Test => Update Medical Center
async function UpdateMedicalCenter () {
    console.log("Test => Update Medical Center");
    try {
        const response = await axios.put(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center`, {
            name: 'Sample Medical Center',
            longitude: 6.9271,
            latitude: 79.8612, 
            destination : 'Sample Destination1',
            phone_number: '0712345678',
            owner_name: 'Sample Owner',
            description: 'Sample Description',
            username: 'm_dev2', 
            password: 'dev' ,
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY1ODliNjU0NzNlYTc1NGQwYjEyNDQiLCJ1c2VybmFtZSI6ImFkbWluMTYiLCJpYXQiOjE3MTUyODY2NDUsImV4cCI6MTcxNzg3ODY0NX0.AuvWeUG29AQJOT3qTnHQckAEa9JAEWjy1pRd2fLGqEY',
            
        });
        // console.log(response.data); 
        console.log("\tPassed => Update Medical Center");
        console.log("\t****************************** \n"); 

    }
    catch (error) {
        console.error(error);
        console.log("\tFailed => Update Medical Center");
        console.log("\t****************************** \n");
    }
} 

//_Test => Delete Medical Center
async function DeleteMedicalCenter () {
    console.log("Test => Delete Medical Center");
    try {
        const response = await axios.delete(`${process.env.REACT_APP_MEDICAL_CENTER_URL}/api/v1/m_center`, {
            data: {
                username: 'm_dev2' 
            }
        });
        // console.log(response.data);
        console.log("\tPassed => Delete Medical Center");
        console.log("\t****************************** \n");

    } 
    catch (error) {
        console.error(error);
        console.log("\tFailed => Delete Medical Center");
        console.log("\t****************************** \n");
    }
}
// CreateMedicalCenter();
// GetAllMedicalCenters();
// GetOneMedicalCenter();
// SearchWithDestination();
// SearchWithRadius(); 
RUN_ALL_MEDICAL_CENTER = async () => {
    await CreateMedicalCenter();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await GetAllMedicalCenters();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await GetOneMedicalCenter();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await SearchWithDestination();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await SearchWithRadius();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await UpdateMedicalCenter(); 
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    await DeleteMedicalCenter();    
} 

// RUN_ALL_MEDICAL_CENTER(); 

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

RUN_ALL_TOURIST = async () => {
    await CreateTourist(); 
    await new Promise(resolve => setTimeout(resolve, 1000));
    await UpdateTourist();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await DeleteTourist();
}

// RUN_ALL_TOURIST();   
FINALE = async () => {
    await RUN_ALL_APPOINTMENT();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await RUN_ALL_DESTINATION();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await RUN_ALL_AUTH();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await RUN_ALL_MEDICAL_CENTER();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await RUN_ALL_TOURIST();
}

//  FINALE();
 Base();



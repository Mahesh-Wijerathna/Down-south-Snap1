createHttpError = require('http-errors');
const axios = require('axios');
const M_CenterModel = require('./m_center');
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
    console.log("Try to create a m_center");
    try{
        const name = req.body.name;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const destination = req.body.destination;
        const description = req.body.description;
        const phone_number = req.body.phone_number;
        const owner_name = req.body.owner_name;
        const username = req.body.username;
        const password = req.body.password;


        if(!name || !longitude || !latitude || !destination || !username || !description || !owner_name|| !phone_number || !password){
            res.status(400).send({ message:
                'Missing required fields \n'+
                `name : ` + name + '\n' +
                `longitude : ` + longitude + '\n' +
                `latitude : ` + latitude + '\n' +
                `destination : ` + destination + '\n' +
                `description : ` + description + '\n' +
                `phone_number : ` + phone_number + '\n' +
                `owner_name : ` + owner_name + '\n' +
                `username : ` + username + '\n' +
                `password : ` + password + '\n'});
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isM_CenterExist = await M_CenterModel.findOne({username: username}).exec();

        if(isM_CenterExist){
            res.status(400).send({ message: 'M_Center already exists' });
            throw createHttpError(400, 'M_Center already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newM_Center = new M_CenterModel({
            name: name,
            location: {
                type: "Point",
                coordinates: [longitude, latitude]
            },
            destination: destination,
            username: username,
            description: description,
            phone_number: phone_number,
            owner_name: owner_name,
            
        });

        const result = await newM_Center.save();
            
                    axios.post(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth`, {
                        username: username,
                        usertype: 'm_center',
                        password: hashedPassword
                    })
                    .then((res) => {
                        console.log(`statusCode: ${res.statusCode}`)
                        console.log(res)
                    })
                    .catch((error) => {
                        console.error(error)
                    })

        console.log("M_Center saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}





exports.register_v1 =  async (req, res, next) => {
    console.log("Try to create a m_center");
    try{
        const username = req.body.username;
        const usertype = req.body.usertype;
        //const { image } = req.files;
        const password = req.body.password;

        // if(!image){
        //     throw createHttpError.BadRequest('Missing image');
        // }
        // if(!image.mimetype.startsWith('image')){
        //     throw createHttpError.BadRequest('File uploaded is not an image');
        // }
        // let filepath = `${__dirname}/public/uploads/${image.name}`;
        // image.mv(filepath);

        // let file_path_to_upload = 'public/profile_photos/' + image.name;

        if(!username || !password || !usertype){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isM_CenterExist = await M_CenterModel.findOne.username({username: username}).exec();

        if(isM_CenterExist){
            throw createHttpError(400, 'M_Center already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newM_Center = new M_CenterModel({ 
            username: username,
            //Image: file_path_to_upload,
            password: hashedPassword
        });
        const result = await newM_Center.save();
                //* axios sample post 
                axios.post(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth`, {
                    username: username,
                    usertype: 'm_center',
                    password: hashedPassword
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })

        console.log("M_Center saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.register_v2 = async (req, res, next) => {
    console.log("Try to create a m_center");
    try{
        const name = req.body.name;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const destination = req.body.destination;
        const username = req.body.username;
        const password = req.body.password;
        
        
        

        if(!name || !longitude || !latitude || !destination || !username || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const isM_CenterExist = await M_CenterModel.findOne({username: username}).exec();

        if(isM_CenterExist){
            throw createHttpError(400, 'M_Center already exists');   
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newM_Center = new M_CenterModel({
            name: name,
            location: {
                type: "Point",
                coordinates: [longitude, latitude]
            },
            destination: destination,
            username: username,
            password: hashedPassword
        });
        const result = await newM_Center.save();
                axios.post(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth`, {
                    username: username,
                    usertype: 'm_center',
                    password: password
                })
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error)
                })

        console.log("M_Center saved in database successfully!");
        res.status(201).send(result);
    }
    catch(error){
        next(error);
    }
}

// exports.register = async (req, res, next) => {
//     console.log("Try to create a m_center");
//     try{
//         const name = req.body.name;
//         const longitude = req.body.longitude;
//         const latitude = req.body.latitude;
//         const destination = req.body.destination;
//         const phone_number = req.body.phone_number;
//         const owner_name = req.body.owner_name;
//         const description = req.body.description;
//         const username = req.body.username;
//         const password = req.body.password;

      
        

//         if(!name  || !destination || !phone_number || !owner_name || !description || !username || !password){
//             res.status(400).send({ message: 
//                 'Missing required fields \n'+
//                 `name : ` + name + '\n' +
//                 `destination : ` + destination + '\n' +
//                 `phone_number : ` + phone_number + '\n' +
//                 `owner_name : ` + owner_name + '\n' +
//                 `description : ` + description + '\n' +
//                 `username : ` + username + '\n' +
//                 `password : ` + password + '\n'});
//             throw createHttpError.BadRequest('Missing required fields');
//         }

//         const isM_CenterExist = await M_CenterModel.findOne({username: username}).exec();

//         if(isM_CenterExist){
//             throw createHttpError(400, 'M_Center already exists');   
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newM_Center = new M_CenterModel({
//             name: name,
//             longitude: longitude,
//             latitude: latitude,
//             destination: destination,
//             phone_number: phone_number,
//             owner_name: owner_name,
//             description: description,
//             username: username,
            
//         });
6
//         const result = await newM_Center.save();

//                 axios.post('http://localhost:4001/api/v1/auth', {
//                     username: username,
//                     usertype: 'm_center',
//                     password: password
//                 })
//                 .then((res) => {
//                     console.log(`statusCode: ${res.statusCode}`)
//                     console.log(res)
//                 })
//                 .catch((error) => {
//                     console.error(error)
//                 })
            
//         console.log("M_Center saved in database successfully!");
//         res.status(201).send(result);
//     }
//     catch(error){
//         next(error);
//     }
// }

// exports.update = async (req, res, next) => {
//     console.log("Try to update a m_center");
//     try{
//         const id = req.params.id;
//         const name = req.body.name;
//         const longitude = req.body.longitude;
//         const latitude = req.body.latitude;
//         const destination = req.body.destination;
//         const phone_number = req.body.phone_number;
//         const owner_name = req.body.owner_name;
//         const description = req.body.description;
//         const username = req.body.username;
//         const password = req.body.password;

//         if(!name || !longitude || !latitude || !destination || !phone_number || !owner_name || !description || !username || !password){
//             throw createHttpError.BadRequest('Missing required fields');
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const existM_Center = await M_CenterModel.findOne({ username: username }).exec();
//         if(!existM_Center){
//             res.status(400).send({ message: 'M_Center not found' });
//             throw createHttpError.NotFound('M_Center not found');
//         }
        
//         existM_Center.name = name;
//         existM_Center.longitude = longitude;
//         existM_Center.latitude = latitude;
//         existM_Center.destination = destination;
//         existM_Center.phone_number = phone_number;
//         existM_Center.owner_name = owner_name;
//         existM_Center.description = description;
//         existM_Center.username = username;

//         const result = await existM_Center.save();
        


//             await axios.put('http://localhost:4001/api/v1/auth', {
//                 username: username,
//                 usertype: 'm_center',
//                 password: hashedPassword
//             })
//             .then((res) => {
//                 console.log(`statusCode: ${res.statusCode}`)
//                 console.log(res)
//             })
//             .catch((error) => {
//                 console.error(error)
//             })

        
//         console.log("M_Center updated successfully!");
//         res.status(200).send(result);
//     }
//     catch(error){
//         next(error);
//     }
// }
   
// exports.delete = async (req, res, next) => {
//     console.log("Try to delete a m_center");
//     try{
//         const id = req.params.id;
//         const username = req.body.username;

//         const result = await M_CenterModel.findByIdAndDelete(id).exec();
//                 await axios.delete('http://localhost:4001/api/v1/auth', {
//                     username: username,
                    
//                 })
//                 .then((res) => {
//                     console.log(`statusCode: ${res.statusCode}`)
//                     console.log(res)
//                 })
//                 .catch((error) => {
//                     console.error(error)
//                 })
//         if(!result){
//             throw createHttpError.NotFound('M_Center does not exist');
//         }
//         // find and delete
//         User.findOneAndDelete({age: {$gte:5} }


//         console.log("M_Center deleted successfully!");
//         res.status(200).send(result);
//     }
//     catch(error){
//         next(error);
//     }
// }

exports.get_all = async (req, res, next) => {
    console.log("Try to get all m_centers");
    try{
        const result = await M_CenterModel.find().exec();
        if(!result){
            throw createHttpError.NotFound('No M_Center found');
        }
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}        
   
exports.get_by_username = async (req, res, next) => {
    console.log("Try to get a m_center by username");
    try{
        const username = req.params.username;
        if(!username){
            throw createHttpError.BadRequest('Missing required fields');
        }
        const result = await M_CenterModel.findOne({ username: username }).exec();
        if(!result){
            res.status(404).send({ message: 'M_Center not found' });
            //throw createHttpError.NotFound('M_Center not found');
        }
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
} 
        


exports.search_by_destination = async (req, res, next) => {
    console.log("Try to search a m_center by destination");
    try{
        let destination = req.query.destination;
        if(!destination){
            destination = ""
        }
         result = await M_CenterModel.find({ destination: { $regex: destination, $options: 'i' } }).exec();
        if(!result){
            throw createHttpError.NotFound('No M_Center found');
        }
        res.status(200).send(result);

    }
    catch(error){
        next(error);
    }
}


exports.search_by_radius_ = async (req, res, next) => {
    try{
        console.log("Try to search a m_center by radius");
        let longitude = req.query.longitude;
        let latitude = req.query.latitude;
        let radius = req.query.radius;
        
        console.log(typeof(longitude));
        console.log(typeof(latitude));
        console.log(typeof(radius));

        console.log('Longitude:', longitude);
        console.log('Latitude:', latitude);
        console.log('Radius:', radius);

        // cast string to number
        longitude = parseFloat(longitude);
        latitude = parseFloat(latitude);
        radius = parseFloat(radius);
        console.log(typeof(longitude));

        if(!longitude || !latitude || !radius){
            
            throw createHttpError.BadRequest('Missing required fields');
        }
        if(isNaN(longitude) || isNaN(latitude) || isNaN(radius)){
            throw createHttpError.BadRequest('Invalid or missing required fields');
        }
        const searchCenter = { type: "Point", coordinates: [longitude, latitude] };
        
        // const query = {
        //     location: {
        //       $geoWithin: {
        //         $centerSphere: [searchCenter, radius ] // Convert k meters to radians
        //       }
        //     }
        //   };
        // if(!query){
        //     throw createHttpError.NotFound('No M_Center found');
        // }
        // else
        //     console.log(query);
        
        console.log('Search Center:', searchCenter);
        console.log('Query:', {location : { $geoWithin:{$centerSphere:[searchCenter, radius / 6371]}} });
        result = await M_CenterModel.find({location : { $geoWithin:{$centerSphere:[searchCenter, radius / 6371]}} }).exec();
        if(!result){
            throw createHttpError.NotFound('No M_Center found');
        }
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}
/*************************************

async function findLocationsInRadius(longitude, latitude, radiusInMeters) {
  try {
    const searchCenter = { type: "Point", coordinates: [longitude, latitude] };
    const query = {
      location: {
        $geoWithin: {
          $centerSphere: [searchCenter, radiusInMeters / 6371000] // Convert meters to radians
        }
      }
    };
    const locations = await Location.find(query);
    console.log(locations); // Or return locations for further processing
  } catch (err) {
    console.error('Error fetching locations:', err);
  }


*******************************************/

exports.update = async (req, res, next) => {
    console.log("Try to update a m_center");
    try{
        const id = req.params.id;
        const name = req.body.name;
        const longitude = req.body.longitude;
        const latitude = req.body.latitude;
        const destination = req.body.destination;
        const phone_number = req.body.phone_number;
        const owner_name = req.body.owner_name;
        const description = req.body.description;
        const username = req.body.username;
        const password = req.body.password;
        const token = req.body.token;

        if(!name || !longitude || !latitude || !destination || !phone_number || !owner_name || !description || !username || !password){
            throw createHttpError.BadRequest('Missing required fields');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const existM_Center = await M_CenterModel.findOne({ username: username }).exec();
        if(!existM_Center){
            res.status(400).send({ message: 'M_Center not found' });
            throw createHttpError.NotFound('M_Center not found');
        }
        
        existM_Center.name = name;
        existM_Center.longitude = longitude;
        existM_Center.latitude = latitude;
        existM_Center.destination = destination;
        existM_Center.phone_number = phone_number;
        existM_Center.owner_name = owner_name;
        existM_Center.description = description;
        existM_Center.username = username;


        const result = await existM_Center.save();

            await axios.put(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/update`, {
                username: username,
                usertype: 'm_center',
                token: token,
                password: hashedPassword
            })
            .then((res) => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
            })


        console.log("M_Center updated successfully!");
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    console.log("Try to delete a m_center");
    try{
        const id = req.params.id;
        const username = req.body.username;
        const token = req.body.token;
        const isM_CenterExist = await M_CenterModel.findOne({username   : username}).exec();
        if(!isM_CenterExist){
            throw createHttpError.NotFound('M_Center does not exist');
        }
        else
            console.log("M_Center found");
        const result = await M_CenterModel.findOneAndDelete({ username: username }).exec();
        // const result = await M_CenterModel.findByIdAndDelete(id).exec();
                await axios.delete(`${process.env.REACT_APP_AUTH_URL}/api/v1/auth/delete`, {
                    data:{
                        username: username, 
                        token: token 
                    }
                }) 
                .then((res) => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        if(!result){
            throw createHttpError.NotFound('M_Center does not exist');
        }
        res.status(200).send(result);
    }
    catch(error){
        next(error);
    }
}

exports.search_by_radius = async (req, res, next) => {
    console.log("Try to search a m_center by radius");
    try {
      // Validate required parameters and their types (security best practice)
      if (!req.query.longitude || !req.query.latitude || !req.query.radius) {
        throw createHttpError.BadRequest('Missing required fields: longitude, latitude, or radius');
      }
  
    const longitude = Number(req.query.longitude);
    const latitude = Number(req.query.latitude);
    const radius = Number(req.query.radius); // Destructuring for readability
      
      // Validate types (optional, but enhances security):
      if (typeof longitude !== 'number' || typeof latitude !== 'number' || typeof radius !== 'number') {
        throw createHttpError.BadRequest('Invalid data types: longitude, latitude, and radius must be numbers');
      }
  
      // Convert radius to radians for Mongoose geoWithin query
      const radiusInRadians = radius / 6371; // Earth's radius in kilometers (adjust if needed)
  
      // Build the Mongoose query using $geoWithin for efficient geospatial search
      const query = {
        location: {
            $geoWithin: {
              $centerSphere: [[longitude, latitude], radiusInRadians]
            }
          }
        };
      
      
        //location: { $exists: true }
      
  
      // Optionally filter out M_Centers with missing location coordinates (if desired)
      // query.location = { $exists: true }; // Add this line if needed
  
      const results = await M_CenterModel.find(query).exec(); // Execute the search query
  
      if (!results.length) {
        res.status(200).send({ message: 'No M_Centers found within the specified radius' });
      } else {
        res.status(200).send(results);
      }
    } catch (error) {
      next(error); // Pass the error to the error handler middleware
    }
  };
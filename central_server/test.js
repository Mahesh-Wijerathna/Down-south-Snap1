
/**
    


app.use('/auth'       , proxy('http://localhost:4001'));
app.use('/tourist'    , proxy('http://localhost:4002'));
app.use('/m_center'   , proxy('http://localhost:4003'));
app.use('/destination', proxy('http://localhost:4004'));
app.use('/appointment', proxy('http://localhost:4005'));
app.use('/',(req,res,next) => {
    try{
        return res.status(200).json({message: 'Welcome to the central_server'});
    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'Error in central server'});
    }

    
});
app.listen(4000, () => {
    console.log('Central server running on port 4000');
});

 */

const request = require("supertest")('https://downsouth.onrender.com');

describe("GET /", function () { 
    it("returns a welcome message", async function () {
        const response = await request.get("/");
        
        expect(response.body).not.toBeNull();
    });
});

describe("GET /auth", function () {
    it("proxies to auth", async function () {
        const response = await request.get("/auth");
        
        expect(response.body).not.toBeNull();
    });
});

describe("GET /tourist", function () {
    it("proxies to tourist", async function () {
        const response = await request.get("/tourist");
        
        expect(response.body).not.toBeNull();
    });
});

describe("GET /m_center", function () {
    it("proxies to m_center", async function () {
        const response = await request.get("/m_center");
        
        expect(response.body).not.toBeNull();
    });
});

describe("GET /destination", function () {
    it("proxies to destination", async function () {
        const response = await request.get("/destination");
        
        expect(response.body).not.toBeNull();
    }); 
});

describe("GET /appointment", function () {
    it("proxies to appointment", async function () {
        const response = await request.get("/appointment");
        
        expect(response.body).not.toBeNull();
    });
});

// 
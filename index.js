const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.get('/', (req, res) => {
    res.send('Port is working fine')
})

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Helal', email: 'helal@gmail.com' },
    { id: 2, name: 'Kamal', email: 'Kamal@gmail.com' },
    { id: 3, name: 'Belal', email: 'Belal@gmail.com' },
];

// username: dbuser1
// password: rpMOPchIxQsMA254

// const uri = 'mongodb://localhost:27017'
const uri = "mongodb+srv://dbuser1:rpMOPchIxQsMA254@cluster0.7njjpna.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const userCollection = client.db('simpleNode').collection('users');
        // const user = { name: 'khalil', email: 'khalil@gmail.com' }
        // const result = await userCollection.insertOne(user);
        // console.log(result);

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })


        app.post('/users', async (req, res) => {
            const user = req.body; //client form a jeta submit korse, seta
            const result = await userCollection.insertOne(user)
            user._id = result.insertedId;
            console.log(result); // port 5000 er terminal e dekhabe
            res.send(user)  //eta amake client side e console log e dekhabe
        })
    }
    finally {

    }
}
run().catch(err => console.error(err))

// app.get('/users', (req, res) => {
//     res.send(users);
// })

// app.post('/users', (req, res) => {
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user);
//     console.log(req.body);
//     res.send(user)
// })


app.listen(port, () => {
    console.log(`Oyee! simple node server running ${port}`);
})
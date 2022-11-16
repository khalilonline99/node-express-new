const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Port is working fine')
})

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Helal', email: 'helal@gmail.com'},
    { id: 2, name: 'Kamal', email: 'Kamal@gmail.com'},
    { id: 3, name: 'Belal', email: 'Belal@gmail.com'},
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(req.body);
    res.send(user)
})


app.listen(port, () => {
    console.log(`Oyee! simple node server running ${port}`);
})
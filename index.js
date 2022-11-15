const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Port is working fine')
})

app.use(cors())

const users = [
    { id: 1, name: 'Helal', email: 'helal@gmail.com'},
    { id: 2, name: 'Kamal', email: 'Kamal@gmail.com'},
    { id: 3, name: 'Belal', email: 'Belal@gmail.com'},
];

app.get('/users', (req, res) => {
    res.send(users);
})


app.listen(port, () => {
    console.log(`Oyee! simple node server running ${port}`);
})
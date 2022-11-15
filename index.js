const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Port is working fine')
})


app.listen(port, () => {
    console.log(`Oyee! simple node server running ${port}`);
})
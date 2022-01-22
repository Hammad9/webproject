const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, './Company')

console.log(__dirname)
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send('Hello From the Express Server');
})



app.listen(port, () => {
    console.log(`App is Running at ${port} port`)
})
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8888;


app.use(cors());

const playerRoute = require('./routes/playerRoute')
const vtcRoute = require('./routes/vtcRoute')

const serverRoute = require('./routes/serverRoute')
app.use('/server', serverRoute);

app.use('/vtc', vtcRoute);
app.use('/player', playerRoute);
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
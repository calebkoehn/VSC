const express = require('express');
const cors = require('cors') // This is new
const app = express();
const port = 8000;
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));

require('./server/routes/person.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
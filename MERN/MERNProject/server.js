const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
// require('./server/routes/job.routes')(app);
require('./server/routes/skincare.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
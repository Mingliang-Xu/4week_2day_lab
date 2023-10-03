const express = require('express');
const cors = require('cors');
const app = express();
 app.use(cors());
 app.use(express.json());

const {getHouse, createHouse, updateHouse, deleteHouse} = require('./controller');


app.get('/api/houses', getHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);


 
 app.listen(4004, () => console.log('Server running on 4004'));


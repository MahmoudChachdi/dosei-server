const express = require('express');

const cors = require('cors');

const knex = require('knex');

const order=require('./controllers/order');







const db = knex({
 
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'dosei'
  }
});





const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
	res.send('its working')
})

app.post('/orderCOD',(req, res)=>order.handleOrderCOD(req, res, db))





app.get('/collab' , (req, res)=>{
  res.send('its working collab')
} )

app.get('/art', (req, res)=>{
  res.send('its working art')
})




app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})




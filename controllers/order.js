 const handleOrderCOD = (req,res, db) => {
const {firstname, lastname, email, mobilenumber, adress, city, size, quantity, payment, twitter} = req.body;
if(!firstname || !lastname || !email || !mobilenumber || !adress || !city || !size || !quantity || !payment || !twitter)
    {return  res.status(400).json('no data to load')};
db.insert({
		
		firstname: firstname,
		lastname:lastname,
        email:email,
        mobilenumber:mobilenumber,
        adress:adress,
        city:city,
        size:size,
        quantity:quantity,
        payment: payment,
        twitter: twitter,
        joined: new Date()

	   
	
	})

.into('orders')
.returning('*')
 .catch(err=>res.status(400).json('unable to order1'))
	.then(user =>{
		if(user){
			  res.json(user[0])	
		} else{
			res.status(400).json('unable to order1')
		}
          
	})
	.catch(err=>res.status(400).json('unable to order2'))
}

 



	



	

module.exports={
	handleOrderCOD
	
}
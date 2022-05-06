const controller ={};

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err,customer)=>{
            if(err){
                res.json(err);
            }
            console.log(customer);
            res.render('customers',{
                data:customer
            });
        });
    });
};
controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[data],(err,customer)=>{
            console.log(customer);
            res.send('INSERTED');
        });
    })
};
module.exports = controller;
const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:MjIwNzgtYTAxNTcw@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

// to find specific employee {emp_name: 'Rachel Tribbiani'}
Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
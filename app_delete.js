const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./employee');

const uri =  "mongodb://root:MjU5ODMtYTAxNTcw@localhost:27017";

mongoose.connect(uri,{'dbName':'employeeDB'})
    .then(() => {
        console.log("Connected to MongoDB");

        // Update one record in employee
        return Employee.deleteOne({ age: { $gt: 30}, location: "New York" });
    })
    .then((updateOneResult) => {
        console.log("Deleted Docs for deleteOne:", updateOneResult);
        console.log("One record deleted");

        // Update many records in employees - start with
        return Employee.deleteMany({ emp_name: {$regex: "M"}});
    })
    .then((updateManyResult) => {
        console.log("Deleted Docs for deleteMany:", updateManyResult);
        console.log("Many records deleted");

    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });
var connection = require('../database/db'); 
const bcrypt = require('bcrypt'); 

module.exports = {
    inputUserDB: function(params, callback){
        const { emailAddress, password, firstName, lastName, dayDOB = null, monthDOB = null, yearDOB = null} = params; 
        let sqlQuery = 'INSERT INTO users (userEmail, userPassword, userFirstName, userLastName, userMonthDOB, userDayDOB, userYearDOB) VALUES (?, ?, ?, ?, ?, ?, ?)';
        //verify if the email is being used 
        //create a function (verifyEmailDB)to check if email is already in the database. 
        //different from below.. 
        //if not, then proceed to hash and salt password
        //then store user information
        connection.query(sqlQuery, [emailAddress, password, firstName, lastName, dayDOB, monthDOB, yearDOB], (err, result) => {
            if (err) {
                callback(err, null); 
            } else {
                callback(null, result);
            }
        }); 
    }, 
    verifyUserDB: function(param, callback){
        //check if the user email is there.. 
        //if not there, well not error because it still did it job.. 
        //but it would return nothing.. 
        //if its there, then get the password from it.. 
        //then do a bcrypt.compare
        const {emailAddress, password} = param; 
        // let sqlQuery = 'SELECT userEmail, userPassword FROM users where userEmail = ? AND userPassword = ?';
        let sqlQuery1 = 'SELECT userEmail, userPassword FROM users where userEmail = ?';
        let sqlQueryPassword = 'SELECT userPassword FROM users where userEmail = ?';
        connection.query(sqlQuery1, [emailAddress],(err, result) => {
            //this query will have no error, the err would mostly be 'null'
            //it will always have a result, which is an empty array. 
            //the SQL query has been successfully executed, whether it found a 
            //an exact match or not, it still succeeded
            if (err) {
                console.log('Error executing SQL query', err); 
                callback(err, null);
            } else if (result.length === 0) {
                callback(null, { result: 'not authorized' });
            } else {
                const user = result[0];
                const hashedPassword = user.userPassword;
    
                bcrypt.compare(password, hashedPassword, (err, isMatch) => {
                    if (err) {
                        console.log('Error comparing password', err);
                        callback(err, null);
                    } else if (isMatch) {
                        callback(null, { result: 'authorized' });
                    } else {
                        callback(null, { result: 'not authorized' });
                    }
                });
            }
        });
    }



//get the user user password
//check if there's a user of user and password of hashed value..
//but then the logic here is bad because all hashes could be different.. 
//so next logic could be, retrieve the password if there is an email..'
//then compare that.. 




    
};




/*
In the future, function for receiving items from database
retrieveAllItems: function(callback){
    let queryString = 'SELECT * from royalStore' 
    connection.query(queryString, (err, res) => {
        if (err) {
            callback(err, null); 
        } else {
            callback(null, res); 
        }
    });   
    }
*/ 
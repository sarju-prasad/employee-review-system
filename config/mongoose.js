const mongoose = require('mongoose');
const password = 'Sarju@2023';
  const encodedPassword = encodeURIComponent(password);
 // mongodb+srv://ersarju86:<password>@cluster0.ry1l3hg.mongodb.net/?retryWrites=true&w=majority
  const uri = `mongodb+srv://ersarju86:${encodedPassword}@cluster0.ry1l3hg.mongodb.net/employee_Review?retryWrites=true&w=majority`;

mongoose.connect(uri).then(()=>{
     console.log('Connected to Database: MongoDB Atlas');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

module.exports = db;

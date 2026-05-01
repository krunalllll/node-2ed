const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/krunal');

const db = mongoose.connection

db.on('connected',()=>{
    console.log('database connecteed ')
})

db.on('error', (err)=>{
    console.log('database.error:',err)
})

module.exports = db
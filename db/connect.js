const mongoose = require('mongoose')

const MONGO_USERNAME = 'example-user';
const MONGO_PASSWORD = 'password';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'node_clinic';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// mongoose.connect('mongodb://localhost:27017/node_clinic', { useNewUrlParser: true })
mongoose.connect(url, {useNewUrlParser: true});
mongoose.connection.on('connected', function(){
    console.log('Mongoose default connection open');
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose defaults connection open' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;
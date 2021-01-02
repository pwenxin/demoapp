const mongoose = require('mongoose');
const username = 'sharews'
const password = 'sharews'
const uri = 'www.sharews.com:27017'
const db = 'sharews'

mongoose.connect(`mongodb://${username}:${password}@${uri}/${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connect mongodb successfully")
    }
});

module.exports= mongoose

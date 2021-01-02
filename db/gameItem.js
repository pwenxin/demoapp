const mongoose = require('./mongoCli');


let gameItemSchema = mongoose.Schema(
    {
        name: String,
        area: String,
        tags: Array,
        content: String
    }
    , {_id: true, autoIndex: true}
);


let GameItem = mongoose.model('GameItem', gameItemSchema, 'gameItem');
module.exports = GameItem

// let gameItem = new GameItem({name: '名称', area: '比尔吉沃特', tags: ['30 级别', '随时'], content: '欢迎使用共享服务'})
// gameItem.save((err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data);
// })



// GameItem.find({}, (err, data) => {
//     if (err) return handleError(err);
//     console.log(data);
// })
const mongoose =require('mongoose');

const itemShema = new mongoose.Schema({
    product:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    payment:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
});

const itemModel = mongoose.model('items',itemShema);
module.exports = itemModel;
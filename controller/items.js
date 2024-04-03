const itemModel = require('../model/item')
const addNewItems = async (req,res)=>{

    try {
        console.log(req.body);
        const newitem = new itemModel(req.body);
        await newitem.save();
        res.json({
            success:true,
            message:"Item add",
            newitem
        })
    } catch (error) {
        
    }
}

const getAllitems = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 

    try {
        const data = await itemModel.find()
            .skip((page - 1) * limit) 
            .limit(limit);
        res.json({
            success: true,
            message: "Items retrieved successfully",
            result: data
        });
    } catch (error) {
        console.error('Error retrieving items:', error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve items"
        });
    }
};

const updateItems = async(req,res)=>{
    try {
        await itemModel.findByIdAndUpdate(req.query.id,req.body);
        res.json({
            success: true,
            message: "Items update successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve items"
        });
    }
}
const deleteItems = async(req,res)=>{
    try {
        await itemModel.findByIdAndDelete(req.query.id);
        res.json({
            success: true,
            message: "Items update successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve items"
        });
    }
}


const itemControl = {
    addNewItems,
    getAllitems,
    updateItems,
    deleteItems
};

module.exports = itemControl;
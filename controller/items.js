const addNewItems = async (req,res)=>{
    try {
        res.json({
            success:true,
            message:"Item add"
        })
    } catch (error) {
        
    }
}


const itemControl = {
    addNewItems
};

module.exports = itemControl;
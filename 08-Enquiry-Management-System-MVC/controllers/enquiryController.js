const enquiryModel = require("../models/enquiryModel")



const insertEnquiry = async (req,res)=>{
    let {name,email,phoneno,message} = req.body
    let insertEnquiry = new enquiryModel({
        name,email,phoneno,message
    })
    let savedEnquiry = await insertEnquiry.save()

    res.send({
        status:1,
        msg:{
            savedEnquiry
        }
    })
}


module.exports ={insertEnquiry}
const mongoose = require("mongoose");

const RuleSchema = new mongoose.Schema({
    conditionlhs: {
        type: String,

    },
    conditionop: {
        type: String,
    },
    conditionrhs: {
        type: String,
    },
    effectlhs: {
        type: String,
    },
    effectop: {
        type: String,
    },
    effectrhs: {
        type:String,
    },
    related1: {
        type: String,
    },
    related2:{
      type:String,
    }
}, { timestamps: true })

export default mongoose.models.Rule || mongoose.model("Rule", RuleSchema)
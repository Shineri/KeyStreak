
import mongoose from "mongoose"

const paragraphSchema = new mongoose.Schema({
type:{
  type:String,
  required:true
},
duration:{
    type:Number,
    required:true
}
});

export default {paragraphSchema};
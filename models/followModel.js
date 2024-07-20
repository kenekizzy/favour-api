import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
    follower: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    followee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
});

const Follow = mongoose.model('Follow', followSchema);

export default Follow
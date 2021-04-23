import {Schema, model} from 'mongoose'

const courseSchema = new Schema({
    name: String,
    duration: Number,
    description: String,
    available: Boolean,
    imgUrl: String
},{
    versionKey: false,
    timestamps: true
})

export default model('Course', courseSchema);
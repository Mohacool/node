const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
    name: {type:String, required:true},
    password: {type:String, required: true},
    email: {type:String, required: true, unique:true, lowercase:true}
    },
    { collection: 'users', timestamps: true}
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
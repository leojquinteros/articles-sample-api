'use strict'
const Schema = require('mongoose').Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'users'
})

UserSchema.statics = {

  id: (id) => {
    return new Promise((resolve, reject) => {
      User.findById(id).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  save: (name, avatar) => {
    return new Promise((resolve, reject) => {
      User.create({
        name: name,
        avatar: avatar
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

}

const User = module.exports = mongoose.model('user', UserSchema)
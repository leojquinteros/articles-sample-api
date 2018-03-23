'use strict'
const Schema = require('mongoose').Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  created: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'users'
})

UserSchema.statics = {

  save: (user) => {
    return new Promise((resolve, reject) => {
      User.create(user).then((data) => {
        resolve({
          successful: true,
          data: data.id
        })
      }).catch((err) => {
        reject(err)
      })
    })
  }

}

const User = module.exports = mongoose.model('user', UserSchema)
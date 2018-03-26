'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
}, {
  collection: 'usersArticles'
})

UserSchema.statics = {

  find: (id) => {
    return new Promise((resolve, reject) => {
      User.findById(id).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  save: (body) => {
    return new Promise((resolve, reject) => {
      User.create({
        name: body.name,
        avatar: body.avatar
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

}

const User = module.exports = mongoose.model('user', UserSchema)

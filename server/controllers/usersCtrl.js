'use strict'
const ObjectID = require('mongoose').Types.ObjectId
const User = require('../models/user')
const errors = require('../utils/config').errors

const find = (id) => {
  return new Promise((resolve, reject) => {
    if (!ObjectID.isValid(id)) {
      return reject(errors.invalidObjectID)
    }
    User.find(id).then((data) => {
      resolve({
        successful: true,
        data: data
      })
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

const save = (body) => {
  return new Promise((resolve, reject) => {
    if (!body.name) {
      return reject(errors.missingInput)
    }
    User.save(body.name, body.avatar).then((data) => {
      resolve({
        successful: true,
        data: data.id
      })
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

exports.save = save

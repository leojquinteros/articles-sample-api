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
      if (!data) {
        reject(errors.userNotFound)
      } else {
        resolve({
          successful: true,
          data: data
        })
      }
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

const create = (body) => {
  return new Promise((resolve, reject) => {
    if (!body.name) {
      return reject(errors.missingInput)
    }
    User.save(body).then((data) => {
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

exports.find = find
exports.create = create

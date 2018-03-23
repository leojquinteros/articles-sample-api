'use strict'
const ObjectID = require('mongoose').Types.ObjectId
const Article = require('../models/article')
const usersCtrl = require('./usersCtrl')
const errors = require('../utils/config').errors

const retrieve = (tags) => {
  return new Promise((resolve, reject) => {
    Article.retrieve(tags).then((data) => {
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
    if (!body.userId || !body.title || !body.text) {
      return reject(errors.missingInput)
    }
    usersCtrl.find(body.userId).then((data) => {
      Article.save(body).then((data) => {
        resolve({
          successful: true,
          data: data.id
        })
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

const edit = (id, body) => {
  return new Promise((resolve, reject) => {
    if (!body.userId || !body.title || !body.text) {
      return reject(errors.missingInput)
    }
    if (!ObjectID.isValid(id)) {
      return reject(errors.invalidObjectID)
    }
    usersCtrl.find(body.userId).then((data) => {
      Article.edit(id, body).then((data) => {
        resolve({
          successful: true,
          data: data.id
        })
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

const remove = (id) => {
  return new Promise((resolve, reject) => {
    if (!ObjectID.isValid(id)) {
      return reject(errors.invalidObjectID)
    }
    Article.remove(id).then((data) => {
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
exports.edit = edit
exports.remove = remove
exports.retrieve = retrieve

'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    required: false
  }]
}, {
  collection: 'articles'
})

ArticleSchema.statics = {

  retrieve: (tags) => {
    return new Promise((resolve, reject) => {
      Article.find({
        tags: {
          $elemMatch: { $in: tags }
        }
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  save: (body) => {
    return new Promise((resolve, reject) => {
      Article.create({
        userId: body.userId,
        title: body.title,
        text: body.text,
        tags: body.tags
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  edit: (id, body) => {
    return new Promise((resolve, reject) => {
      Article.findByIdAndUpdate(id, {
        $set: {
          userId: body.userId,
          title: body.title,
          text: body.text,
          tags: body.tags
        }
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      Article.findByIdAndRemove(id).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

}

const Article = module.exports = mongoose.model('article', ArticleSchema)

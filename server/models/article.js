'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = mongoose.Types.ObjectId;

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
  }],
  created: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'articles'
})

ArticleSchema.statics = {

  retrieve: (tags) => {
    return new Promise((resolve, reject) => {
      Article.find().then((data) => {
        resolve({
          successful: true,
          data: data
        })
      }).catch((err) => {
        reject(err)
      })
    })
  },

  save: (article) => {
    return new Promise((resolve, reject) => {
      Article.create(article).then((data) => {
        resolve({
          successful: true,
          data: data.id
        })
      }).catch((err) => {
        reject(err)
      })
    })
  },

  edit: (articleID, article) => {
    return new Promise((resolve, reject) => {
      if (ObjectID.isValid(articleID) && ObjectID.isValid(article.userId)) {
        Article.findByIdAndUpdate(articleID, {
          $set: {
            userId: article.userId,
            title: article.title,
            text: article.text,
            tags: article.tags
          }
        }).then((data) => {
          if (data) {
            resolve({ 
              successful: true, 
              data: data.id 
            })
          } else {
            reject(errors.articleNotFound);
          }
        }).catch((err) => {
          reject(err)
        })
      }
    }) 
  },

  remove: (articleID) => {
    return new Promise((resolve, reject) => {
      if (ObjectID.isValid(articleID)) {
        Article.findByIdAndRemove(articleID).then((data) => {
          if (data) {
            resolve({ 
              successful: true, 
              data: data.id
            })
          } else {
            reject(errors.articleNotFound);
          }
        }).catch((err) => {
          reject(err)
        })
      }
    }) 
  }

}

const Article = module.exports = mongoose.model('article', ArticleSchema)
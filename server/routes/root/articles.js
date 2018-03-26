'use strict'
const express = require('express')
const router = express.Router()
const articlesCtrl = require('../../controllers/articlesCtrl')
const config = require('../../utils/config')

router.get('/', (req, res) => {
  articlesCtrl.retrieve(req.query.tags).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

router.post('/', (req, res) => {
  articlesCtrl.create(req.body).then((result) => {
    config.commonSuccessResponse(res, result, 201)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

router.patch('/:id', (req, res) => {
  articlesCtrl.edit(req.params.id, req.body).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

router.delete('/:id', (req, res) => {
  articlesCtrl.remove(req.params.id).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

module.exports = router

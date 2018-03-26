'use strict'
const express = require('express')
const router = express.Router()
const articlesCtrl = require('../../controllers/articlesCtrl')
const config = require('../../utils/config')
const auth = require('../../utils/auth')

router.get('/', auth.isAuthorized, (req, res) => {
  articlesCtrl.retrieve(req.query.tags).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

router.post('/', auth.isAuthorized, (req, res) => {
  articlesCtrl.create(req.body).then((result) => {
    config.commonSuccessResponse(res, result, 201)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

router.patch('/:id', auth.isAuthorized, (req, res) => {
  articlesCtrl.edit(req.params.id, req.body).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

router.delete('/:id', auth.isAuthorized, (req, res) => {
  articlesCtrl.remove(req.params.id).then((result) => {
    config.commonSuccessResponse(res, result)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

module.exports = router

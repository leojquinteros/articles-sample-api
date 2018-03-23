'use strict'
const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/articlesCtrl')
const config = require('../../utils/config')

router.post('/', (req, res) => {
  articlesCtrl.create(req.body).then((result) => {
    config.commonSuccessResponse(res, result, 201)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

module.exports = router
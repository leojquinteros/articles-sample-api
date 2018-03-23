'use strict'
const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/usersCtrl')
const config = require('../../utils/config')

router.post('/', (req, res) => {
  usersCtrl.create(req.body).then((result) => {
    config.commonSuccessResponse(res, result, 201)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

module.exports = router
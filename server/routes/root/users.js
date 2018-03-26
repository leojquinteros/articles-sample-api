'use strict'
const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/usersCtrl')
const config = require('../../utils/config')
const auth = require('../../utils/auth')

router.post('/', auth.isAuthorized ,(req, res) => {
  usersCtrl.create(req.body).then((result) => {
    config.commonSuccessResponse(res, result, 201)
  }).catch((err) => {
    config.commonErrorResponse(res, err)
  })
})

module.exports = router

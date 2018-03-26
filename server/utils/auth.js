'use strict'
const config = require('./config')
const apiConfig = require('../../config/config').api

const isAuthorized = (req, res, next) => {
  const header = req.headers.authorization

  if (!header) {
    return config.commonErrorResponse(res, config.errors.authHeaderMissing)
  }

  const token = header.substr(0, apiConfig.header.length) ===
    apiConfig.header ? header.split(' ')[1] : header

  if (token !== apiConfig.key) {
    return config.commonErrorResponse(res, config.errors.invalidApikey)
  }

  next()
}

exports.isAuthorized = isAuthorized

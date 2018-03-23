'use strict'
const errors = {

  invalidObjectID: {
    status: 422,
    message: 'Invalid Object ID'
  },
  missingInput: {
    status: 400,
    message: 'Missing data'
  },
  internalError: {
    status: 500,
    message: 'Internal error.'
  },
  userNotFound: {
    status: 404,
    message: 'User not found.'
  }
}

const commonErrorResponse = (res, error) => {
  const status = error && error.status ? error.status : 500
  return res.status(status).json({
    successful: false,
    error: error.message
  })
}

const commonSuccessResponse = (res, data, prevStatus) => {
  const status = prevStatus || 200
  return res.status(status).json(data)
}

exports.errors = errors
exports.commonErrorResponse = commonErrorResponse
exports.commonSuccessResponse = commonSuccessResponse

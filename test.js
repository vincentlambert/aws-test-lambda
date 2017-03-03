// https://yrl8ti7pka.execute-api.eu-west-1.amazonaws.com/Prod/test

'use strict';

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  // TODO implement
  callback(null, {
    statusCode: '200',
    body: 'TEST !!!',
    headers: {
      'Content-Type': 'application/json',
    },
  })
};
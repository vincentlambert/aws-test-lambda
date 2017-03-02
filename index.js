'use strict';

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  // TODO implement
  callback(null, {
    statusCode: '200',
    body: 'Hello World from Lambda from Github !',
    headers: {
      'Content-Type': 'application/json',
    },
  })
};
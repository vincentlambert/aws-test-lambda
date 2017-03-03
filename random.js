// https://yrl8ti7pka.execute-api.eu-west-1.amazonaws.com/Prod/randomNumber

'use strict';

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  var rnd = Math.round(Math.random() * 10);
  // TODO implement
  callback(null, {
    statusCode: '200',
    body: rnd,
    headers: {
      'Content-Type': 'application/json',
    },
  })
};
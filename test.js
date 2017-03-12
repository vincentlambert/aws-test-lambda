// https://yrl8ti7pka.execute-api.eu-west-1.amazonaws.com/Prod/test

'use strict';
const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  // TODO implement
  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : "callback("+ JSON.stringify(res)+")",
    headers: {
      'Content-Type': 'application/json',
    }
  });

  switch(event.httpMethod) {
    case 'GET':
      var params = {
        TableName: 'MyTestDynamoDBTable',
        Limit: 100
      };
      dynamo.scan(params, done)
      break;
    case 'PUT':
      var params = {
        TableName: 'MyTestDynamoDBTable',
        Item: {
          id: '' + Date.now(),
          message: 'Generated number : ' + Math.round(Math.random() * 100)
        }
      };
      dynamo.putItem(params, done);
    break;
    default:
      done(new Error('Unsupported method ' + event.httpMethod));
  }
};
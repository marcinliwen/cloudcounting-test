const fetch = require('node-fetch');


const API_ENDPOINT = 'https://api.mailerlite.com/api/v2/groups/109918142/subscribers';

  exports.handler = async (event, context) => {
    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-MailerLite-ApiDocs': 'true',
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': '1fb2e71a37d2b08215d8709bccc3f8c2'
        },
        body: JSON.stringify({
          email: event.queryStringParameters.email,
          resubscribe: false,
          autoresponders: true,
          type: 'string'
        })
      };
    return fetch(API_ENDPOINT, options)
      .then((response) => response.json())
      .then((data) => ({
        statusCode: 200,
        body: JSON.stringify({
            data: data
          })
      }))
      .catch((error) => ({ statusCode: 422, body: String(error) }));
  };
const expect = require('unexpected');
const got = require('got');

const gotOptions = { throwHttpErrors: false, json: true };

const required = () => {
  throw new Error('required parameter is missing.');
};

const isStatusCode = (code) => {
  if (Number.isInteger(code) && code >= 200 && code < 500) {
    return true;
  }
  return false;
};

module.exports = {
  getJson: async (targetUrl = required(), expected, statusCode = 200) => {
    const res = await got.get(targetUrl, gotOptions);

    if (expected && !isStatusCode(expected)) {
      expect(res.body, 'to satisfy', expected);
    }

    if (isStatusCode(expected)) {
      expect(res.statusCode, 'to be', expected);
    } else {
      expect(res.statusCode, 'to be', statusCode);
    }
  },
  postJson: async (targetUrl = required(), requestBody, expected, statusCode = 200) => {
    const res = await got.post(targetUrl, Object.assign(gotOptions, {
      body: requestBody,
    }));

    if (expected && !isStatusCode(expected)) {
      expect(res.body, 'to satisfy', expected);
    }

    if (isStatusCode(expected)) {
      expect(res.statusCode, 'to be', expected);
    } else {
      expect(res.statusCode, 'to be', statusCode);
    }
  },
};

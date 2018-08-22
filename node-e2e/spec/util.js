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

class Node {
  constructor(info) {
    Object.keys(info).forEach((key) => {
      this[key] = info[key];
    });
  }

  async getJson(path = required(), expected, statusCode = 200) {
    const res = await got.get(`${this.endpoint}${path}`, gotOptions);

    if (expected && !isStatusCode(expected)) {
      expect(res.body, 'to satisfy', expected);
    }

    if (isStatusCode(expected)) {
      expect(res.statusCode, 'to be', expected);
    } else {
      expect(res.statusCode, 'to be', statusCode);
    }
  }

  async postJson(path = required(), requestBody, expected, statusCode = 200) {
    const res = await got.post(`${this.endpoint}${path}`, Object.assign(gotOptions, {
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
  }
}

module.exports = {
  Node,
};

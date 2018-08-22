const config = require('./config.json');
const { Node } = require('./spec/util');

config.nodes = config.nodes.map(n => new Node(n));

global.config = config;

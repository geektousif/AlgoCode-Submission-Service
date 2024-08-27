const Redis = require("ioredis");

const serverConfig = require("./serverConfig");

const redisConfig = {
  host: serverConfig.redisHost,
  port: serverConfig.redisPort,
};

const redisConnection = new Redis(redisConfig);

module.exports = redisConnection;

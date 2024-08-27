const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,

  redisHost: process.env.REDIS_HOST || "127.0.0.1",
  redisPort: process.env.REDIS_PORT || 6379,

  atlasDbUrl: process.env.ATLAS_DB_URL,
  nodeEnv: process.env.NODE_ENV,
};

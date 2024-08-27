const app = require("./app");
const connectToDB = require("./config/dbConfig");

const fastify = require("fastify")({ logger: true });

const serverConfig = require("./config/serverConfig");

fastify.register(app);

fastify.listen({ port: serverConfig.port }, async (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  await connectToDB();
  fastify.log.info(`server listening on ${serverConfig.port}`);
});

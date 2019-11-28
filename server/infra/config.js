let config = {};

config.database = {};
config.database.user = 'postgres';
config.database.db = 'institutions';
config.database.pw = '123456';
config.database.host = 'localhost';
config.database.port = 5432;
config.database.maxConnections = process.env.PERSONS_POOL_MAX || 10;
config.database.idleTimeoutMillis = process.env.PERSONS_POOL_TIMEOUT || 30000;

module.exports = config;
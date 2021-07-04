module.exports = {
  SIZE_LIMIT: 50, // mentioned in KB
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/jsonbox-io-dev",
};

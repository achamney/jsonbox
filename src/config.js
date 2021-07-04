module.exports = {
  SIZE_LIMIT: 50, // mentioned in KB
  PORT: process.env.PORT || 3000,
  MONGO_URL: atob("bW9uZ29kYitzcnY6Ly9qc29uYm94eTpzZWdjb3Vyc2U+QGNsdXN0ZXIwLjdwNzhlLm1vbmdvZGIubmV0L215Rmlyc3REYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHk=") || "mongodb://localhost:27017/jsonbox-io-dev",
};

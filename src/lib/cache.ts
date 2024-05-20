import IORedis from "ioredis";

const redis = new IORedis({
  host: process.env.REDIS_HOST,
  port: 6379,
});

redis.on("connect", () => {
  console.log("Connected to Redis server");
});

redis.on("error", (err) => {
  console.log("Redis Server Error:", err);
});

export default redis;

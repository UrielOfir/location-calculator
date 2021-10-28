import { redis } from '../../../middleware/ioRedisInstance'

export default async function handler(req, res) {
    const locationsInRadius = await redis.georadius("locations", 0, 0, 100000, "km");
    res.status(200).json()
}
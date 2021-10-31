import { redis } from '../../../middleware/ioRedisInstance'

export default async function handler(req, res) {
    if (req.body) {
        const locationsInRadius = await redis.georadius("locations", req.body.longitude, req.body.latitude, req.body.radius, "km");
    }
    const locationsInRadius = await redis.georadius("locations", 0, 0, 100000, "km");
    res.status(200).json(locationsInRadius)
}
import {redis} from "../../../middleware/ioRedisInstance"

export default async function handler(req, res) {
    await redis.geoadd("locations", req.body.longitude, req.body.latitude, req.body.name )
    res.status(200).json("sent")
}
import { FastifyReply, FastifyRequest } from "fastify";
import { TStatsParams } from "./RouteTypes.js";

export default (req: FastifyRequest<{Querystring: TStatsParams}>, res: FastifyReply) => {
    let {slug} = req.query
    res.send({slug: slug})
}

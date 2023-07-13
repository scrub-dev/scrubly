import { FastifyReply, FastifyRequest } from "fastify";
import { TRedirectParams } from "./RouteTypes.js";

export default (req: FastifyRequest<{Querystring: TRedirectParams}>, res: FastifyReply) => {}
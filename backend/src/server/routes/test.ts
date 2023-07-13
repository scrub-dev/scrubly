import { FastifyReply, FastifyRequest } from "fastify";

export default (req: FastifyRequest, res: FastifyReply) => {
    res.send({HELLO_WORLD: "!"})
}
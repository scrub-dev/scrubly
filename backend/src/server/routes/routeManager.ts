import { FastifyInstance } from "fastify"
import test from "./test.js"

export class RouteManager {
    private server
    constructor(server: FastifyInstance){
        this.server = server
    }

    public declareRoutes = () => {
        this.server.get("/test",async (req, res) => {
            test(req,res)
        })
    }
}
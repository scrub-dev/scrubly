import { FastifyInstance } from "fastify"
import test from "./test.js"
import newLink from "./newLink.js"
import redirect from "./redirect.js"
import getStats from "./getStats.js"
import { TNewLinkParams, TRedirectParams, TStatsParams } from "./RouteTypes.js"

export class RouteManager {
    private server
    constructor(server: FastifyInstance){
        this.server = server
    }

    public declareRoutes = () => {
        const route_default  = "/"
        const route_api      = "/api"
        const route_redirect = "/redirect"
        const route_stats    = "/stats"

        const route_teapot   = "/teapot"

        this.server.get(route_default,async (req, res) => test(req,res))

        this.server.get<{Querystring: TNewLinkParams}>(route_api, async (req, res) => newLink(req,res))

        this.server.get<{Querystring: TRedirectParams}>(route_redirect, async (req, res) => redirect(req,res))

        this.server.get<{Querystring: TStatsParams}>(route_stats, async (req, res) => getStats(req,res))

        // Meme Endpoints
        this.server.get(route_teapot, async (req, res) => res.send({status: 418, message: "I am a teapot"}).code(418))
    }
}
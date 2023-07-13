import Fastify from "fastify";
import config, { DEV_OPTIONS } from "../utility/config.js";
import {debugWebPrint, errorPrint, hitPrint, iniPrint } from "../utility/print.js";
import { RouteManager } from "./routes/routeManager.js";

export class Server {

    private server
    private port
    private static instance: Server
    private routeManager: RouteManager

    private constructor() {
        iniPrint("Server Initalised")
        this.server = Fastify({logger: (config.DEV_MODE && DEV_OPTIONS.VERBOSE_SERVER_LOGGING)})
        this.port = config.PORT

        this.routeManager = new RouteManager(this.server)
        this.routeManager.declareRoutes()
    }

    public static getInstance = () => {
        if(!Server.instance) Server.instance = new Server()
        return Server.instance
    }

    public getServer = () => this.server

    public listen = async () => {
        try {
            await this.server.listen({port: this.port})
            debugWebPrint(`Web Server Running @ ${this.port}`)
        }
        catch (err: any) {
            this.server.log.error(err)
            errorPrint(err)
        }
    }
}
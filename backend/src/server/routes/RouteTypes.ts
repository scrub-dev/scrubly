import { FastifyRequest } from "fastify";

export type TStatsParams = {
    slug: string
}
export type TNewLinkParams = {
    link: string
    slug?: string

}
export type TRedirectParams = {
    r: string
}
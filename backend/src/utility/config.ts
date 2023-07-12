import { TDevOptions } from "./types.js"

export default {
    DEV_MODE: true,
    NAME: "Scrubly",
    VERSION:"0.2.0",
    DESC: "Link Shortening Service",
    PORT: 9001,
}

export const DEV_OPTIONS: TDevOptions = {
    PERSIST_DB: false,
    PRINT_DEBUG_MESSAGES: true,
    PRINT_NEW_LINKS: true,
    PRINT_LINK_USES: true
}
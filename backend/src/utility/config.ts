import { TDevOptions } from "./types.js"

export default {
    DEV_MODE: true,
    NAME: "Scrubly",
    VERSION:"0.2.0",
    PORT: 9001,
}

export const DEV_OPTIONS: TDevOptions = {
    PERSIST_DB: false,
    PRINT_DEBUG_MESSAGES: true,
}
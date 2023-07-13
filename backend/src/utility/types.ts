import { Fonts, KerningMethods } from "figlet";

export interface TFigletOptions {
    font?: Fonts | undefined,
    horizontalLayout?: KerningMethods | undefined;
    verticalLayout?: KerningMethods | undefined;
}


export interface TDevOptions {
    PERSIST_DB: boolean,
    PRINT_DEBUG_MESSAGES: boolean,
    PRINT_NEW_LINKS: boolean,
    PRINT_LINK_USES: boolean
    SERVER_LOGGING: boolean,
    VERBOSE_SERVER_LOGGING: boolean
}

export type TLogType = "NEW_LINK" | "NEW_HIT" | "WARN" | "ERROR"
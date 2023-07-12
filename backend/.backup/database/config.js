"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DATABASE_NAME: "db.db",
    DATABASE_DIR: "./database/",
    TABLES: {
        REDIRECTS: {
            id: "int NOT NULL",
            slug: "TEXT NOT NULL",
            url: "TEXT NOT NULL"
        },
        STATS: {
            id: "int NOT NULL",
            hits: "INT NOT NULL"
        },
        LOGS: {
            id: "INT NOT NULL",
            timestamp: "TIMESTAMP NOT NULL",
            message: "TEXT"
        }
    }
};

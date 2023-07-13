import path from "path";
import { fileURLToPath } from "url";

export default {
    DATABASE_NAME: "scrubly_database.db",
    DATABASE_DIR : path.dirname(fileURLToPath(import.meta.url)) + path.sep,
    TABLES: [
        {name: "REDIRECTS",columns: [["slug", "TEXT PRIMARY KEY NOT NULL"], ["url", "TEXT NOT NULL"]]},
        {name: "STATS", columns: [["slug", "TEXT NOT NULL"], ["hits", "INT NOT NULL"]]},
        {name: "LOGS",columns: [["timestamp", "TIMESTAMP NOT NULL"],["type", "TEXT"], ["message", "TEXT"]]}
    ]
}
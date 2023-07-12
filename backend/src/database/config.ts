import path from "path";
import { fileURLToPath } from "url";

export default {
    DATABASE_NAME: "scrubly_database.db",
    DATABASE_DIR : path.dirname(fileURLToPath(import.meta.url)) + path.sep,
    TABLES: [
        {name: "REDIRECTS",columns: [["id", "INT NOT NULL"], ["slug", "TEXT NOT NULL"], ["url", "TEXT NOT NULL"]]},
        {name: "STATS", columns: [["id", "INT NOT NULL"], ["hits", "INT NOT NULL"]]},
        {name: "LOGS",columns: [["id", "INT NOT NULL"], ["timestamp", "TIMESTAMP NOT NULL"], ["message", "TEXT"]]}
    ]
}
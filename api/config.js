export default {
  name: "Scrubly",
  version: "0.1",
  port: 9000,
  DEV_MODE: true,
  DEV_OPTIONS: {
    CLEAN_DB_ON_START: true,
    OUTPUT_DEV_MESSAGES: true,
    OUTPUT_HITS_TO_CLI: false,
    OUTPUT_NEW_LINKS_TO_CLI: false
  },
  DATABASE_CONFIG: {
    DATABASE_NAME: "db.db",
    DATABASE_FOLDER: "./database/",
    TABLES: {
      TABLE_REDIRECTS: {
        name: "redirects",
        schema: {
          id: "TEXT",
          url: "TEXT"
        }
      },
      TABLE_STATISTICS: {
        name: "stats",
        schema: {
          id: "TEXT",
          hits: "INT"
        }
      }
    }
  }
}
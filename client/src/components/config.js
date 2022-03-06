export const config = {
  DEV_OPTIONS = {
    DEV_MODE: true
  },
  DEV_URL: "localhost",
  PROD_URL: "",
  URL: (DEV_MODE) ? DEV_URL : PROD_URL
}
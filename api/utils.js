import config from "./config.js"

export const devMessage = (message) => {
  if(config.DEV_OPTIONS.OUTPUT_DEV_MESSAGES) console.log(`[ DEV ] ${message}`)
}

export const hitMessage = (message) => {
  if(config.DEV_OPTIONS.OUTPUT_HITS_TO_CLI) console.log(`[ HIT ] ${message}`)
}

export const newLinkMessage = (message) => {
  if(config.DEV_OPTIONS.OUTPUT_NEW_LINKS_TO_CLI) console.log(`[ NEW ] ${message}`)
}
import config from "./utility/config"
import { figletPrint } from "./utility/prettyPrint"

const run = () => {
    figletPrint(config.NAME)
    console.log(config.VERSION)
}

run()
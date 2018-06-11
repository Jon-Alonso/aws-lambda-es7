/**
 * ENV conditional config load
 */
export default class Config {
    /**
     * Load config the config depending on the ENV.
     * @return {object}
     */
    static load() {
        let config

        switch (process.env.ENV) {
            case 'local':
                config = require('./Config/local.js')
                break
            default:
                config = require('./Config/production.js')
        }

        return config.values
    }
}

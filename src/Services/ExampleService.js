export default class ExampleService {
    /**
     * Example constructor
     * @param {string}
     */
    constructor(base) {
        this.base = base
    }

    /**
     * Joins two words into a single string.
     * Example of an asynchronous function.
     * @param {string}
     * @return {Promise}
     */
    async join(message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (typeof message == 'string') ? resolve(this.base + message) : reject()
            }, 1500)
        })
    }
}
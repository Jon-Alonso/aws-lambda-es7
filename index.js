'use strict';

import Config from './src/Config'
import ExampleService from './src/Services/ExampleService'

const config = Config.load()

exports.handler = async (event, context) => {
    try {
        // Message passed into Lambda
        const message = JSON.parse(event.Records[0].Sns.Message)
        // Example async execution
        const service = new ExampleService(config.service.example)
        const response = await service.join(message.word)
        console.log(response)

        return
    } catch (error) {
        console.log(error.stack)
    }
}
# AWS Lambda - JavaScript ES7 Template

Template for testing, mocking events, developing and deploying into **AWS Lambda** using **NodeJS**.

Thanks to [Babel][babel] and this template, you can easily write ES6 & ES7 JavaScript without worrying about the NodeJS version compatibility.

## Example

```javascript
// Native JS import
import ExampleService from './src/Services/ExampleService'

exports.handler = async (event, context) => {
    try {
        // Message passed into Lambda
        const message = JSON.parse(event.Records[0].Sns.Message)
        // Example async execution
        const service = new ExampleService()
        const response = await service.save(message.content)
        console.log(response)

        return
    } catch (error) {
        console.log(error.stack)
    }
}
```

## Usage
Clone, fork or download the project
```sh
$ git clone git@github.com:JohnAlonso/aws-lambda-es7.git
$ cd aws-lambda-es7 && npm install
```

#####  Configuration
Create a `src/Config/local.js` configuration file for local development and access environment variables by importing the `Config`.
```javascript
import Config from './src/Config'

const config = Config.load()
// Access config variables
console.log(config.service.example)
```

#####  Mocking a Lambda event
In order to test how Lambda is going to `handle` a request, a default SNS event Lambda is provided in `mock/SNS-event.json` (Feel free to create new or override the default event).
The following command will execute the handler method from the `index.js` and inject the `context` and the AWS `event`.
```sh
$ npm run mock
```

#####  Testing
You can also use ES7 JavaScript in your tests easily too. The [Mocha][mocha] testing framework is specified as a dependency by default and can be run using:
```sh
$ npm run test
```
Example: `tests/ExampleServiceTest.js`
```javascript
import ExampleService from '../src/Services/ExampleService'
import { assert } from 'chai'

describe('ExampleService', () => {
    describe('#join', () => {
        it('joins two words into a single string', async () => {
            let service = new ExampleService('demo')
            let respose = await service.join('test') // Has a 1.5s timeout

            assert.equal(respose, 'demotest')
        })
    })
})
```

#####  Deployment
Compile, compress and deploy into aws directly by running (aws-cli needs to be installed).
In `package.json` edit the `"deploy"` script and add your function name and the AWS region.
Run the following command to depoy the code into the specified Lambda function:
```sh
$ npm run deploy
```

[mocha]: <https://mochajs.org>
[babel]: <https://babeljs.io>
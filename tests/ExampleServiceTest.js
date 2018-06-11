import ExampleService from '../src/Services/ExampleService'
import { assert } from 'chai'

describe('ExampleService', () => {
    describe('#join', () => {
        it('joins two words into a single string', async () => {
            let service = new ExampleService('demo')
            let respose = await service.join('test')

            assert.equal(respose, 'demotest')
        })
    })
})
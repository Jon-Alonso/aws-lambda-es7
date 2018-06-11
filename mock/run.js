
import index from './../index';
import event from './SNS-event.json';

/**
 * Mock a Lambda event
 */
const context = {
    fail: error => error
}

index.handler(event, context, (error, success) => {
    if (error) {
        console.log('Error', error)
        return;
    }

    console.log('Success', success)
})

const apiCallDurations = [3000, 4000, 5000, 6000, 10000];
const maxDuration = 9999;

const callAPI = (duration) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // TODO: If the duration is longer than maxDuration, reject() the promise
            if (duration > maxDuration) {
                rej ect(new Error('Timeout, maximum duration exceeded'));
            } else {
                resolve(`Resolved in ${duration} seconds.`);
            }
        }, duration);
    });

const promises = [];

apiCallDurations.map((duration) => promises.push(callAPI(duration)));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected

Promise.all(promises)
    .then((values) => {
        console.log('\nThe returned array for our Promise.all() call:');
        console.log(values);
    })
    .catch((err) => new Error(err));
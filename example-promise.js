
function getTempCallBack(location, callback) {
    callback(undefined, 78);
    callback('city not found');
};


// getTempCallBack('Philadelphia', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });


function getTempPromise (location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {

            resolve(79);
            reject('City not found');
        }, 1000);

    })
};

// getTempPromise('Philadelphia').then(function(temp){
//     console.log('success', temp)
// }, function(err) {
//     console.log('promise error', err)
// });


function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a ==='number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('These are not both numbers');
        };
    });
};

addPromise(2, 'ok').then(function(result){
    console.log('success', result);
}, function(err) {
    console.log('error', err);
});
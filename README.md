# Promise methods

### Installation

To be able to start changing and testing the functions please clone the repo, 
install the required npm packages and then transpile the files.

```javascript
git clone https://github.com/ottokartye/promises
cd promises
npm install
tsc
```

You can then run the files by typing

```javascript
node dist/any.js
```

## Description

This repository contains custom methods for handling an array of promises.
It uses Typescript and it's work in progress.

## Race-resolved

This method will act like the Promise.race but it won't stop at the first rejected promise.
It will continue till the first promise is resolved and return it's value.

### Usage

```javascript
raceResolved([promise1, promise2, promise3])
  .then(result => {
    console.log(result);
  });
```

## Stream

The method will try to resolve each promise but the user can also pass a callback function which will be executed each time a promise is resolved.
At the end it will return an array with the results of each passed promise.

### Usage

```javascript
function callback(values, index) {
  console.log(index, ': ', values);
}

stream([promise1, promise2, promise3], callback)
  .then(result => {
    console.log(result)
  });
```

## Any

The method will wait till all the promises passed inside the array are resolved/rejected and only then return the resulting array.

### Usage

```javascript
any([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  })
```

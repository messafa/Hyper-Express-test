

# HYPER-test:


this is a test or compiration between HYPER-Express framwork and Express framwork and the fames framwork Express js 

## Table of Contents:
    - [Introdiuction & Definitions](#Introdiuction-&-Definitions)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Test](#Test)
    - [Conclusion](#Conclusion)
    - [Screenshots](#Screenshots)

## Introdiuction & Definitions:

- **HYPER-Express** is a framwork that is built on top of Express js framwork and it is a framwork that is built to make the development of the web applications more easier and faster.
- **Express** is a framwork that is used to build web applications and APIs using Node js.
- **K6** is a framwork that is used to test the performance of the web applications and APIs.

## Installation:

- **HYPER-Express**:
    - `npm install hyper-express`
- **Express**:
    - `npm install express`
- **K6**:
    //windows then linux
    ### Windows:
    - `choco install k6`
    ### Linux:
    - `sudo apt-get install k6`

## Usage:

    ### Express:
    - bash 
    - `node express.js`
    - Start a new terminal
    - `k6 run test.js`
    - The output will be the number of requests that the server can handle in a second.

    ### HYPER-Express:
    - bash
    - stop the express server
    - `node hyperexpress.js`
    - Start a new terminal or back to the first terminal of first test 
    - `k6 run test.js`
    - The output will be the number of requests that the server can handle in a second.

## Test:

- **Express**:
    - 100 virtual users in 10 seconds  the result is 13477 requests
    - 250 virtual users in 30 seconds the result is 30299 requests

- **HYPER-Express**:
    - 100 virtual users in 10 seconds the result is 15654 requests
    - 250 virtual users in 30 seconds the result is 39530 requests


## Conclusion:

- **HYPER-Express** is faster than Express framwork and it can handle more requests in a second than Express framwork.
- **HYPER-Express** is a good choice for the developers who want to build web applications and APIs faster and easier.
- **HYPER-Express** is built on top of Express framwork so it is easy to learn and use.



## Screenshots:

- **Express**:
    - ![Express](express.png)
    - ![Express](express2.png)

- **HYPER-Express**:
    - ![HYPER-Express](hyperexpress.png)
    - ![HYPER-Express](hyperexpress2.png)
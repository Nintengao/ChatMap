# ECE496 - University of Toronto - Chat Map

This is a mobile app that connect the nearby people.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install the following software and packages to setup the lanuguage.

```
go online and learn to install react-native
```

### Installing

To setup the development environment, install the following:

Install StackNavigator

```
npm install
npm install --save react-navigation
```

Install react-native-map-api

```
npm install react-native-maps --save
react-native link react-native-maps
```
Ensure that you have Google Play Services installed:

```
You can check it by openning your Android Studio->Tools->Android->SDK Manager
Then select 'SDK Tools' tag and look for 'Google Play Services'.
If it is unchecked, check it and then click 'Apply' and it will be installed.
```
Install react-native-gifted-chat

```
npm install react-native-gifted-chat --save
```

Download and install MongoDB:
```
https://www.mongodb.com/download-center#community
```

How to setup MongoDB:
```
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
```

In server directory run the following commands:
```
npm install express body-parser ejs --save
```

```
npm install mongojs --save
```

```
npm install nodemon -g
```

Install firebase:
```
Under the root directory of the app, run:
npm install --save firebase
```

To use firebase dependency in your code:
```
import firebase from 'firebase'
```

Install Redux and React-Redux:
```
Under the root directory of the app, run:
npm install --save redux react-redux
npm install --save redux-thunk
npm install --save react-native-router-flux
npm install --save lodash
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With


## Contributing


## Versioning


## Authors


## License


## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

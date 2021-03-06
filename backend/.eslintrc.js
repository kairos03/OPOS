const path = require('path')

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "settings": {
        "import/resolver" : {
            node: { paths: [path.resolve('./src')]}
        },
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    },
    "env": { 
        "amd": true,
        "node": true
    }
};
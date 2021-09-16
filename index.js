const { Driver } = require('copha')

const Config = {
    browser: "chrome"
}

class MyBrowserDriver extends Driver {
    constructor(conf) {
        super(conf)
    }
    async init() {

    }

    async open(url) {

    }

    async clear() {

    }

    async sleep(n) {

    }

    buildSelector(k,v){

    }
    getKey(name){

    }
    async findElements(v){

    }
    async findElement(v){

    }
}

exports.Driver = MyBrowserDriver
exports.Config = Config

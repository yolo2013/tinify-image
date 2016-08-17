#!/usr/bin/env node
'use strict'

const tinify = require('tinify')
const path = require('path')
const colors = require('colors')
const fs = require('fs')
const program = require('commander')
const version = require('./package.json').version

let key = require('./key.js')
tinify.key = key

// supported file types.
const exts = ['.jpg', '.jpeg', '.png']
const keyFile = path.resolve(__dirname + "/key.js")

const userArgs = process.argv.slice(2)

if (userArgs[0] === 'count') {
    tinify.validate(err => {
        if (err) {
            console.log('Your API key is not yet set, or it\'s invalid'.red)
        } else {
            console.log(`The key ${key} has optimized ${tinify.compressionCount} images this month, max number of free images is 500`.green)
        }
        process.exit(1)
    })
    return
}

if (userArgs[0] === 'setKey') {
    let keyToSet = userArgs[1]

    if (!keyToSet) {
        console.log(`Key can not be set to empty`.red)
        process.exit(1)
    }

    fs.writeFile(keyFile, `module.exports = ${keyToSet}`, (err) => {
        if (err) return console.log(err)
        console.log(`Key is set to ${keyToSet}`)
        process.exit(1)
    })
    return
}

program
    .version(version)
    .option('-s, --source', 'source folder')
    .option('-t, --target', 'target folder')

program.parse(process.argv)

let source = program.source || './source'
let target = program.target || './target'

// if target folder not exists, create it.
if (!fs.existsSync(target)) {
    fs.mkdirSync(target)
}

fs.readdir(source, (err, files) => {
    let tasks = []
    files.forEach(name => {
        if (exts.indexOf(path.extname(name)) === -1) {
            return
        }
        tasks.push(compress(name))
    })

    Promise.all(tasks)
        .then(function () {
            console.log('All done! Have a nice day.'.green)
        })
})

function compress(name) {
    return new Promise((resolve, reject) => {
        let sourceFile = `${source}/${name}`
        let targetFile = `${target}/${name}`

        fs.stat(sourceFile, function (err, stats) {
            let originSize = stats.size
            console.log(`file ${sourceFile}, origin size: ${(originSize / 1024).toFixed(2)}kb.`)

            tinify.fromFile(sourceFile).toFile(targetFile, function () {
                fs.stat(targetFile, function (err, stats) {
                    if (err) {
                        if (err instanceof tinify.AccountError) {
                            console.log("Verify your API key and account limit.")
                        } else if (err instanceof tinify.ClientError) {
                            console.log("Check your source image and request options.")
                        } else if (err instanceof tinify.ServerError) {
                            console.log("Temporary issue with the Tinify API.")
                        } else if (err instanceof tinify.ConnectionError) {
                            console.log("A network connection error occurred.")
                        } else {
                            console.log("The error message is: " + err.message)
                        }
                    } else {
                        console.log(`file ${sourceFile}, now size: ${(stats.size / 1024).toFixed(2)}kb. Just saved you ${((stats.size / originSize) * 100).toFixed(2)}%`.yellow)
                        resolve()
                    }
                })
            })
        })
    })
}
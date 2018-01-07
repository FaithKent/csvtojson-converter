//const converterTool = require('convtojson')
const converterTool = require('csvtojson')
const fileToConvert = 'customer-data.csv'
const fs = require('fs')
const fileToOutput = 'customer-data.json'

const arrayOfObjects =[]

converterTool()
    .fromFile(fileToConvert)
    .on('json', (jsonObj) => {
        // console.log('item',jsonObj)

		arrayOfObjects.push(jsonObj)

    })
    .on('done', (error) => {
        console.log('end', arrayOfObjects)

		fs.writeFileSync(fileToOutput, JSON.stringify(arrayOfObjects, null, 2))

    })

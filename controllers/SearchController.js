const redis = require('redis')
const lucene = require('lucene')

const getElasticData = (req, res) => {

}

const getElkData = (req, res) => {

}

const getAoacheData = (req, res) => {

}

const getRedeneData = async (req, res) => {
    const client = redis.createClient({
        password: 'rrE39ca5AIAq3rUJeoOUNXhJTAanz1RF',
        socket: {
            host: 'redis-18180.c323.us-east-1-2.ec2.cloud.redislabs.com',
            port: 18180
        }
    })

    return res.status(200).json(client)
}

const getLuceneData =  (req, res) => {
    const luceneQuery = 'title:node AND content:javascript'
    const parsedQuery = lucene.parse(luceneQuery)
    return res.status(200).json(parsedQuery)
}


module.exports = { getElasticData, getElkData, getAoacheData, getRedeneData, getLuceneData }
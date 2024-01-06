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
        password: 'Your API KEY GOES HERE',
        socket: {
            host: 'Your REDIS API HOST GOES HERE',
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
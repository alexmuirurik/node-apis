const axios = require('axios')

const AlexMuiruriPosts = (req, res) => {
    axios.get('https://alexmuiruri.com/wp-json/wp/v2/posts')
    .then(result => {res.status(200).json(result.data)}).catch(err => res.status(500).json(err))
} 

module.exports = {AlexMuiruriPosts}
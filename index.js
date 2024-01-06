const express   = require('express')
const path = require('path');
const app     = express()
const { getSlackData, getTwilioData, getMsteamsData, getJiraData, getGoogleData, getZoomData, getDropboxData } = require('./controllers/CollaController')
const { getMondayData, getWorkfrontData, getMsProjectData } = require('./controllers/PmanaController');
const { getElasticData, getElkData, getAoacheData, getRedeneData, getLuceneData } = require('./controllers/SearchController');
const GptRoutes = require('./routes/GptRoutes')
const HomeRoutes = require('./routes/HomeRoutes')

//Home with that returns an empty array
app.post('/api', (res, req) => {
    req.json({message: 'We is testing some data'})
})

app.use(express.static(__dirname + '/build'));

//Getting data from Slack.com https://api.slack.com/web
app.post('/api/slack', getSlackData)
app.post('/api/twilio', getTwilioData)
app.post('/api/ms-teams', getMsteamsData)
app.post('/api/jira-confluence', getJiraData)
app.post('/api/google-apps', getGoogleData)
app.post('/api/zoom', getZoomData)
app.post('/api/dropbox', getDropboxData)

//Getting Data from Jira Confluence
app.post('/api/monday', getMondayData) 
app.post('/api/workfront', getWorkfrontData)
app.post('/api/microsoft-project', getMsProjectData)

//Getting Data from Jira Confluence
app.post('/api/elastic', getElasticData)
app.post('/api/elk', getElkData)
app.post('/api/apache-solr', getAoacheData)
app.post('/api/redis', getRedeneData)
app.post('/api/lucene', getLuceneData)

//Getting Data from ChatGPT
app.use('/api/chatgpt', GptRoutes)
app.use('/api/home', HomeRoutes)

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './build', 'index.html'))
})


app.listen(5000, () => {console.log('Server Started on Port 5000')})
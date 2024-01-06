const axios   = require('axios')
const jwt     = require('jsonwebtoken')
const KJUR = require('jsrsasign')

const getSlackData = (req, res) => {
    const  data = axios.get('https://slack.com/api/conversations.unarchive')
    .then(response => {return res.json(response.data)})
    .catch(error => {return res.json(error)})
}

const getTwilioData = (req, res)=> {
    const accountSid = 'ACd353a1b7111735965301cd893dddc094';
    const authToken = 'b525da7afecbf9893edbed6253bfdd72';
    const message = { body: 'Hello from twilio-node', to: 'whatsapp:+254700278347', from: 'whatsapp:+14155238886', }
    const twilio = require('twilio')(accountSid, authToken);
    twilio.messages.create(message).then((message) => {return res.json(message)});
}

const getMsteamsData = (req, res) => {
    const apitoken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAVvP1BfEKeoXUACbkyEvZH5A8cSTC5GRaztr/rJFaf99uAmXqvl29xvjKtI6LEcRPk5XEmjbObB/wXPpJds9RuNax89Ks73MVw7FJRrBw2HCKbgzo8tRfdi0mKPl3D1V7Bp0cqeyagFO8+GPSTORpy8Oc6E/Ql3WoWLxjH+0YQ6fKGdXWFphqo65jl+leSAxzyrNgK7VTRqZYR7lgr8bKTfSCt9c5JDcE7zO1Z/q8j9F6bOfPr4Xw8EqhMcXsMOVnKAJpMeRgBrguyHmLn1GIE8dKRvzXCtctqOk0VGBO3HSlDetYGejl+ENVQNNLqNE07dCTSsuaM23zNHnqziaqAADZgAACDna/FiDQevhQAIJqciXqWFPZm0XXVYVhEPYLN5qqsNrfChDst+T1tOjJF51QQnVrazpjZAbmanCRhnuErDP1gJI7M6bCA1rQ3QjZrEIjiXK1Z3QKrDQQ4frwVG+pptecpZ8eDFIlxrhy8760LlDLxmS2fRNEqTiYbibvGTxIkxV6xOr/qWpXtwi0CktCY+nIWI0EczOP5dVRsax9blstcrQzr4oJNGSZxep5ZyhusWyYcywMEUOqT1sFa8+24Km7I90m+yaxqf7Rvn0vUDAF8C992PyMhu3+6ITJ0MVzDe53Keh47HzZ7q3za/urVCTeyFIzXalWcrJ/ScdEnwmhnJMq13DmDBl8+lJe4OK5dtba8mIurH2NMNT/f/bO13MQ7cO1ZY9/Ze0FxNPCPTZ7J0kDwv7JbM6m4tD5H+e9NABwxbWcWZrBdfqM3bMIy56HvNcHYe9udH9GbMGdOxI3ABY07Jd9ck1bVi3tYFPmRgIigD75cRNYAQfh1xdhsAbMKr4Hl6yDAbOngmVou2tozPXoUvhNEIxGRiWOxJ05JLpSzI6amaQw61OlGJesqDZVyR5Sai1P3gPkl9MP4RwFS3jVIuaRXYQvZzFxXAzyj9v20Xrhphnm0zNR3W6YUldnRMRoWdRutl1LnME/QfFAQHAMXPsEOPqYZn8ZxGJoVsQuMHBd5t776Ncai4ytkSqe/vmEXQP9LX5kVEec7DqtlI2ykxcMyY+YwsSILi8TzY3Cp7EH0uo0I50BuIzXAOW3aj9gGNHlQz66NeEAg=='
    const options = {
      headers: {
        Authorization: `Bearer ${apitoken}`
      }
    };
    const data    = axios.get('https://graph.microsoft.com/v1.0/me/messages', options)
    .then(response => {return res.json(response.data)})
    .catch(error => {return res.json(error)})
}

const getJiraData = (req, res) => {
    const apitoken = 'ATATT3xFfGF0OV_MPM1UYQXz_l3Lz81Z6PN2zdkv17ZFGnRgDRwCppnvokRRlfrVXxkMDJHHvPVG51xYZEHwYtGVYl_hhBTvdQr2K_br9FKB1yBkaABEiCQTOsyoydLB3m_tlhhZslqhG4lhQ-WXiwzfJoJsiifWeZXjNWFGbcnOY2WhkruGdI4=2B7E28A1'
    const options  = { method: 'GET', headers: { 
        'Authorization': `Basic ${Buffer.from( 'legittpayout@gmail.com:'+apitoken).toString('base64')}`,
        'Accept': 'application/json'
      }
    }
    const data    = axios.get('https://alexknetrascale.atlassian.net/wiki/api/v2/pages', options)
    .then(response => {return res.json(response.data)})
    .catch(error => {return res.json(error)})
}

const getGoogleData = async (req, res) => {
    const { google } = require('googleapis') 
    const oauth2Client = new google.auth.GoogleAuth({
      keyFile : './src/google.json', 
      scopes : 'https://www.googleapis.com/auth/spreadsheets'
    })
  
    const client = await oauth2Client.getClient()
  
    const sheets = google.sheets({version : "v4", auth : client})
  
    const sheeid = '1KL8pMhP_8g0627FLn9GCU3CyhaTOcivVOyOnQF2oZCs'
  
    const meta   = await sheets.spreadsheets.get({
      auth: oauth2Client, spreadsheetId: sheeid
    }).then(reso => {return res.json(reso)}).catch(err => {return res.json(err )})
}

const getZoomData = (req, res) => {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2
    const oHeader = { alg: 'HS256', typ: 'JWT' }
  
    const oPayload = {
      sdkKey: 'Hg78BlmZQDWYf7UWc7khQ',
      iat: iat,
      exp: exp,
      appKey: 'Hg78BlmZQDWYf7UWc7khQ',
      tokenExp: iat + 60 * 60 * 2
    }
  
    const sHeader = JSON.stringify(oHeader)
    const sPayload = JSON.stringify(oPayload)
    const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, 'KlX9Rhi9vt3bDxjHNZC8jZlmTPb8zb2B')
  
    axios.get('https://api.zoom.us/v2/users/me/meetings', { headers : { 'Authorization' : 'Bearer ' + signature} })
    .then(reso => {return res.json(reso.data)})
    .catch(err => {return res.json(err)})
}

const getDropboxData = (req, res) => {
    var Dropbox = require('dropbox').Dropbox;
    var dbx = new Dropbox({ accessToken: 'sl.BrdW_DMdNLW0QZg5-ZMBbpjwDd0JIKscKN0FSDwFCfJnmhEgJmxShndqjUajEZfi5SGNv7LNlWFQk5z7SgUncIiDS1_HeR_VSaHjjD9H8FI01Our_YDwB98K6y3oW7GGQ_UG9t_EEwyr' });
    dbx.filesListFolder({path: '/list_folder'})
    .then(function(response) { res.json(response)})
    .catch(function(error) { res.json(error) });
      
}

module.exports = { getSlackData, getTwilioData, getMsteamsData, getJiraData, getGoogleData, getZoomData, getDropboxData}
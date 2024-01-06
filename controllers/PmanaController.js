const axios = require('axios')

const getMondayData = (res, req) => {
    axios.post("https://api.monday.com/v2", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Your API KEY GOES HERE',
        'API-Version' : '2023-04'
      },
      body: JSON.stringify({
        'query' : 'query{boards (limit:1) {id name} }'
      })
    }).then(function(response) { req.json(response)})
    .catch(function(error) { req.json(error) });;
}

const getWorkfrontData = async (req, res) => {
  // Replace these with your actual Workfront API details
  const apiUrl = 'https://your-workfront-instance.attask-ondemand.com/attask/api' // Replace with your Workfront API URL
  const clientId = 'your_client_id'
  const clientSecret = 'your_client_secret'
  const username = 'your_username'
  const password = 'your_password'
  const response = await axios.post(`${apiUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: {
      grant_type: 'password',
      client_id: clientId,
      client_secret: clientSecret,
      username: username,
      password: password,
    },
  })

  return res.status(200).json(response.data.access_token)
} 

const getMsProjectData = (req, res) => {
  const apitoken = 'Your API KEY GOES HERE'
  const options = {
    headers: {
      Authorization: `Bearer ${apitoken}`
    }
  };
  const data    = axios.get('https://graph.microsoft.com/v1.0/me/planner/tasks', options)
  .then(response => {return res.json(response.data)})
  .catch(error => {return res.json(error)})
}

module.exports = { getMondayData, getWorkfrontData, getMsProjectData }
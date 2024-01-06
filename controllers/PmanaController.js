const axios = require('axios')

const getMondayData = (res, req) => {
    axios.post("https://api.monday.com/v2", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMwMTgyNTE4NSwiYWFpIjoxMSwidWlkIjo1MzAyMjA3NywiaWFkIjoiMjAyMy0xMi0xMFQxNjo0MDowMS40MDFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjAyMzAyMTksInJnbiI6ImV1YzEifQ.hxPtM8mGyCMlXPjh9w8vW4i4snfz_GtzJ9rWRBtkkYA',
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
  const apitoken = 'EwBwA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAVvP1BfEKeoXUACbkyEvZH5A8cSTC5GRaztr/rJFaf99uAmXqvl29xvjKtI6LEcRPk5XEmjbObB/wXPpJds9RuNax89Ks73MVw7FJRrBw2HCKbgzo8tRfdi0mKPl3D1V7Bp0cqeyagFO8+GPSTORpy8Oc6E/Ql3WoWLxjH+0YQ6fKGdXWFphqo65jl+leSAxzyrNgK7VTRqZYR7lgr8bKTfSCt9c5JDcE7zO1Z/q8j9F6bOfPr4Xw8EqhMcXsMOVnKAJpMeRgBrguyHmLn1GIE8dKRvzXCtctqOk0VGBO3HSlDetYGejl+ENVQNNLqNE07dCTSsuaM23zNHnqziaqAADZgAACDna/FiDQevhQAIJqciXqWFPZm0XXVYVhEPYLN5qqsNrfChDst+T1tOjJF51QQnVrazpjZAbmanCRhnuErDP1gJI7M6bCA1rQ3QjZrEIjiXK1Z3QKrDQQ4frwVG+pptecpZ8eDFIlxrhy8760LlDLxmS2fRNEqTiYbibvGTxIkxV6xOr/qWpXtwi0CktCY+nIWI0EczOP5dVRsax9blstcrQzr4oJNGSZxep5ZyhusWyYcywMEUOqT1sFa8+24Km7I90m+yaxqf7Rvn0vUDAF8C992PyMhu3+6ITJ0MVzDe53Keh47HzZ7q3za/urVCTeyFIzXalWcrJ/ScdEnwmhnJMq13DmDBl8+lJe4OK5dtba8mIurH2NMNT/f/bO13MQ7cO1ZY9/Ze0FxNPCPTZ7J0kDwv7JbM6m4tD5H+e9NABwxbWcWZrBdfqM3bMIy56HvNcHYe9udH9GbMGdOxI3ABY07Jd9ck1bVi3tYFPmRgIigD75cRNYAQfh1xdhsAbMKr4Hl6yDAbOngmVou2tozPXoUvhNEIxGRiWOxJ05JLpSzI6amaQw61OlGJesqDZVyR5Sai1P3gPkl9MP4RwFS3jVIuaRXYQvZzFxXAzyj9v20Xrhphnm0zNR3W6YUldnRMRoWdRutl1LnME/QfFAQHAMXPsEOPqYZn8ZxGJoVsQuMHBd5t776Ncai4ytkSqe/vmEXQP9LX5kVEec7DqtlI2ykxcMyY+YwsSILi8TzY3Cp7EH0uo0I50BuIzXAOW3aj9gGNHlQz66NeEAg=='
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
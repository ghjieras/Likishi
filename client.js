const axios = require('axios');

var data = {
  message: '嘿嘿嘿嘿'
}


var sendData = async function(msg) {
  try {
    console.log(msg)
    await axios.get('http://localhost:3000/webhook', {params: data})
  } catch (error) {
    throw new Error(error)
  }
}

sendData(data)

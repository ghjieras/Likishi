const axios = require('axios');

var data = {
  message: '嘿嘿嘿嘿'
}


var sendData = async function (msg) {
  try {
    console.log(msg)
    await axios.get('https://localhost:3000/callback', {
      params: data
    }).then((res) => { console.log(res.data) })
    .catch((error) => {console.error(error)})
  } catch (error) {
    throw new Error(error)
  }
}

sendData(data)
const axios = require('axios').default;
const moment = require('moment')
const color = require('colors')
const url = "https://www.oref.org.il/WarningMessages/alert/alerts.json"

const headers = {
    "Referer": "https://www.oref.org.il/11226-he/pakar.aspx",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
}
let lastId
const start = async () => {
    try{
        const {data} = await axios.get(url, { headers })
        if (!data) return
        if(data.id === lastId )return
        lastId = data.id
        console.log(moment().format('DD/MM/YYYY HH:mm:ss'), color.red(data.data.join()))
    }
    catch{
        return
    }

}
setInterval(start, 1000)
// Recuper gli elementi del DOM
const emailList = document.getElementById("email-list");

// dichiaro le variabili
const emails = []
const endpoint = ` https://flynn.boolean.careers/exercises/api/random/mail`

// svolgo la chiamata ajax per interrogare l'endpoint
axios.get(endpoint).then(res => {
    const email = res.data.response
    console.log(email)
})
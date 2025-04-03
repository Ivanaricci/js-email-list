// Recuper gli elementi del DOM
const emailList = document.getElementById("email-list");
const button = document.getElementById('button')
// dichiaro le variabili
const emails = []
const endpoint = ` https://flynn.boolean.careers/exercises/api/random/mail`


// ciclo per ottenere 10 mail
// svolgo la chiamata ajax per interrogare l'endpoint

for (let i=0; i<=10; i++){
    axios.get(endpoint).then(res => {
        const email = res.data.response
        console.log(email)
        emails.push(email)


        const li = document.createElement('li');
        console.log(li)
        li.textContent = email;
        emailList.appendChild(li)
    })
}


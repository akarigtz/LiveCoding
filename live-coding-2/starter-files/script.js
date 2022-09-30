// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let getAnswer = document.getElementById("button");
let answer = document.getElementById("answer");

getAnswer.addEventListener("click", function(){
    api_endpoint(API_ENDPOINT);
    setTimeout(()=>{
        document.getElementById("input").value = "", answer.innerHTML = ""
    },8000)

})//event+function

const api_endpoint = () => {
    let api = fetch("https://yesno.wtf/api", {
        method : "GET"
    });//fetch+GET

    api.then((response)=>{
        response.json().then ((data)=>{
            answer.innerHTML = data.answer;
        }).catch((error) =>{
            console.error("Problema en la respuesta" + error);
        });
    }).catch((error)=>{
        console.error("Error en la solicitud" + error);
    });
    }

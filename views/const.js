
const ENV = false

function getServerUrl(){
    if(ENV){
        return 'http://127.0.0.1:8000'
    }else{
        return 'https://hotel-backend-yrr7.onrender.com'
    }





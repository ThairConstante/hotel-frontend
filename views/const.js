
const ENV = true

function getServerUrl(){
    if(ENV){
        return 'http://127.0.0.1:8000'
    }else{
        return 'https://citas-backend-ah3z.onrender.com'
    }
}




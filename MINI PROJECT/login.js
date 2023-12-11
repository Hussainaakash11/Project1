const name = document.getElementById('username');
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let message=[]
    if (username.value === '' || username.value == null){
        message.push('USERNAME IS REQUIRED')
    }
    if(message.length>0){
        e.preventDefault()
        errorElement.innerText=message.join(',') 
    }
    if(password.value==='password' && username.value==='username'){
        alert('welcome')
    }


    e.preventDefault()
})

const loginform=document.getElementById('Login-form');

loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    
    fetch('/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password
        })
    })

        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                window.location.href='/dashboard';
            }else{
                alert('Invalid emailor password');
            }
        })
                .catch((error)=>{
                    console.error(error);
           });
       });
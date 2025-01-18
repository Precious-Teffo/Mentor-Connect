//Getbthe registration for element
const registrationForm=document.getElementById('registration-form');

//Add an event listener to the form submit event
registrationForm.addEventListener('submit',(e)=>{
    //Prevent the default from submission behaviour
    e.preventDefault();
    
    //Get the form data
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const role=document.getElementById('role').value;
    const terms=document.getElementById('terms').checked;
    
    //validate the form data
    if(!name || !email || !password || !role || !terms){
        
       alert('Please fill out all fields and agree to the terms');
       return;
    }
    
    //Submit the form data to the server(eg using fetch API)
    fetch('/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name,
            email,
            password,
            role
        })
    })
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                alert('registration sucessful!');
            })
                    .catch((error)=>{
                        console.error(error);
                alert('Registration failed.Please try again');
                    });
});

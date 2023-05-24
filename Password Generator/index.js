let combinations = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']

let pass1 = document.getElementById('apple')
let pass2 = document.getElementById('orange')
let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    // we create the variable where the password being generated will be stored
    let password1 = ''
    let password2 = ''
    
    /* we run a for loop to generate 8 different characters by getting 8 random numbers 
    that will point to different items in our array depending on the random number generated
    then saving it in the password variable created
    afterwards, passing the value in the password variable to the html document
    */
    for(let i = 0; i < 8; i++){
    
    ran1 = Math.floor(Math.random() * combinations.length)
    ran2 = Math.floor(Math.random() * combinations.length)
    
    password1 += combinations[ran1]
    password2 += combinations[ran2]
    
    pass1.textContent = password1
    pass2.textContent = password2
    
    } 
})

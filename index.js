document.getElementById('submit').addEventListener('click', function(){
    
    const inputX = document.getElementById('inputName');
    const inputY = document.getElementById('inputCursh');
    if(inputX.value != '' && inputY.value !=''){
            
    const inputName = document.getElementById('inputName');
    const inputNameValue = inputName.value;
    inputName.value = ''
    
    // set name
    const takeName = document.getElementById('yourName')
    takeName.innerText = inputNameValue;

    const inputCursh = document.getElementById('inputCursh')
    const setCrush = inputCursh.value;
    inputCursh.value = ''
    

    const crushName = document.getElementById('crushName')
    crushName.innerText = setCrush;
    // crushName.value = ''
    // btn
    const x = document.getElementById('submit')
    x.style.background = '#4BF70C';
    x.style.color = '#007ACC';
   
    // math
    const getLove = Math.floor(Math.random()*102);
    const getTextLove = getLove+''
    // console.log(typeof getTextLove, getTextLove);
    

    // get number
    const parcent = document.getElementById('loves');
    // const parcentText = parcent.innerText;
    parcent.innerText = getTextLove;
        


    }
    else{
        // console.log('input please');
        const x = document.getElementById('warning');
        const warningText = 'Please, reload the page and provide your and your crush name';
        x.style.color = 'red'
        x.style.textAlign = 'center'
        x.style.fontSize = '20px'
        x.style.fontSize = '20px'
        // const Xtext = x.innerText;
        x.innerText = warningText;
        // x.innerText = ''
        
    }
    // console.log(inputX);
    // console.log(inputY);
})

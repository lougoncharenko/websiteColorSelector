const select= document.querySelector('select');
    const html= document.querySelector('html');
    document.body.style.padding = '10px';

    function update(bgColor, textColor){
        html.style.backgroundColor= bgColor;
        html.style.color=textColor;
    }

    select.onchange= function(){
        if (select.value === 'black'){
           update('black', 'white') ;
        } else if (select.value === 'white'){
         update('white', 'black');   
        } else if (select.value === 'blue'){
            update('blue', 'white'); 
        } else if(select.value === 'red') {
            update('red', 'black');
        }
    
        
    }

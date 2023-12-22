var button1 = document.querySelector('#trigger1');
var button2 = document.querySelector('#trigger2')
var button3 = document.querySelector('#trigger3')
var button4 = document.querySelector('#trigger4')

var all_panels = document.querySelectorAll('.accordion-panel')
var all_buttons = document.querySelectorAll('.accordion-trigger')


const CloseAll = () => {
    for (i=0; i < all_panels.length; i++) {
        all_panels[i].setAttribute('hidden', 'hidden');
        all_buttons[i].querySelector('img').src="./assets/images/icon-plus.svg"; 
        all_buttons[i].setAttribute('aria-expanded', "false"); 
    }; 
}

button1.addEventListener('click', (e) => {

    var head = button1.parentElement;

    var panel1 = head.querySelector('#panel1'); 

    var status = button1.getAttribute('aria-expanded'); 

    // alles sluiten

    CloseAll(); 


    // panel1 openen of sluiten.

   if (status== "false") {
        panel1.removeAttribute('hidden'); 
        button1.setAttribute('aria-expanded', 'true'); 
        button1.querySelector('img').src="./assets/images/icon-minus.svg"; 
    } else {
        panel1.setAttribute('hidden', 'hidden');
        button1.setAttribute('aria-expanded','false' );
        button1.querySelector('img').src="./assets/images/icon-plus.svg"; 
    }
     
})



button2.addEventListener('click', () => {
    
    var head = button2.parentElement;
    var panel2 = head.querySelector('#panel2'); 

    var status = button2.getAttribute('aria-expanded'); 
    // alles sluiten

    CloseAll(); 

    // panel2 openen.

  
    
    if (status == "false") {
        panel2.removeAttribute('hidden'); 
        button2.setAttribute('aria-expanded', 'true'); 
        button2.querySelector('img').src="./assets/images/icon-minus.svg"; 
    } else {
        panel2.setAttribute('hidden', 'hidden');
        button2.setAttribute('aria-expanded','false' );
        button2.querySelector('img').src="./assets/images/icon-plus.svg"; 
    }
})

button3.addEventListener('click', () => {
    
    var head = button3.parentElement
    var panel2 = head.querySelector('#panel3'); 


    // alles sluiten

    var status = button3.getAttribute('aria-expanded'); 

    CloseAll(); 

    // panel3 openen.

    if (status == "false") {
        panel3.removeAttribute('hidden'); 
        button3.setAttribute('aria-expanded', 'true'); 
        button3.querySelector('img').src="./assets/images/icon-minus.svg"; 
    } else {
        panel3.setAttribute('hidden', 'hidden');
        button3.setAttribute('aria-expanded','false' );
        button3.querySelector('img').src="./assets/images/icon-plus.svg"; 
    }
}); 



button4.addEventListener('click', () => {
    
    var head = button3.parentElement
    var panel4 = head.querySelector('#panel4'); 


    // alles sluiten

    var status = button3.getAttribute('aria-expanded'); 

    CloseAll(); 

    // panel4 openen.

    if (status == "false") {
        panel4.removeAttribute('hidden'); 
        button4.setAttribute('aria-expanded', 'true'); 
        button4.querySelector('img').src="./assets/images/icon-minus.svg"; 
    } else {
        panel4.setAttribute('hidden', 'hidden');
        button4.setAttribute('aria-expanded','false' );
        button4.querySelector('img').src="./assets/images/icon-plus.svg"; 
    }

})



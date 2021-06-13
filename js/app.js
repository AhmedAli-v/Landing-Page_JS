// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Define Global Variables
//  * 
// */
const sections= document.querySelectorAll('section');
const navlist= document.querySelector("#navbar__list");
const topbutton=document.querySelector('.top');
    const html=document.querySelector('html');
    const heado=document.querySelector('.main__hero')


// /**
//  * End Global Variables
//  * Start Helper Functions
//  * 
// */


// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
// */
//  




// // build the nav

document.addEventListener('DOMContentLoaded' , () => {
    const length=sections.length;
    const fragment=document.createDocumentFragment();
    for (let i =1; i<= length; i++){
    const navli=document.createElement('li');
    let navlink=document.createElement('a');
    
    navlink.textContent="Section" + i ;
    navli.appendChild(navlink);
    let refd=sections[i-1].id;
    // navlink.setAttribute('href' , "#" + refd );
    navlink.setAttribute('data-link' , refd )
    fragment.appendChild(navli);
    
    }
    navlist.appendChild(fragment);
// // Add class 'active' to section when near top of viewport


// // Scroll to anchor ID using scrollTO event



const km =navlist.querySelectorAll('a')

km.forEach((element) => {
    
element.addEventListener('click', ()=> {
    let atrr= element.getAttribute('data-link')
    let el2 = document.getElementById(atrr)
    el2.scrollIntoView( {
        behavior:'smooth',
        block:'start'

    })
    
})
})})

// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 

// // Scroll to section on link click

// // Set sections as active

window.addEventListener("scroll" , ()=> {
    const km =navlist.querySelectorAll('a')
    
 for(let i =0; i<sections.length; i++) {

   
        let position=sections[i].getBoundingClientRect();
      if(position.top >= 0 && position.bottom <= window.innerHeight ){
          sections[i].className=('active');
          km[i].className='actlink'
          
      }
      else {
          sections[i].classList.remove('active')
          km[i].classList.remove('actlink')
      }
  
    }})
 


    /// end of active///

    //start of backtotop//
    
    topbutton.addEventListener('click' , (e)=>{
        e.preventDefault()
        html.scrollIntoView( {
            behavior:'smooth',
            block:'start'
    
        })


    } )
    window.addEventListener('scroll' , ()=> {
        if(heado.getBoundingClientRect().bottom<0)
        {
        topbutton.style.display='block'
        }
        else{
            topbutton.style.display='none'
        }
    })

    //end of backtotop///

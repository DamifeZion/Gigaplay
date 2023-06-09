//below is for newsletter

{
  let input = document.querySelector('.newsletter-mobile').querySelector('input');

  let newsletterBtn = document.querySelector('.newsletter-mobile').querySelector('button');

  let newsletterMsg = document.querySelector('.newsletter-mobile').querySelector('h5');

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  input.addEventListener('focus', ()=> {
    input.style.borderColor = '#8CEFE9'

    input.setAttribute('placeholder', 'Email Address')

    newsletterMsg.style = `
    scale: 0.0; 
    transition: scale ease .3s;
    color: red;
    width: 0;
    height: 0;
    `

    newsletterMsg.style = `
    width: 0;
    height: 0;
    `
  })


  newsletterBtn.addEventListener('click', ()=> {
    if (input.value !== '') {

    if (!pattern.test(input.value.toLowerCase().trim())) {
      input.style.borderColor = 'red'

      input.value = '';

      newsletterMsg.textContent = 'Invalid Email'

      newsletterMsg.style = `
      scale: 1.1; 
      transition: scale ease .3s;
      color: red;`

      setTimeout(()=> {
        newsletterMsg.style = `
        scale: 0.0; 
        transition: scale ease .3s;
        color: red;`
      }, 5000)

      setTimeout(()=> {
        newsletterMsg.style = `
        width: 0;
        height: 0;
        `
      }, 5010)

    } else {
      newsletterMsg.textContent = 'Thanks For Subscribing'
      newsletterMsg.style = `
      scale: 1.1; 
      transition: scale ease .3s;`

      input.value = ''

      setTimeout(()=> {
        newsletterMsg.style = `
        scale: 0.0; 
        transition: scale ease .3s;
        `
      }, 5000)

      setTimeout(()=> {
        newsletterMsg.style = `
        width: 0;
        height: 0;
        `
      }, 5010)
    }


    } else {

    }
  })
}


//below is for menu
{
  let menuBtn = document.querySelector('.dropdown');

  let menuI = document.querySelector('.dropdown').querySelector('i');

  let dropdownItem = document.querySelector('.dropdown-items')

  function toggleButton() {
    let toggle = null;
    
    function changeState() {
      if (toggle === null) {
        toggle = true;
      } else {
        toggle = !toggle; 
      }
    }
    
    function getState() {
      return toggle;
    }
    
    return {
      changeState,
      getState
    } 
  }
  
  const toggle = toggleButton();
  
  toggle.changeState();

  toggle.getState();

  
  menuBtn.addEventListener('click', (e)=> {
    toggle.changeState(); 
    
    if(toggle.getState()) {
      menuI.setAttribute('class', 'fa-solid fa-x')
      dropdownItem.style = `
      display: flex;
      opacity: 1; 
      transition: opacity ease .3s`
    } else {
      menuI.setAttribute('class', 'fa-solid fa-bars-staggered')

      dropdownItem.style = `
      display: none
      opacity: 0; 
      transition: opacity ease .3s
      `
    }
  })


}
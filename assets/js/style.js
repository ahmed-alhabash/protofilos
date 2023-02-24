var typed = new Typed(".All-sections .About .title .subTitle span" ,{
  strings: [
      'front end devolper',
      'coding',
      'markting'
  ],
  typeSpeed:150,
  backSpeed:150,
  loop:true

})
// change the words start 
$(function(){
    'use strict'
    $('header .navbar .icons ').click(function(){
     $('.All-sections .information').toggleClass('show')
    })

    $('.Portfolio header .navbar .iconDayNight i:last-child').click(function(){
      $('.Portfolio header .navbar .iconDayNight i:first-child').show();
      $('.Portfolio header .navbar .iconDayNight i:last-child').hide();
      $('body').css("background", "#ffff")
    })
    $('.Portfolio header .navbar .iconDayNight i:first-child').click(function(){
        $('.Portfolio header .navbar .iconDayNight i:first-child').hide();
        $('.Portfolio header .navbar .iconDayNight i:last-child').show();
        $('body').css("background", "#111827")
      })
    $('.icon_love').click(function(){
      $('.Thanks-box').toggleClass('show_box')
    });
    $('.subHeader ul li').click(function(e){
      $('body , html').animate({
       scrollTop:$('#' + $(this).data('scroll')).offset().top 
      },100)
  
   })
})


// change mood 







// js code start



let count  =document.querySelector('header .navbar .icon_love .lovePlus')
window.onkeyup = ()=>{
  email.value = 'ahmedabad1c@gmail.com'
  names.style.border = '2px solid #08d565'
  email.style.border = '2px solid #08d565'
  msg.style.border = '2px solid #08d565'
}
let title_box = document.querySelector('.Thanks-box .title')
let btns = document.querySelector('.contact-us .box-contact form button')
let boxInformation = document.querySelector('.box-contact')
let names = document.querySelector('.contact-us .box-contact form .names'),
email = document.querySelector('.contact-us .box-contact form .email'),
msg = document.querySelector('.contact-us .box-contact form .text-aria')
let loading = document.querySelector('.loading')
function login(){
  if(names.value !== '' && email.value !=='' && msg.value !== ''){
    boxInformation.style.display = 'none'
    title_box.style.display='none'
    count.innerHTML ++
    loading.style.display = 'block'
  }else{

    names.style.border = '2px solid red'
    email.style.border = '2px solid red'
    msg.style.border = '2px solid red'
  }
}
btns.onclick=(e)=>{
  let thanks = document.querySelector('.tanks-msg')
 
  e.preventDefault();
  login()
  setInterval(()=>{
    loading.style.display = 'none'
  },2000)
  setInterval(()=>{
    thanks.style.display = 'block'

  },2000)

}
// scrolling
let subHeader = document.querySelector('.subHeader ul')
let footer = document.querySelector('footer')
window.onscroll = function(){
  console.log(window.scrollY);
  if(window.scrollY >= footer.offsetTop - 500){
    subHeader.style.display = 'none'
  }else{
    subHeader.style.display = 'block'
  }
}
window.addEventListener('input',fadeIn)


// scroll to pages
let informations = document.querySelector('.All-sections .information')
let about = document.querySelector('.about')
about.onclick = function(){
informations.classList.toggle("show")
}
let SubAbout = document.querySelector('.About')
SubAbout.onclick = function(){
  informations.classList.toggle("show")
}

let sec = document.querySelectorAll('section')
let links = document.querySelectorAll('header .navbar .navbar-nav .nav-item');
// reply box
let ThanksBox = document.querySelector('.Thanks-box')
let msgs = document.querySelector('.contact-us .box-contact form .text-aria')
function fadeIn(){
  let visitor = document.querySelector('.Thanks-box .content .title_box h4'),
  visitorMsg = document.querySelector('.Thanks-box .content .discription p')
  visitor.innerHTML = names.value
  visitorMsg.innerHTML = msgs.value
 let content = document.querySelector('.Thanks-box .content')
 content.style.display = 'block'
}



// page show 
let  overLayPage = document.querySelector('.overLayPage');
let body =document.querySelector('body')
setInterval(()=>{
overLayPage.style.display = 'none'
body.style.overflow = 'visible'
},3000)
// page show 


let first = document.querySelector('header .navbar .navbar-toggler span:first-child')
let sectss = document.querySelector('header .navbar .navbar-toggler span:nth-child(2)')
let last = document.querySelector('header .navbar .navbar-toggler span:last-child')
let menu = document.querySelector('header .navbar .navbar-toggler')
menu.addEventListener('click',()=>{
  first.classList.toggle('close');
  sectss.classList.toggle("opac")
  last.classList.toggle('closeAnimat')
})














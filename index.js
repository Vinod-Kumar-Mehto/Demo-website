// burger menu
document.querySelector(".burger").addEventListener("click", function(){
    document.querySelector(".navlinks").classList.toggle("nav-active")
    document.querySelectorAll(".navlinks li").forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/7+ 0.5}s`
        }

        document.querySelector(".burger").classList.toggle("toggle")    
    })

});


// greetings
(function () {

     const popModel = document.querySelector(".popmodel h1")
        const today  = new Date()
        const  curHr = today.getHours()
            

        if(curHr < 12){
            
              popModel.innerText = "Good Morning, Guest"  
        }else if(curHr < 18){
            popModel.innerText = "Good afternoon, Guest"  
        }else if(curHr < 21){
            popModel.innerText = "Good evening, Guest"  
        }else{
               popModel.innerText = "Good night, Guest"  
        }


    const timeOut = setTimeout(()=>{
        document.querySelector(".popmodel").style.opacity = 0

    },10000)
    
    document.querySelector(".popmodel .cross").addEventListener("click", function(){

        clearTimeout(timeOut)
        document.querySelector(".popmodel").style.opacity = 0

    })

})();




window.addEventListener("scroll",  function(){
    if(window.scrollY > 100){

        document.querySelector(".background").style.opacity = 1

        
    }
})


// backgrounf color changer

document.querySelector(".background input").addEventListener("keyup", debounce(callLater))

function debounce(){
    
      let timer  
         return function(){
            let context = this,
            args = arguments
            clearTimeout(timer)
            timer = setTimeout(()=>{
                callLater.apply(context, args)

            },500)


}}


function callLater(context, args){
    document.querySelectorAll(".container").forEach((cont, index)=>{
        cont.style.background = this.value
    })
    
}

document.querySelectorAll(".navlinks li").forEach((list, index)=>{
    list.addEventListener("click", function(){
            
        if(this.innerText === "About us"){     
           window.scrollTo({
           top: document.querySelector(".cont1").offsetTop,
           left: 0,
           behavior: 'smooth'
         });
        }else if(this.innerText === "Features"){
            window.scrollTo({
            top: document.querySelector(".cont2").offsetTop ,
           left: 0,
           behavior: 'smooth'
         });


        }else if(this.innerText === "Gallery"){
            window.scrollTo({
            top: document.querySelector(".cont3").offsetTop ,
           left: 0,
           behavior: 'smooth'
         });


        }else if(this.innerText === "Reviews"){
            window.scrollTo({
            top: document.querySelector(".cont4").offsetTop ,
           left: 0,
           behavior: 'smooth'
         });


        }else if(this.innerText === "Contact us"){
            window.scrollTo({
            top: document.querySelector(".cont5").offsetTop ,
           left: 0,
           behavior: 'smooth'
         });


        }
    })


})


         





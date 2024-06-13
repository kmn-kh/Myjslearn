window.onscroll = function(){
   if(pageYOffset> 100){
      nav.style.position="fixed";
      nav.style.top="0";
   }else{
      nav.style.position="";
      nav.style.top="";
   }
}
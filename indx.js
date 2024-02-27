let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river5=document.getElementById('river5');
let boat6=document.getElementById('boat6');
let novil =document.getElementById('novil');
let main =document.getElementById('main');
window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value +'px';
    moon.style.top=value*3 +'px';
    mountains3.style.top=value*1.5 +'px';
    mountains4.style.top=value*1.2 +'px';
    river5.style.top=value*1.2 +'px';
    boat6.style.left=value*3 +'px';
    boat6.style.top=value +'px';
    novil.style.fontSize= value +'px';
    if(scrollY>=76){
        novil.style.fontSize= 67 +'px';
        novil.style.position='fixed';
    }
    if(scrollY>=440){
        novil.style.display='none';
    }else{
        novil.style.display='block';
    }
    if(scrollY>=141){
        main.style.background='linear-gradient(#376281,#10001f)';
    }
    else{
        main.style.background='linear-gradient(#200016,#10001f)';
    }
}  


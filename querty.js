var btn = elementList = document.querySelectorAll('button');
var disp =document.querySelector('input');

for(var i=0; i<btn.length; i++)
{
	btn[i].onclick = function(event)
  { 
 console.log(event.detail);
  console.log(event.target.getAttribute("data-value"));
 {
  case 1:
    if(event.detail=="1")
      console.log("click 1");
     else if (event.detail==2)
       console.log("click 2");
     else if(event.detail==3)
       console.log('click 3');
   
  
    
  }
  	
  }
}
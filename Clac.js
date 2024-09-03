document.addEventListener("DOMContentLoaded",function(){
    let string="";
    let sum=0;
    let buttons=document.querySelectorAll('.button');
    Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            try{
                if(e.target.innerHTML== "="){
                    string=eval(string);
                    document.querySelector('input').value=string;
                }
                else if(e.target.innerHTML== "AC"){
                    string="";
                    document.querySelector('input').value=string;
                }
                else if(e.target.innerHTML=="mc+"){
                    sum=eval(sum+string);
                    document.querySelector('input').value=sum;
                }
                else if(e.target.innerHTML=="mc-"){
                    sum=eval(sum-string);
                    document.querySelector('input').value=sum;
                }
                else if(e.target.innerHTML=="mr"){
                    document.querySelector('input').value=sum;
                }
                else if(e.target.innerHTML=="mc"){
                    sum=0;
                    document.querySelector('input').value=sum;
                }
                else{
                    string=string+e.target.innerHTML;
                    document.querySelector('input').value=string;
                } 
            }
            catch(e){
                string=e;
                document.querySelector('input').value=string;
            }
        })
    })
})
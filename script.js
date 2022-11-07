let s = ""
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
buttons = document.getElementsByClassName('btn');
let inpt = document.getElementById('inp');
Array.from(buttons).forEach((btn)=>{

  btn.addEventListener('click',(e)=>{
  console.log(e.target.innerHTML)  // s += e.target.value ;
    if(e.target.innerHTML=='='){
      try {
        // if(e.target.innerHTML.includes('log2'))
        // console.log(e.target.innerHTML.substring(4))
        // s = getBaseLog(2,e.target.innerHTML.substring(4))
      // else
        s  = eval(s);
      } catch (error) {
        // inpt.value = 'ERROR!'
        s = 'ERROR!'
      }
      // console.log)
      inpt.value = s;
    }
    else if(e.target.innerHTML=='C'){
      s = "";
      
    }
    else if(e.target.innerHTML==='X'){
      inpt.value += 'X'
      s+='*';

    }
    
    else{
      s+=e.target.innerHTML;

    }
    inpt.value = s;

  });




})


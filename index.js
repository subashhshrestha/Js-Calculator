let num='';
let flag=true;
function onExpand(){
  if(flag){
    flag=!flag;
  let exp=document.getElementById("expand");
  let change=document.getElementById("change");
  let height=document.querySelector('.cal-body');
  let height1=document.querySelector('.cal');
  // height.style.height='505px';
  height1.style.height='640px';
  exp.style.visibility="visible";
  change.innerText="Hide";
  
  }
  else{
    flag=!flag;
    let exp=document.getElementById("expand");
    let change=document.getElementById("change");
    let height=document.querySelector('.cal-body');
    let height1=document.querySelector('.cal');
    height.style.height='360px';
    height1.style.height='480px';
    exp.style.visibility="hidden";
    change.innerText="Expand";
  }
}
function openB(){
    let res=document.getElementById('res')
    num=num+"(";
    res.innerText=num;
  }
  function one(){
    let res=document.getElementById('res')
    num=num+"1";
    res.innerText=num;
  }
  function two(){
    let res=document.getElementById('res')
    num=num+"2";
    res.innerText=num;
  }
  function three(){
    let res=document.getElementById('res')
    num=num+"3";
    res.innerText=num;
  }
  function four(){
    let res=document.getElementById('res')
    num=num+"4";
    res.innerText=num;
  }
  function five(){
    let res=document.getElementById('res')
    num=num+"5";
    res.innerText=num;
  }
  function six(){
    let res=document.getElementById('res')
    num=num+"6";
    res.innerText=num;
  }
  function seven(){
    let res=document.getElementById('res')
    num=num+"7";
    res.innerText=num;
  }
  function eight(){
    let res=document.getElementById('res')
    num=num+"8";
    res.innerText=num;
  }
  function nine(){
    let res=document.getElementById('res')
    num=num+"9";
    res.innerText=num;
  }
  function zero(){
    let res=document.getElementById('res')
    num=num+"0";
    res.innerText=num;
  }
  function closeB(){
    let res=document.getElementById('res')
    num=num+")";
    res.innerText=num;
  }
  function backs(){
    let res=document.getElementById('res')
    num=num.substring(0,num.length-1)
    res.innerText=num;
  }
  function clears(){
    let res=document.getElementById('res')
    num=""
    res.innerText=num;
  }
  function sum(){
    let res=document.getElementById('res')
    num=num+"+";
    res.innerText=num;
  }
  function minus(){
    let res=document.getElementById('res')
    num=num+"-";
    res.innerText=num;
  }
  function divide(){
    let res=document.getElementById('res')
    num=num+"/";
    res.innerText=num;
  }
  function multiply(){
    let res=document.getElementById('res')
    num=num+"*";
    res.innerText=num;
  }
  function dot(){
    let res=document.getElementById('res')
    num=num+".";
    res.innerText=num;
  }
  function sin(){
    let res=document.getElementById('res');
    // num=num+'sin';
    num=Math.sin(Math.PI*num/180);
    num=num.toFixed(5);
    res.innerText=num;
    num='';
  }
  function cos(){
    let res=document.getElementById('res');
    // num=num+'sin';
    num=Math.cos(Math.PI*num/180);
    num=num.toFixed(5);
    res.innerText=num;
    num='';
  }
  function tan(){
    let res=document.getElementById('res');
    // num=num+'sin';
    num=Math.tan(Math.PI*num/180);
    num=num.toFixed(5);
    res.innerText=num;
    num='';
  }
  function cosec(){
    let res=document.getElementById('res');
    // num=num+'sin';
    num=1/(Math.sin(Math.PI*num/180));
    num=num.toFixed(5);
    res.innerText=num;
    num='';
  }
  function sec(){
    let res=document.getElementById('res');
    // num=num+'sin';
    num=1/(Math.cos(Math.PI*num/180));
    num=num.toFixed(5);
    res.innerText=num;
    num='';
  }
  function cot(){
    let res=document.getElementById('res');
    // num=num+'sin';
    num=1/(Math.tan(Math.PI*num/180));
    num=num.toFixed(5);
    res.innerText=num;
    num='';
  }
  function power(){
    let res=document.getElementById('res');
    num=Math.pow(Number(num),2);
    res.innerText=num;

  }
  function mod(){
    let res=document.getElementById('res')
    num=num+"%";
    res.innerText=num;
  }
  function equal(){
    let res=document.getElementById('res')
    try{
    num=eval(num);

    }catch(e){
        alert("Invalid Syntax!!!!")
        // num='';
    }
    // console.log(num);
    res.innerText=num;
    num='';
  }


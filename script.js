let num =0;
let num1 =0;
let opt;

const buttons = document.querySelectorAll('button');
const butarr = Array.from(buttons);

butarr.forEach(element => {
    element.addEventListener('click' ,(event)=>{ calculator(element)});
});

const res = document.querySelector('#screen2');
const prob = document.querySelector('#screen1');

function calculator (numOrOp) {
    if(numOrOp.getAttribute('id')==='digit'){
      num+=numOrOp.textContent;
      res.textContent=Number(num);
    }
    if(numOrOp.getAttribute('id')==='operator'){
    if(num!=0)num1=Number(num);
    prob.textContent=num1;
    res.textContent='';
      opt=numOrOp.textContent;
      res.textContent=numOrOp.textContent;
      num='';
    }
    if(numOrOp.getAttribute('class')==='equal'){
        
        switch(opt){
          case '+' : num1=num1+Number(num);
                     prob.textContent=num1;
                     res.textContent='Ans';
                     break;
          case '-' : num1=num1-Number(num);
                     prob.textContent=num1;
                     res.textContent='Ans';
                     break;
          case '*' : num1=num1*Number(num);
                     prob.textContent=num1;
                     res.textContent='Ans';
                     break;
          case '/' : num1=num1/Number(num);
                     prob.textContent=num1;
                     res.textContent='Ans';
                     break;
        }
        num='';
        
    }
    if (numOrOp.getAttribute('id')==='clear'){
      num1=0;
      num='';
      res.textContent='0';
      prob.textContent='Start';
    }
}

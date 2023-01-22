// let counter = document.querySelector('#counter');
// let btns = document.querySelectorAll('.btn');
//  let count = 0;
// btns.forEach((btn) => {
//    btn.addEventListener('click',(e) =>{
//       const styles = e.currentTarget.classList
//       if(styles.contains('increase')){
//          count ++;
//       }else if(styles.contains('decrease')){
//          count --;
//       }

      
//       else{
//          count = 0;
//       }
//       counter.textContent = count;
      
//    })
// })
var peopleCounter =0;

var count = document.getElementById("counter").innerText;

   

function getPeople(counter) {
    if (counter == "add") {
        peopleCounter++;
        document.getElementById("counter").innerHTML = peopleCounter;
    } else if (counter == "subtract" && peopleCounter != 0) {
        peopleCounter--;
        document.getElementById("counter").innerHTML = peopleCounter;
    }
}


function fun1(){
    
    const mark1 = document.getElementById("num").value;

    const percentage = (mark1 * 5)/100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
function fun2(){
    const mark2 = document.getElementById("num").value;
    const percentage = (mark2 * 10 )/100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
function fun3(){
    const mark3 = document.getElementById("num").value;
    const percentage = (mark3 * 15 )/100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
function fun4(){
    const mark4 = document.getElementById("num").value;
    const percentage = (mark4 * 25 )/100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
function fun5(){
    const mark5 = document.getElementById("num").value;
    const percentage = (mark5 * 50 )/100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.amount and tip show function
function fun6(){
    const mark6 = document.getElementById("num").value;
    const percentage = (mark6 * 75 )/100;
    document.getElementById("percentage").innerHTML = percentage;
    // alert(percentage);
}
  const gnrt = document.getElementById("billGenerate");

  function funG(){
  const mark7 = document.getElementById("num").value;
  document.getElementById("mark7").innerHTML = mark7;

  }
  var gnrt2 = document.getElementById("billGenerate");
//   var count = document.getElementById("counter").innerText;

  function funTip(){
    console.log(count)

    var percentage = document.getElementById("percentage").innerHTML;
    document.getElementById("count").innerHTML = percentage/peopleCounter;
  }
  var gnrt3 = document.getElementById("billGenerate");
  function funAmt(){
       var mark8 = document.getElementById("num").value;
       document.getElementById("count2").innerHTML = mark8/peopleCounter;

  }
  var gnrt4 = document.getElementById("billGenerate");
  gnrt4.addEventListener("click",()=>{
    gnrt4.innerHTML ="Reset"
  })
//   var gnrt5 = document.getElementById("reset");
//   gnrt5.addEventListener("click",()=>{
//     document.getElementsByClassName("tipShow").innerHTML = "0"
    
//   })
 


    function funTotal(){
        funG();
        funTip();
        funAmt();
    }







// const btn2 = document.querySelector('.per10');
// btn2.addEventListener('click',() => {
//    const per10 = (500 * 10 )/100;
//    alert(per10);
// })
// const btn3 = document.querySelector('.per15');
// btn3.addEventListener('click',() => {
//    const per15 = (500 * 15 )/100;
//    alert(per15);})
// const btn4 = document.querySelector('.per25');
// btn4.addEventListener('click',() => {
//    const per25 = (500 * 25 )/100;
//    alert(per25);})
// const btn5 = document.querySelector('.per50');
// btn5.addEventListener('click',() => {
//    const per50 = (500 * 50 )/100;
//    alert(per50);})
// const btn6 = document.querySelector('.per75');
// btn6.addEventListener('click',() => {
//    const per75 = (500 * 75 )/100;
//    alert(per75);})


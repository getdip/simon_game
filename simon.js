//
// var t = document.querySelectorAll(".btn");
// for (var i = 0; i<t.length; i++){
//   t[i].addEventListener("click", function(){
//     var temp = this.id;
//
//     switch(temp){
//       case "red":
//       // alert("r");
//       var audio_r = new Audio('sounds/red.mp3');
//       audio_r.play();
//
//           break;
//       case "green":
//       // alert("g");
//       var audio_g = new Audio('sounds/green.mp3');
//       audio_g.play();
//       break;
//
//       case "blue":
//       // alert("b");
//       var audio_b = new Audio('sounds/blue.mp3');
//       audio_b.play();
//       break;
//
//       case "yellow":
//       // alert("y");
//       var audio_y = new Audio('sounds/yellow.mp3');
//       audio_y.play();
//       break;
//
//
//
//     }
//   })
// }
// arr=[];
// for (var i = 0 ; i<3;i++ ){
//   var r = Math.floor(Math.random()*4)+1;
//   arr.push(r);
//   switch (r) {
//     case 1:
//     var audio_r = new Audio('sounds/red.mp3');
//     audio_r.play();
//     break;
//     case 2:
//     var audio_g = new Audio('sounds/green.mp3');
//     audio_g.play();
//     break;
//     case 3:
//     var audio_b = new Audio('sounds/blue.mp3');
//     audio_b.play();
//     break;
//     case 4:
//     var audio_y = new Audio('sounds/yellow.mp3');
//     audio_y.play();
//     break;
// document.addEventListener("keypress",function(){
//   arr=[];
//   for (var i = 0 ; i<3;i++ ){
//     var r = Math.floor(Math.random()*4)+1;
//     arr.push(r);
//
//     switch (temp) {
//       case 1:
//       var audio_r = new Audio('sounds/red.mp3');
//       audio_r.play();
//       break;
//       case 2:
//       var audio_g = new Audio('sounds/green.mp3');
//       audio_g.play();
//       break;
//       case 3:
//       var audio_b = new Audio('sounds/blue.mp3');
//       audio_b.play();
//       break;
//       case 4:
//       var audio_y = new Audio('sounds/yellow.mp3');
//       audio_y.play();
//       break;
//     }
// });
function showAnimation(k){
  document.querySelector('#'+k).classList.add("pressed");
  setTimeout(function(){document.querySelector('#'+k).classList.remove("pressed");},100);
}
function playList(k){
  switch (k) {
    case "red":
    var audio_r = new Audio('sounds/red.mp3');
    audio_r.play();
    showAnimation(k);

      break;
    case "green":
    var audio_g = new Audio('sounds/green.mp3');
    audio_g.play();
    showAnimation(k);

      break;
    case "blue":
    var audio_b = new Audio('sounds/blue.mp3');
    audio_b.play();
    showAnimation(k);

      break;
    case "yellow":
    var audio_y = new Audio('sounds/yellow.mp3');
    audio_y.play();
    showAnimation(k);

      break;
  }

}
function playSounds(callback){
var arr=[];
  document.addEventListener('keypress', function() {
     // your code here
  var cnt=0;


  for (var i = 1; i<5;i++ ){
    var r = Math.floor(Math.random()*4)+1;
    if (r===1){
        arr.push("red");
    }
    else if (r===2) {
      arr.push("green");
    }
    else if (r===3){
      arr.push("blue");
    }
    else if(r===4){
      arr.push("yellow");
    }
  }


     for (var i = 0; i<arr.length;i++ ){
       cnt=cnt+1;
       doSetTimeout(arr[i],cnt);

     }



  });


  function doSetTimeout(i,cnt){

     setTimeout(() =>{playList(i)},500*cnt);
   }
callback(arr);
}


//user_input


function userInput(a){
cnt=0;
var t =  document.querySelectorAll('.btn');
for (var j=0; j<t.length;j++){
  t[j].addEventListener("click",function(){
console.log(cnt);
    var f=this.id;

     if (a[cnt]===f){
       if (cnt+1===a.length){
         var audio_correct = new Audio('sounds/'+f+'.mp3');
         audio_correct.play();
         setTimeout(function(){alert("Congrats\rMove on to the next level")},400);
         setTimeout(function(){location.reload()},500)
         }
       else{
         var audio_correct = new Audio('sounds/'+f+'.mp3');
         audio_correct.play();
         cnt++;
       }

}



    else{
      var audio_wrong = new Audio('sounds/wrong.mp3');
      audio_wrong.play();
      document.querySelector("h1").textContent="Game Over";
      setTimeout(function(){location.reload()},1500);
    }

  }

)
}


}
 playSounds(userInput);

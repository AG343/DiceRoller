var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';
var num;
function changeSide() {
        num=Math.floor(Math.random()*6)+1
    console.log(num)
    if(num==1){
     num='top'
    }
    else if(num==2){
        num='front'
       }
       else if(num==3){
        num='right'
       }
       else if(num==4){
        num='left'
       }
       else if(num==5){
        num='back'
       }
       else if(num==6){
        num='bottom'
       }
  var checkedRadio = num;
  console.log(checkedRadio)
  var showClass = 'show-' + num;
  console.log(showClass)
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
        
}




function roll(){
   changeSide()
}
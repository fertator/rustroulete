let nums1 = [2,30,59,99,129,149,178,208,223,250,279,309,335];
let nums2 = [48,109,165,299,349];
let nums3 = [20,139,243,265];
let nums5 = [198, 319];
let nums4 = [79];
let nums = [2,30,59,99,129,149,178,208,223,250,279,309,335,48,109,165,299,349,20,139,243,265,79]

function Random(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min)) + min; 
}



let balance = 1000;
let bet = 0;
let win = 0;
let whatNum = 0;
let totalBet = 0;
let whatBet = 0;
$('.bet').text(bet);
$('.totlbet').text(totalBet);

updateBalance()

function rotate(bt) {
	var audio = new Audio('spin.mp3');

	
audio.play();
	updateBalance()
	let rand = Random(0, nums.length - 1);
	let fulrand = nums[rand];
	$(".circle").css("transform", "rotate(" +fulrand  +"deg)");

	if(nums4[0] == nums[rand]){
		whatNum = 20;
	}

	for(let i = 0; i < nums1.length; i++){
		if(nums1[i] == nums[rand]){
			whatNum = 1;
			break;
		}
	}

	for(let i = 0; i < nums2.length; i++){
		if(nums2[i] == nums[rand]){
			whatNum = 3;
			break;
		}
	}

	for(let i = 0; i < nums3.length; i++){
		if(nums3[i] == nums[rand]){
			whatNum = 5;
			break;
		}
	}

	for(let i = 0; i < nums5.length; i++){
		if(nums5[i] == nums[rand]){
			whatNum = 10;
			break;
		}
	}

	if(whatNum == whatBet){
		console.log("!!!" + bt)
		console.log(balance + "!!!!..");
		if(whatBet == 1){
			win = bt * 2
			
		}

		if(whatBet == 3){
			win = bt * 3
		}

		if(whatBet == 5){
			win = bt * 5
		}

		if(whatBet == 10){
			win = bt * 10
		}

		if(whatBet == 20){
			win = bt * 20
		}
		balance +=win;
		console.log("///" + win)
		totalBet = 0;
		$('.totlbet').text(totalBet);
		updateBalance();
		console.log(bt + "------");
		console.log(whatBet + "/////");
		console.log(balance + "!!!!");
	}else{
		bt = 0;
	}


console.log(whatNum);
}

function updateBalance(){
	$(".bal").text(balance + "₪")
}

$('#plus').on('click',function(){
	if(bet<balance){
		bet++;
    $('.bet').text(bet);
    var audio2 = new Audio('clickaddmin.wav');
	audio2.play();
	}
	

 });

$('#minus').on('click',function(){
	if(bet != 0){
	bet--;
    $('.bet').text(bet);
    var audio2 = new Audio('clickaddmin.wav');
	audio2.play();
	}
	
    
 });

$('#strel').on('click',function(){
	totalBet = bet;
	bet = 0;
    $('.bet').text(bet);
    $('.totlbet').text(totalBet);
	var audio1 = new Audio('clickpros.wav');
	audio1.play();
    
 });


$('#rotate').on('click',function(){
    
    if(totalBet <= balance){
    	balance -= totalBet;
    	rotate(totalBet);
    }
	
	$('.bal').text(balance + "₪");
    console.log(totalBet);
 });

$('#a1').on('click',function(){
    whatBet = 1;
    $(".canvasbloc").css("display", "none");
    $("#a1").css("box-shadow", "-5px -5px 30px 5px red, 5px 5px 30px 5px blue");
    $("#a2").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 	$("#a3").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 	$("#a4").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 	$("#a5").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 });

$('#a2').on('click',function(){
    whatBet = 3;
    $(".canvasbloc").css("display", "none");

    $("#a1").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    $("#a2").css("box-shadow", "-5px -5px 30px 5px red, 5px 5px 30px 5px blue");
 		$("#a3").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a4").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a5").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 });

$('#a3').on('click',function(){
    whatBet = 5;
    $(".canvasbloc").css("display", "none");

    $("#a1").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    $("#a2").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a3").css("box-shadow", "-5px -5px 30px 5px red, 5px 5px 30px 5px blue");
 		$("#a4").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a5").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");

 });

$('#a4').on('click',function(){
    whatBet = 10;
    $(".canvasbloc").css("display", "none");

     $("#a1").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    $("#a2").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a3").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a4").css("box-shadow", "-5px -5px 30px 5px red, 5px 5px 30px 5px blue");
 		$("#a5").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");

 });

$('#a5').on('click',function(){
    whatBet = 20;
    $(".canvasbloc").css("display", "none");

        $("#a1").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    	$("#a2").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a3").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a4").css("box-shadow", "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
 		$("#a5").css("box-shadow", "-5px -5px 30px 5px red, 5px 5px 30px 5px blue");
 });






//1 2 30 59 99 129 149 178 208 223 250 279 309 335 
//3 48 109 165 299 349 
//5 20 139 243 265 
//10 198 319 
//20 79 

//между 5 справа и 3 слева
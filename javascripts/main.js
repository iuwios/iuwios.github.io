
"use strict";
/*var crimson;
$(window).ready(function(){
	$('#crimson-book').turn({
		page:2,
		acceleration: 'true',
		elevation: '50'
	});/*
	$('#crimson-book').bind('start', function(e, data, c) {
        if(data.next == 2) {
            e.preventDefault();
        }
    });
    $('.p2').unbind('pressed');
    $('.p2').unbind('pressed');


});*/

/*
$(window).bind('keydown', function(e){
	if(e.keyCode == 37){
		$('crimson-book').turn('page', 4);
	}
	else if(e.keyCOde == 39){
		$('crimson-book').turn('page', 4);
	}
});*/



// on window resize, update the plugin size
/*window.addEventListener('resize', function (e) {
	//alert($('crimson-book').width);
	$('#crimson-book').turn({
		page:2,
		acceleration: 'true',
		elevation: '50'
	});

});*/



/* temporary window scroll disable */
function disableScroll() 
{ 
    document.body.classList.add("stop-scrolling"); 
} 
  
function enableScroll() { 
    document.body.classList.remove("stop-scrolling"); 
}


/* transitions for left and right arrow Keys */
var num = 0;
var max = document.querySelectorAll("[id='pg']").length-2;
var elms = document.querySelectorAll("[id='pg']");



/*
function intro(){


	document.getElementById("intro").style.color='#FEC0F0';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='white';
	elms[num].style.display = 'none';
	elms[num+1].style.display = 'none';
	elms[0].style.display = 'block';
	elms[1].style.display = 'block';
	num=0;
}

function design(){
	document.getElementById("design").style.color='#FEC0F0';
	document.getElementById("intro").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='white';
	elms[num].style.display = 'none';
	elms[num+1].style.display = 'none';
	elms[4].style.display = 'block';
	elms[5].style.display = 'block';

	num=4;

}

function example(){
	document.getElementById("example").style.color='#FEC0F0';
	document.getElementById("design").style.color='white';
	document.getElementById("intro").style.color='white';
	document.getElementById("recognition").style.color='white';
	elms[num].style.display = 'none';
	elms[num+1].style.display = 'none';
	elms[18].style.display = 'block';
	elms[19].style.display = 'block';

	num=18;
}

function recognition(){
	document.getElementById("recognition").style.color='#FEC0F0';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("intro").style.color='white';
	elms[num].style.display = 'none';
	elms[num+1].style.display = 'none';
	elms[24].style.display = 'block';
	elms[25].style.display = 'block';

	num=24;
}
*/
/*
function right(){
	//var elms = document.querySelectorAll("[id='pg']");
	if(num==max){
		return;
	}
	else{
		elms[num].style.display = 'none';
		elms[num+1].style.display = 'none';
		elms[num+2].style.display = 'block';
		elms[num+3].style.display = 'block';
		num=num+2;
	}

    if(num==6){
		document.getElementById("the-text").focus();
	}
	else if(num==10){
		document.getElementById("drink-text").focus();
	}
	else if(num==12){
		document.getElementById("eat-me").focus();
	}
	else if(num==14){
		document.getElementById("text-nocake").focus();
	}

	switch(num){
		case 0:
			document.getElementById("intro").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 4:
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("intro").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 18:
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("intro").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 24:
			document.getElementById("recognition").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("intro").style.color='white';
			break;
		default:
			break;
	}

}

function left(){
	//var elms = document.querySelectorAll("[id='pg']");
	if(num==0){
		return;
	}
	else{
		elms[num].style.display = 'none';
		elms[num+1].style.display = 'none';
		elms[num-1].style.display = 'block';
		elms[num-2].style.display = 'block';
		num = num - 2;
	}

	if(num==6){
		document.getElementById("the-text").focus();
	}
	else if(num==10){
		document.getElementById("drink-text").focus();
	}
	else if(num==12){
		document.getElementById("eat-me").focus();
	}
	else if(num==14){
		document.getElementById("text-nocake").focus();
	}

	switch(num){
		case 2:
			document.getElementById("intro").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 16:
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("intro").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 22:
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("intro").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		default:
			break;
	}

}*/
if(window.innerWidth > 1000){
	document.getElementById("crimson-book").addEventListener("mousewheel", function(event){
		//disableScroll();
		event.preventDefault();

		clearTimeout($.data(this, 'timer'));
	          $.data(this, 'timer', setTimeout(function() {
	            if(delta < 0){
	            //Scroll descend
	            mouseWheelBullet(1);
	            if(position > positionBasMax){
	                nouvellePosition = position-100;
	                tweenGlobale(nouvellePosition+'%');
	            }
	        }else{
	            //Scroll Monte
		            if(position < 0){
	                mouseWheelBullet(-1);
	                nouvellePosition = position-(-100);
	                tweenGlobale(nouvellePosition+'%');
	            }
	        }
	          }, 1000));

		if(event.deltaY>0){
			$('#crimson-book').turn('next');
			checkPageRight();

		}

		else if(event.deltaY<0){
			$('#crimson-book').turn('previous');
			checkPageLeft();

		}


	});				
}

/* Intro Page 2 Left Interactions */


function wght()
{

	document.getElementById("smile").className = 'weight_animation';
	document.getElementById("wght").style.background = 'black';
	document.getElementById("wght").style.color = 'white';

	document.getElementById("slnt").style.background = 'white';
	document.getElementById("slnt").style.color = 'black';
	document.getElementById("wdth").style.background = 'white';
	document.getElementById("wdth").style.color = 'black';
	document.getElementById("ital").style.background = 'white';
	document.getElementById("ital").style.color = 'black';
	document.getElementById("opsz").style.background = 'white';
	document.getElementById("opsz").style.color = 'black';
}
function wdth()
{

	document.getElementById("smile").className = 'width_animation';
	document.getElementById("wdth").style.background = 'black';
	document.getElementById("wdth").style.color = 'white';

	document.getElementById("slnt").style.background = 'white';
	document.getElementById("slnt").style.color = 'black';
	document.getElementById("wght").style.background = 'white';
	document.getElementById("wght").style.color = 'black';
	document.getElementById("ital").style.background = 'white';
	document.getElementById("ital").style.color = 'black';
	document.getElementById("opsz").style.background = 'white';
	document.getElementById("opsz").style.color = 'black';
}

function slnt()
{

	document.getElementById("smile").className = 'slant_animation';
	document.getElementById("slnt").style.background = 'black';
	document.getElementById("slnt").style.color = 'white';

	document.getElementById("wght").style.background = 'white';
	document.getElementById("wght").style.color = 'black';
	document.getElementById("wdth").style.background = 'white';
	document.getElementById("wdth").style.color = 'black';
	document.getElementById("ital").style.background = 'white';
	document.getElementById("ital").style.color = 'black';
	document.getElementById("opsz").style.background = 'white';
	document.getElementById("opsz").style.color = 'black';
}
function ital()
{
	document.getElementById("smile").className = 'italic_animation';
	document.getElementById("ital").style.background = 'black';
	document.getElementById("ital").style.color = 'white';

	document.getElementById("slnt").style.background = 'white';
	document.getElementById("slnt").style.color = 'black';
	document.getElementById("wdth").style.background = 'white';
	document.getElementById("wdth").style.color = 'black';
	document.getElementById("wght").style.background = 'white';
	document.getElementById("wght").style.color = 'black';
	document.getElementById("opsz").style.background = 'white';
	document.getElementById("opsz").style.color = 'black';
}
function opsz()
{
	document.getElementById("smile").className = 'opticalsize_animation';
	document.getElementById("opsz").style.background = 'black';
	document.getElementById("opsz").style.color = 'white';

	document.getElementById("slnt").style.background = 'white';
	document.getElementById("slnt").style.color = 'black';
	document.getElementById("wdth").style.background = 'white';
	document.getElementById("wdth").style.color = 'black';
	document.getElementById("ital").style.background = 'white';
	document.getElementById("ital").style.color = 'black';
	document.getElementById("wght").style.background = 'white';
	document.getElementById("wght").style.color = 'black';
}

var roboto_count = 0;


document.getElementById("roboto-effect").addEventListener("wheel", function(event){
	//disableScroll();
	event.stopPropagation();
	event.preventDefault();
	if(event.deltaY<0){
		if(roboto_count < 0 ){
			roboto_count = 4;
		}
		else {
			roboto_count = roboto_count - 1;
		}

	}

	else if(event.deltaY>0){
		if(roboto_count > 4 ){
			roboto_count = 0;
		}
		else{
			roboto_count = roboto_count + 1;
		}

	}
		

	switch(roboto_count){
		case 0:
			wght();
			break;
		case 1:
			wdth();
			break;
		case 2:
			slnt();
			break;
		case 3:
			ital();
			break;
		case 4:
			opsz();
			break;
		default:
			break;

	}

		
});
		


/* Intro Page 2 Right Interactions */

var slider = document.getElementById("slider-O");
var output = document.getElementById("txt-OO");

var sliderY = document.getElementById("slider-Y");
var outputY = document.getElementById("txt-YY");

var slider5 = document.getElementById("slider-FVFV");
var output5 = document.getElementById("txt-FVFV");

var slidert = document.getElementById("slider-t");
var outputt = document.getElementById("txt-tt");

var slidere = document.getElementById("slider-e");
var outpute = document.getElementById("txt-ee");

var sliderr = document.getElementById("slider-r");
var outputr = document.getElementById("txt-rr");

var sliderval;

function sliderMouseControl(sld,name,out,ch,event){
	sliderval = parseInt(sld.value);
	var d = document.getElementById(name);

    event.preventDefault();
    if(event.deltaY>0 && sliderval - 5 >=200){
    	//alert(event.deltaY);
    	sliderval = sliderval-10;
    }
    else if(event.deltaY < 0 && sliderval + 5<=900){
    	//alert(event.deltaY);
    	sliderval = sliderval+10;
    }
	out.innerHTML = sliderval;
    d.style.setProperty('--text-weight', sliderval);
    sld.value = sliderval;	

}

document.getElementById("t").addEventListener("mousewheel", function(event) {
	event.stopPropagation();
	sliderMouseControl(slidert,"tt",outputt,"t", event);

		
});


document.getElementById("O").addEventListener("mousewheel", function(event) {
	event.stopPropagation();
	sliderMouseControl(slider,"OO",output,"O", event);
		
});


document.getElementById("Y").addEventListener("mousewheel", function(event) {
	event.stopPropagation();
	sliderMouseControl(sliderY,"YY",outputY,"Y", event);
		
});



document.getElementById("FV").addEventListener("mousewheel", function(event) {
	event.stopPropagation();
	sliderMouseControl(slider5,"FVFV",output5,"FV",event);
		
});



document.getElementById("e").addEventListener("wheel", function(event) {
	event.stopPropagation();
	sliderMouseControl(slidere,"ee",outpute,"e",event);
		
});


document.getElementById("r").addEventListener("wheel", function(event) {
	event.stopPropagation();
	sliderMouseControl(sliderr,"rr",outputr,"r",event);
		
});




slider.oninput = function() {
		output.innerHTML = slider.value;
		var d = document.getElementById("OO");
		d.style.setProperty('--text-weight', this.value);
		sliderval = this.value;
}

sliderY.oninput = function() {
		outputY.innerHTML = sliderY.value;
		a = "wght" + this.value;
		var d = document.getElementById("YY");
		d.style.setProperty('--text-weight', this.value);
		sliderval = this.value;
}

slider5.oninput = function() {
		output5.innerHTML = slider5.value;
		a = "wght" + this.value;
		var d = document.getElementById("FVFV");
		d.style.setProperty('--text-weight', this.value);
		sliderval = this.value;
}

slidert.oninput = function() {
		outputt.innerHTML = slidert.value;
		a = "wght" + this.value;
		var d = document.getElementById("tt");
		d.style.setProperty('--text-weight', this.value);
		sliderval = this.value;
}

slidere.oninput = function() {
		outpute.innerHTML = slidere.value;
		a = "wght" + this.value;
		var d = document.getElementById("ee");
		d.style.setProperty('--text-weight', this.value);
		sliderval = this.value;
}

sliderr.oninput = function() {
		outputr.innerHTML = sliderr.value;
		a = "wght" + this.value;
		var d = document.getElementById("rr");
		d.style.setProperty('--text-weight', this.value);
		sliderval = this.value;
}


function xs()
{
	document.getElementById("the-text").style.setProperty('--text-size', 60);
	document.getElementById("xs").style.background='black';
	document.getElementById("xs").style.color='#FEC0F0';

	document.getElementById("m").style.background='white';
	document.getElementById("m").style.color='black';
	document.getElementById("l").style.background='white';
	document.getElementById("l").style.color='black';
	document.getElementById("xl").style.background='white';
	document.getElementById("xl").style.color='black';
	document.getElementById("s").style.background='white';
	document.getElementById("s").style.color='black';
	
}

function s()
{
	document.getElementById("the-text").style.setProperty('--text-size', 120);
	document.getElementById("s").style.background='black';
	document.getElementById("s").style.color='#FEC0F0';

	document.getElementById("m").style.background='white';
	document.getElementById("m").style.color='black';
	document.getElementById("l").style.background='white';
	document.getElementById("l").style.color='black';
	document.getElementById("xl").style.background='white';
	document.getElementById("xl").style.color='black';
	document.getElementById("xs").style.background='white';
	document.getElementById("xs").style.color='black';
}
function m()
{
	document.getElementById("the-text").style.setProperty('--text-size', 180);
	document.getElementById("m").style.background='black';
	document.getElementById("m").style.color='#FEC0F0';

	document.getElementById("l").style.background='white';
	document.getElementById("l").style.color='black';
	document.getElementById("xs").style.background='white';
	document.getElementById("xs").style.color='black';
	document.getElementById("xl").style.background='white';
	document.getElementById("xl").style.color='black';
	document.getElementById("s").style.background='white';
	document.getElementById("s").style.color='black';
	
}
function l()
{
	document.getElementById("the-text").style.setProperty('--text-size', 240);
	document.getElementById("l").style.background='black';
	document.getElementById("l").style.color='#FEC0F0';

	document.getElementById("m").style.background='white';
	document.getElementById("m").style.color='black';
	document.getElementById("xs").style.background='white';
	document.getElementById("xs").style.color='black';
	document.getElementById("xl").style.background='white';
	document.getElementById("xl").style.color='black';
	document.getElementById("s").style.background='white';
	document.getElementById("s").style.color='black';
}
function xl()
{
	document.getElementById("the-text").style.setProperty('--text-size', 300);
	document.getElementById("xl").style.background='black';
	document.getElementById("xl").style.color='#FEC0F0';

	document.getElementById("m").style.background='white';
	document.getElementById("m").style.color='black';
	document.getElementById("xs").style.background='white';
	document.getElementById("xs").style.color='black';
	document.getElementById("l").style.background='white';
	document.getElementById("l").style.color='black';
	document.getElementById("s").style.background='white';
	document.getElementById("s").style.color='black';
}


var slider_pg3 = document.getElementById("slider-pg3");
var cur_color = "#EB0000";
var cur_element = "d4_l";
var black_white = "#FFFFFF";
var rom_ital='italic';
var night_mode = false;


slider_pg3.oninput = function() {
		var d = document.getElementById("many-lines");
		d.style.setProperty('--text-weight-small', this.value);
}


var elems = document.getElementById("triangle-containerz").getElementsByTagName("img");
function color_red()
{
	if(night_mode==true){
		change_night();
	}
	document.getElementById("drink-text").style.color='red';
	cur_color = '#EB0000';
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle1') {
            elems[i].style.visibility = 'visible'; 
            document.getElementById("drink-text").style.textShadow = "none";   
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
	
	document.getElementById("triangle1").style.visibility='visible';
}

function color_yellow()
{
	if(night_mode==true){
		change_night();
	}
	document.getElementById("drink-text").style.color='#FFEB00';
	cur_color='#FFEB00';
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle2') {
            elems[i].style.visibility = 'visible';   
            document.getElementById("drink-text").style.textShadow = "none"; 
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }

}

function color_blue()
{
	if(night_mode==true){
		change_night();
	}
	cur_color='#70CCF7';
	document.getElementById("drink-text").style.color='#70CCF7';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle3') {
            elems[i].style.visibility = 'visible';  
            document.getElementById("drink-text").style.textShadow = "none";  
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
}


function color_brown()
{
	if(night_mode==true){
		change_night();
	}
	cur_color='#D7B089';
	document.getElementById("drink-text").style.color='#D7B089';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle4') {
            elems[i].style.visibility = 'visible';   
            document.getElementById("drink-text").style.textShadow = "none"; 
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
}

function color_pink()
{
	if(night_mode==true){
		change_night();
	}
	cur_color='#FFC0EF';
	document.getElementById("drink-text").style.color='#FFC0EF';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle5') {
            elems[i].style.visibility = 'visible';   
            document.getElementById("drink-text").style.textShadow = "none"; 
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
}

function color_black()
{
	if(night_mode==true){
		change_night();
	}
	cur_color='#000000';
	document.getElementById("drink-text").style.color='black';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle6') {
            elems[i].style.visibility = 'visible';  
            document.getElementById("drink-text").style.textShadow = "none";  
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
}

function color_green()
{
	if(night_mode==true){
		change_night();
	}
	cur_color='#3EB449';
	document.getElementById("drink-text").style.color='#3EB449';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#FFFFFF";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById(rom_ital).style.backgroundColor=cur_color;
	document.getElementById(rom_ital).style.color=black_white;
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle7') {
            elems[i].style.visibility = 'visible';
            document.getElementById("drink-text").style.textShadow = "none";
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
}

function change_night()
{
	elms[10].style.backgroundColor = 'white';
    elms[11].style.backgroundColor = 'white';
    document.getElementById('circle_yellow').style.border='1px solid black';
    document.getElementById('circle_blue').style.border='1px solid black';
    document.getElementById('circle_brown').style.border='1px solid black';
    document.getElementById('circle_pink').style.border='1px solid black';
    document.getElementById('circle_black').style.border='1px solid black';
    document.getElementById('circle_green').style.border='1px solid black';
    document.getElementById('circle_white').style.border='1px solid black';
    document.getElementById('drink-text').style.backgroundColor='#FFFFFF';
    document.getElementById('weight-text').style.color='black';
    document.getElementById('size-text').style.color='black';
    document.getElementById('d-weighttxt').style.color='black';
    document.getElementById('weight-unlimited').style.color='black';
    document.getElementById('with-unlimited').style.color='black';

    document.getElementById('d4_xs').style.backgroundColor='white';
    document.getElementById('d4_s').style.backgroundColor='white';
    document.getElementById('d4_m').style.backgroundColor='white';
    document.getElementById('d4_l').style.backgroundColor='white';
    document.getElementById('d4_xl').style.backgroundColor='white';
    document.getElementById('d4_xs').style.color='black';
    document.getElementById('d4_s').style.color='black';
    document.getElementById('d4_m').style.color='black';
    document.getElementById('d4_l').style.color='black';
    document.getElementById('d4_xl').style.color='black';

    document.getElementById("italic").style.color='black';
	document.getElementById("italic").style.backgroundColor='#FFFFFF';
	document.getElementById("roman").style.color='black';
	document.getElementById("roman").style.background='white';
    night_mode = false;

}
/*text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;*/
function color_white()
{
	cur_color='#FFFFFF';
	document.getElementById("drink-text").style.color='white';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#000000";
	document.getElementById(cur_element).style.color=black_white;


	if(rom_ital=='roman'){
		document.getElementById("roman").style.color='black';
		document.getElementById("roman").style.backgroundColor='#FFFFFF';
		document.getElementById("italic").style.color='white';
		document.getElementById("italic").style.background='black';
	}
	else{
		document.getElementById("italic").style.color='black';
		document.getElementById("italic").style.backgroundColor='#FFFFFF';
		document.getElementById("roman").style.color='white';
		document.getElementById("roman").style.background='black';
	}

	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle8') {
            elems[i].style.visibility = 'visible';
            //document.getElementById("drink-text").style.textShadow =  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";  
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
    elms[10].style.backgroundColor = 'black';
    elms[11].style.backgroundColor = 'black';
    document.getElementById('circle_yellow').style.border='1px solid white';
    document.getElementById('circle_blue').style.border='1px solid white';
    document.getElementById('circle_brown').style.border='1px solid white';
    document.getElementById('circle_pink').style.border='1px solid white';
    document.getElementById('circle_black').style.border='1px solid white';
    document.getElementById('circle_green').style.border='1px solid white';
    document.getElementById('circle_white').style.border='1px solid white';

    document.getElementById('d4_xs').style.backgroundColor='black';
    document.getElementById('d4_s').style.backgroundColor='black';
    document.getElementById('d4_m').style.backgroundColor='black';
    document.getElementById('d4_l').style.backgroundColor='black';
    document.getElementById('d4_xl').style.backgroundColor='black';
    document.getElementById('d4_xs').style.color='white';
    document.getElementById('d4_s').style.color='white';
    document.getElementById('d4_m').style.color='white';
    document.getElementById('d4_l').style.color='white';
    document.getElementById('d4_xl').style.color='white';

    document.getElementById(cur_element).style.backgroundColor=cur_color;
    document.getElementById(cur_element).style.color='black';

    document.getElementById('drink-text').style.backgroundColor='black';
    document.getElementById('weight-text').style.color='white';
    document.getElementById('size-text').style.color='white';
    document.getElementById('d-weighttxt').style.color='white';
    document.getElementById('weight-unlimited').style.color='white';
    document.getElementById('with-unlimited').style.color='white';
    night_mode = true;


}


function d4click_roman()
{
	rom_ital='roman';
	document.getElementById("drink-text").style.fontStyle='normal';
	if(cur_color=='#FFFFFF'){
		document.getElementById("roman").style.color='black';
		document.getElementById("roman").style.backgroundColor='#FFFFFF';
		document.getElementById("italic").style.color='white';
		document.getElementById("italic").style.background='black';
	}
	else{
		document.getElementById("roman").style.color='white';
		document.getElementById("roman").style.backgroundColor=cur_color;
		document.getElementById("italic").style.color='black';
		document.getElementById("italic").style.background='white';
	}

}

function d4click_italic()
{
	rom_ital='italic';
	document.getElementById("drink-text").style.fontStyle='italic';
	if(cur_color=='#FFFFFF'){
		document.getElementById("italic").style.color='black';
		document.getElementById("italic").style.backgroundColor='#FFFFFF';
		document.getElementById("roman").style.color='white';
		document.getElementById("roman").style.background='black';
		
	}
	else{
		document.getElementById("italic").style.color='white';
		document.getElementById("italic").style.backgroundColor=cur_color;
		document.getElementById("roman").style.color='black';
		document.getElementById("roman").style.background='white';
	}

}

var d4_size_elems = document.getElementById("d4-size-containers").getElementsByTagName("li");

function d4xs()
{
	document.getElementById("drink-text").style.setProperty("--init-line-height", 30);
	document.getElementById("drink-text").style.setProperty("--text-size-L", 30);
	cur_element="d4_xs";

	if(night_mode){
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4xs') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {
	            d4_size_elems[i].style.backgroundColor='black';
	            d4_size_elems[i].style.color='white';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }

		}
	}

	else{
		for (var i = 0; i<d4_size_elems.length; i++) {
		    if (d4_size_elems[i].className == 'd4xs') {
		    	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
		        d4_size_elems[i].style.backgroundColor=cur_color;
		        d4_size_elems[i].style.color=black_white;
		    }
		    else {
		        d4_size_elems[i].style.backgroundColor='white';
		        d4_size_elems[i].style.color='black';
		        d4_size_elems[i].style.setProperty("--init-border-color", "white");
		        d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
		    }
		}

	}

}

function d4s()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 60);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 60);
	cur_element="d4_s";

	if(night_mode){
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4s') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {
	            d4_size_elems[i].style.backgroundColor='black';
	            d4_size_elems[i].style.color='white';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }

		}
	}
	else{
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4s') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {

	            d4_size_elems[i].style.backgroundColor='white';
	            d4_size_elems[i].style.color='black';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }
	    }

	}

	
}

function d4m()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 120);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 108);
	cur_element="d4_m";

	if(night_mode){
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4m') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {
	            d4_size_elems[i].style.backgroundColor='black';
	            d4_size_elems[i].style.color='white';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }

		}
	}

	else{
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4m') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {

	            d4_size_elems[i].style.backgroundColor='white';
	            d4_size_elems[i].style.color='black';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }
	    }

	}
}

function d4l()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 180);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 140);
	cur_element="d4_l";

	if(night_mode){
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4l') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {
	            d4_size_elems[i].style.backgroundColor='black';
	            d4_size_elems[i].style.color='white';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }

		}
	}
	else{
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4l') {
	        	d4_size_elems[i].style.setProperty("--init-border-colorL", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {

	            d4_size_elems[i].style.backgroundColor='white';
	            d4_size_elems[i].style.color='black';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	        }
	    }

	}

}

function d4xl()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 195);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 170);
	cur_element="d4_xl";


	if(night_mode){
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4xl') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {
	            d4_size_elems[i].style.backgroundColor='black';
	            d4_size_elems[i].style.color='white';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }

		}
	}
	else{
		for (var i = 0; i<d4_size_elems.length; i++) {
	        if (d4_size_elems[i].className == 'd4xl') {
	        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
	            d4_size_elems[i].style.backgroundColor=cur_color;
	            d4_size_elems[i].style.color=black_white;
	        }
	        else {

	            d4_size_elems[i].style.backgroundColor='white';
	            d4_size_elems[i].style.color='black';
	            d4_size_elems[i].style.setProperty("--init-border-color", "white");
	            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
	        }
	    }

	}


}

var sliderd4 = document.getElementById("design-slider");
var outputd4 = document.getElementById("d-weighttxt");

sliderd4.oninput = function()
{
	outputd4.innerHTML = sliderd4.value;
	var d = document.getElementById("drink-text");
	d.style.setProperty('--text-weight', this.value);
}


function d5italic()
{
	document.getElementById("d5-italic").style.color = 'white';
	document.getElementById("d5-italic").style.backgroundColor = 'black';
	document.getElementById("d5-regular").style.backgroundColor = 'white';
	document.getElementById("d5-regular").style.color = 'black';
	document.getElementById("Alphabet-Container").style.fontStyle = 'italic';
	document.getElementById("special-character-container").style.fontStyle = 'italic';
	document.getElementById("eat-me").style.fontStyle = 'italic';
}

function d5regular()
{
	document.getElementById("d5-regular").style.color = 'white';
	document.getElementById("d5-regular").style.backgroundColor = 'black';
	document.getElementById("d5-italic").style.backgroundColor = 'white';
	document.getElementById("d5-italic").style.color = 'black';
	document.getElementById("Alphabet-Container").style.fontStyle = 'normal';
	document.getElementById("special-character-container").style.fontStyle = 'normal';
	document.getElementById("eat-me").style.fontStyle = 'normal';
}

function d6italic()
{
	document.getElementById("d6-italic").style.color = 'white';
	document.getElementById("d6-italic").style.backgroundColor = 'black';
	document.getElementById("d6-regular").style.backgroundColor = 'white';
	document.getElementById("d6-regular").style.color = 'black';
	document.getElementById("lowercase-container").style.fontStyle = 'italic';
	document.getElementById("text-nocake").style.fontStyle = 'italic';
}

function d6regular()
{
	document.getElementById("d6-regular").style.color = 'white';
	document.getElementById("d6-regular").style.backgroundColor = 'black';
	document.getElementById("d6-italic").style.backgroundColor = 'white';
	document.getElementById("d6-italic").style.color = 'black';
	document.getElementById("lowercase-container").style.fontStyle = 'normal';
	document.getElementById("text-nocake").style.fontStyle = 'normal';
}



var cur_language = "title-english";
var cur_language_left = "ENGLISH";
var cur_color = "#3eb549";
var cur_title = "p7-english";
var cur_chapter = "p72-english";
/*#FFC0EF
#70CCF7
#FFEB00*/
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  //alert(b.className);
  for (j = 0; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
       	//alert(this.parentNode.innerHTML);
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
          document.getElementById(cur_language).style.display = "none";
          document.getElementById(cur_language_left).style.backgroundColor='white';
	  	  //document.getElementById(cur_language_left).style.color='black';
          	switch(s.options[i].innerHTML){
          		case "ENGLISH":
          			cur_language_left = "ENGLISH";
          			cur_language = "title-english";
          			cur_color = "#3eb549";
          			cur_title = "p7-english";
          			cur_chapter = "p72-english";
          			break;
          		case "AFRIKAANS":
          			cur_language = "title-afrikaans";
          			cur_language_left = "AFRIKAANS";
          			cur_color = "#FFC0EF";
          			cur_title = "p7-afrikaans";
          			cur_chapter = "p72-afrikaans";
          			break;
          		case "ITALIAN":
          			cur_language_left = "ITALIAN";
          			cur_language = "title-italian";
          			cur_color = '#ffff00';
          			cur_title = "p7-italian";
          			cur_chapter = "p72-italian";
          			break;
          		case "ROMANIAN":
          			cur_language = "title-romanian";
          			cur_language_left = "ROMANIAN";
          			cur_color = "#70CCF7";
          			cur_title = "p7-romanian";
          			cur_chapter = "p72-romanian";
          			break;
          		case "ALBANIAN":
          			cur_language_left = "ALBANIAN";
          			cur_language = "title-albanian";
          			cur_color = '#ddd9d6';
          			cur_title = "p7-albanian";
          			cur_chapter = "p72-albanian";
          			break;
          		case "ESTONIAN":
          			cur_language = "title-estonian";
          			cur_language_left = "ESTONIAN";
          			cur_color = '#d7b089';
          			cur_title = "p7-estonian";
          			cur_chapter = "p72-estonian";
          			break;
          		case "LATVIAN":
          			cur_language_left = "LATVIAN";
          			cur_language = "title-latvian";
          			cur_color = '#3eb549';
          			cur_title = "p7-latvian";
          			cur_chapter = "p72-latvian";
          			break;
          		case "SLOVAK":
          			cur_language = "title-slovak";
          			cur_language_left = "SLOVAK";
          			cur_color = '#ddd9d6';
          			cur_title = "p7-slovak";
          			cur_chapter = "p72-slovak";
          			break;
				case "CATALAN":
		  			cur_language_left = "CATALAN";
		  			cur_language = "title-catalan";
		  			cur_color = '#ffff00';
		  			cur_title = "p7-catalan";
          			cur_chapter = "p72-catalan";
		  			break;
		  		case "FINNISH":
		  			cur_language_left = "FINNISH";
	          		cur_language = "title-finnish";
	          		cur_color = '#ddd9d6';
	          		cur_title = "p7-finnish";
          			cur_chapter = "p72-finnish";
		  			break;
				case "LITHUANIAN":
					cur_language = "title-lithuanian";
	      			cur_language_left = "LITHUANIAN";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-lithuanian";
          			cur_chapter = "p72-lithuanian";
	      			break;
	      		case "SLOVENIAN":
	      			cur_language = "title-slovenian";
	      			cur_language_left = "SLOVENIAN";
	      			cur_color = "#70CCF7";
	      			cur_title = "p7-slovenian";
          			cur_chapter = "p72-slovenian";
	      			break;
	      		case "CROATIAN":
	      			cur_language = "title-croatian";
	      			cur_language_left = "CROATIAN";
	      			cur_color = '#3eb549';
	      			cur_title = "p7-croatian";
          			cur_chapter = "p72-croatian";
	      			break;
	      		case "FRENCH":
	      			cur_language = "title-french";
	      			cur_language_left = "FRENCH";
	      			cur_color = "#70CCF7";
	      			cur_title = "p7-french";
          			cur_chapter = "p72-french";
	      			break;
	      		case "MALTESE":
	      			cur_language = "title-maltese";
	      			cur_language_left = "MALTESE";
	      			cur_color = '#d7b089';
	      			cur_title = "p7-maltese";
          			cur_chapter = "p72-maltese";
	      			break;
	      		case "SPANISH":
	      			cur_language = "title-spanish";
	      			cur_language_left = "SPANISH";
	      			cur_color = '#ffff00';
	      			cur_title = "p7-spanish";
          			cur_chapter = "p72-spanish";
	      			break;
		      	case "GERMAN":
		  			cur_language_left = "GERMAN";
		  			cur_language = "title-german";
		  			cur_color = '#3eb549';
		  			cur_title = "p7-german";
          			cur_chapter = "p72-german";
		  			break;
		  		case "NORWEGIAN":
		  			cur_language_left = "NORWEGIAN";
	          		cur_language = "title-norwegian";
	          		cur_color = "#70CCF7";
	          		cur_title = "p7-norwegian";
          			cur_chapter = "p72-norwegian";
		  			break;
				case "CZECH":
					cur_language = "title-czech";
	      			cur_language_left = "CZECH";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-czech";
          			cur_chapter = "p72-czech";
	      			break;
	      		case "SWEDISH":
	      			cur_language = "title-swedish";
	      			cur_language_left = "SWEDISH";
	      			cur_color = '#3eb549';
	      			cur_title = "p7-swedish";
          			cur_chapter = "p72-swedish";
	      			break;
	      		case "DANISH":
	      			cur_language = "title-danish";
	      			cur_language_left = "DANISH";
	      			cur_color = '#ffff00';
	      			cur_title = "p7-danish";
          			cur_chapter = "p72-danish";
	      			break;
	      		case "HUNGARIAN":
	      			cur_language = "title-hungarian";
	      			cur_language_left = "HUNGARIAN";
	      			cur_color = '#d7b089';
	      			cur_title = "p7-hungarian";
          			cur_chapter = "p72-hungarian";
	      			break;
	      		case "POLISH":
	      			cur_language = "title-polish";
	      			cur_language_left = "POLISH";
	      			cur_color = '#ddd9d6';
	      			cur_title = "p7-polish";
          			cur_chapter = "p72-polish";
	      			break;
	      		case "TURKISH":
	      			cur_language = "title-turkish";
	      			cur_language_left = "TURKISH";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-turkish";
          			cur_chapter = "p72-turkish";
	      			break;
	      		case "DUTCH":
	      			cur_language = "title-danish";
	      			cur_language_left = "DUTCH";
	      			cur_color = "#70CCF7";
	      			cur_title = "p7-danish";
          			cur_chapter = "p72-danish";
	      			break;
	      		case "ICELANDIC":
	      			cur_language = "title-icelandic";
	      			cur_language_left = "ICELANDIC";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-icelandic";
          			cur_chapter = "p72-icelandic";
	      			break;
	      		case "PORTUGUESE":
	      			cur_language = "title-portuguese";
	      			cur_language_left = "PORTUGUESE";
	      			cur_color = '#ffff00';
	      			cur_title = "p7-portuguese";
          			cur_chapter = "p72-portuguese";
	      			break;
	      		case "VIETNAMESE":
	      			cur_language = "title-vietnamese";
	      			cur_language_left = "VIETNAMESE";
	      			cur_color = '#d7b089';
	      			cur_title = "p7-vietnamese";
          			cur_chapter = "p72-vietnamese";
	      			break;

          		default:
          			break;
          	}
          	document.getElementById(cur_language).style.display = "block";
          	document.getElementsByClassName("select-selected")[0].innerHTML=cur_language_left;
		  	document.getElementById(cur_language_left).style.backgroundColor=cur_color;
		  	document.getElementById(cur_title).style.color=cur_color;
	  		document.getElementById(cur_chapter).style.color=cur_color;
         
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            //alert(y.nodeName);
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
var p7elements,o;

p7elements=document.getElementById("language-container");
var only_tag = p7elements.getElementsByTagName("li");

for(var k=0; k<only_tag.length; k++){
    only_tag[k].addEventListener("click", function(e) {
    	document.getElementById(cur_language_left).style.backgroundColor='transparent';
	  	document.getElementById(cur_language).style.display = "none";
		switch(this.innerHTML){
  			case "ENGLISH":
          			cur_language_left = "ENGLISH";
          			cur_language = "title-english";
          			cur_color = "#3eb549";
          			cur_title = "p7-english";
          			cur_chapter = "p72-english";
          			break;
          		case "AFRIKAANS":
          			cur_language = "title-afrikaans";
          			cur_language_left = "AFRIKAANS";
          			cur_color = "#FFC0EF";
          			cur_title = "p7-afrikaans";
          			cur_chapter = "p72-afrikaans";
          			break;
          		case "ITALIAN":
          			cur_language_left = "ITALIAN";
          			cur_language = "title-italian";
          			cur_color = '#ffff00';
          			cur_title = "p7-italian";
          			cur_chapter = "p72-italian";
          			break;
          		case "ROMANIAN":
          			cur_language = "title-romanian";
          			cur_language_left = "ROMANIAN";
          			cur_color = "#70CCF7";
          			cur_title = "p7-romanian";
          			cur_chapter = "p72-romanian";
          			break;
          		case "ALBANIAN":
          			cur_language_left = "ALBANIAN";
          			cur_language = "title-albanian";
          			cur_color = '#ddd9d6';
          			cur_title = "p7-albanian";
          			cur_chapter = "p72-albanian";
          			break;
          		case "ESTONIAN":
          			cur_language = "title-estonian";
          			cur_language_left = "ESTONIAN";
          			cur_color = '#d7b089';
          			cur_title = "p7-estonian";
          			cur_chapter = "p72-estonian";
          			break;
          		case "LATVIAN":
          			cur_language_left = "LATVIAN";
          			cur_language = "title-latvian";
          			cur_color = '#3eb549';
          			cur_title = "p7-latvian";
          			cur_chapter = "p72-latvian";
          			break;
          		case "SLOVAK":
          			cur_language = "title-slovak";
          			cur_language_left = "SLOVAK";
          			cur_color = '#ddd9d6';
          			cur_title = "p7-slovak";
          			cur_chapter = "p72-slovak";
          			break;
				case "CATALAN":
		  			cur_language_left = "CATALAN";
		  			cur_language = "title-catalan";
		  			cur_color = '#ffff00';
		  			cur_title = "p7-catalan";
          			cur_chapter = "p72-catalan";
		  			break;
		  		case "FINNISH":
		  			cur_language_left = "FINNISH";
	          		cur_language = "title-finnish";
	          		cur_color = '#ddd9d6';
	          		cur_title = "p7-finnish";
          			cur_chapter = "p72-finnish";
		  			break;
				case "LITHUANIAN":
					cur_language = "title-lithuanian";
	      			cur_language_left = "LITHUANIAN";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-lithuanian";
          			cur_chapter = "p72-lithuanian";
	      			break;
	      		case "SLOVENIAN":
	      			cur_language = "title-slovenian";
	      			cur_language_left = "SLOVENIAN";
	      			cur_color = "#70CCF7";
	      			cur_title = "p7-slovenian";
          			cur_chapter = "p72-slovenian";
	      			break;
	      		case "CROATIAN":
	      			cur_language = "title-croatian";
	      			cur_language_left = "CROATIAN";
	      			cur_color = '#3eb549';
	      			cur_title = "p7-croatian";
          			cur_chapter = "p72-croatian";
	      			break;
	      		case "FRENCH":
	      			cur_language = "title-french";
	      			cur_language_left = "FRENCH";
	      			cur_color = "#70CCF7";
	      			cur_title = "p7-french";
          			cur_chapter = "p72-french";
	      			break;
	      		case "MALTESE":
	      			cur_language = "title-maltese";
	      			cur_language_left = "MALTESE";
	      			cur_color = '#d7b089';
	      			cur_title = "p7-maltese";
          			cur_chapter = "p72-maltese";
	      			break;
	      		case "SPANISH":
	      			cur_language = "title-spanish";
	      			cur_language_left = "SPANISH";
	      			cur_color = '#ffff00';
	      			cur_title = "p7-spanish";
          			cur_chapter = "p72-spanish";
	      			break;
		      	case "GERMAN":
		  			cur_language_left = "GERMAN";
		  			cur_language = "title-german";
		  			cur_color = '#3eb549';
		  			cur_title = "p7-german";
          			cur_chapter = "p72-german";
		  			break;
		  		case "NORWEGIAN":
		  			cur_language_left = "NORWEGIAN";
	          		cur_language = "title-norwegian";
	          		cur_color = "#70CCF7";
	          		cur_title = "p7-norwegian";
          			cur_chapter = "p72-norwegian";
		  			break;
				case "CZECH":
					cur_language = "title-czech";
	      			cur_language_left = "CZECH";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-czech";
          			cur_chapter = "p72-czech";
	      			break;
	      		case "SWEDISH":
	      			cur_language = "title-swedish";
	      			cur_language_left = "SWEDISH";
	      			cur_color = '#3eb549';
	      			cur_title = "p7-swedish";
          			cur_chapter = "p72-swedish";
	      			break;
	      		case "DANISH":
	      			cur_language = "title-danish";
	      			cur_language_left = "DANISH";
	      			cur_color = '#ffff00';
	      			cur_title = "p7-danish";
          			cur_chapter = "p72-danish";
	      			break;
	      		case "HUNGARIAN":
	      			cur_language = "title-hungarian";
	      			cur_language_left = "HUNGARIAN";
	      			cur_color = '#d7b089';
	      			cur_title = "p7-hungarian";
          			cur_chapter = "p72-hungarian";
	      			break;
	      		case "POLISH":
	      			cur_language = "title-polish";
	      			cur_language_left = "POLISH";
	      			cur_color = '#ddd9d6';
	      			cur_title = "p7-polish";
          			cur_chapter = "p72-polish";
	      			break;
	      		case "TURKISH":
	      			cur_language = "title-turkish";
	      			cur_language_left = "TURKISH";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-turkish";
          			cur_chapter = "p72-turkish";
	      			break;
	      		case "DUTCH":
	      			cur_language = "title-danish";
	      			cur_language_left = "DUTCH";
	      			cur_color = "#70CCF7";
	      			cur_title = "p7-danish";
          			cur_chapter = "p72-danish";
	      			break;
	      		case "ICELANDIC":
	      			cur_language = "title-icelandic";
	      			cur_language_left = "ICELANDIC";
	      			cur_color = "#FFC0EF";
	      			cur_title = "p7-icelandic";
          			cur_chapter = "p72-icelandic";
	      			break;
	      		case "PORTUGUESE":
	      			cur_language = "title-portuguese";
	      			cur_language_left = "PORTUGUESE";
	      			cur_color = '#ffff00';
	      			cur_title = "p7-portuguese";
          			cur_chapter = "p72-portuguese";
	      			break;
	      		case "VIETNAMESE":
	      			cur_language = "title-vietnamese";
	      			cur_language_left = "VIETNAMESE";
	      			cur_color = '#d7b089';
	      			cur_title = "p7-vietnamese";
          			cur_chapter = "p72-vietnamese";
	      			break;

	  		default:
	  			break;
	  		}
	  	document.getElementsByClassName("select-selected")[0].innerHTML=cur_language_left;
	  	document.getElementById(cur_language_left).style.backgroundColor=cur_color;
	  	//document.getElementById(cur_language_left).style.color='white';
	  	document.getElementById(cur_language).style.display = "block";
	  	document.getElementById(cur_title).style.color=cur_color;
	  	document.getElementById(cur_chapter).style.color=cur_color;
    });

}


var hover_color = "#3eb549";
var cur_language_lefts = "ENGLISH";
for(var k=0; k<only_tag.length; k++){
    only_tag[k].addEventListener("mouseover", function(e) {
    	
		switch(this.innerHTML){
  			case "ENGLISH":
      			cur_language_lefts = "ENGLISH";
      			//cur_language = "title-english";
      			hover_color = "#3eb549";
      			break;
      		case "AFRIKAANS":
      			cur_language_lefts = "AFRIKAANS";
      			hover_color = "#FFC0EF";
      			break;
      		case "ITALIAN":
      			cur_language_lefts = "ITALIAN";
      			hover_color = '#ffff00';
      			break;
      		case "ROMANIAN":
      			cur_language_lefts = "ROMANIAN";
      			hover_color = "#70CCF7";
      			break;
      		case "ALBANIAN":
      			cur_language_lefts = "ALBANIAN";
      			hover_color = '#ddd9d6';
      			break;
      		case "ESTONIAN":
      			cur_language_lefts = "ESTONIAN";
      			hover_color = '#d7b089';
      			break;
      		case "LATVIAN":
      			cur_language_lefts = "LATVIAN";
      			hover_color = '#3eb549';
      			break;
      		case "SLOVAK":
      			cur_language_lefts = "SLOVAK";
      			hover_color = '#ddd9d6';
      			break;
			case "CATALAN":
	  			cur_language_lefts = "CATALAN";
	  			hover_color = '#ffff00';
	  			break;
	  		case "FINNISH":
	  			cur_language_lefts = "FINNISH";
          		hover_color = '#ddd9d6';
	  			break;
			case "LITHUANIAN":
      			cur_language_lefts = "LITHUANIAN";
      			hover_color = "#FFC0EF";
      			break;
      		case "SLOVENIAN":
      			cur_language_lefts = "SLOVENIAN";
      			hover_color = "#70CCF7";
      			break;
      		case "CROATIAN":
      			cur_language_lefts = "CROATIAN";
      			hover_color = '#3eb549';
      			break;
      		case "FRENCH":
      			cur_language_lefts = "FRENCH";
      			hover_color = "#70CCF7";
      			break;
      		case "MALTESE":
      			cur_language_lefts = "MALTESE";
      			hover_color = '#d7b089';
      			break;
      		case "SPANISH":
      			cur_language_lefts = "SPANISH";
      			hover_color = '#ffff00';
      			break;
	      	case "GERMAN":
	  			cur_language_lefts = "GERMAN";
	  			hover_color = '#3eb549';
	  			break;
	  		case "NORWEGIAN":
	  			cur_language_lefts = "NORWEGIAN";
          		hover_color = "#70CCF7";
	  			break;
			case "CZECH":
      			cur_language_lefts = "CZECH";
      			hover_color = "#FFC0EF";
      			break;
      		case "SWEDISH":
      			cur_language_lefts = "SWEDISH";
      			hover_color = '#3eb549';
      			break;
      		case "DANISH":
      			cur_language_lefts = "DANISH";
      			hover_color = '#ffff00';
      			break;
      		case "HUNGARIAN":
      			cur_language_lefts = "HUNGARIAN";
      			hover_color = '#d7b089';
      			break;
      		case "POLISH":
      			cur_language_lefts = "POLISH";
      			hover_color = '#ddd9d6';
      			break;
      		case "TURKISH":
      			cur_language_lefts = "TURKISH";
      			hover_color = "#FFC0EF";
      			break;
      		case "DUTCH":
      			cur_language_lefts = "DUTCH";
      			hover_color = "#70CCF7";
      			break;
      		case "ICELANDIC":
      			cur_language_lefts = "ICELANDIC";
      			hover_color = "#FFC0EF";
      			break;
      		case "PORTUGUESE":
      			cur_language_lefts = "PORTUGUESE";
      			hover_color = '#ffff00';
      			break;
      		case "VIETNAMESE":
      			cur_language_lefts = "VIETNAMESE";
      			hover_color = '#d7b089';
      			break;
	  		default:
	  			break;
	  		}
	  		document.getElementById(cur_language_lefts).style.backgroundColor=hover_color;
	  		document.getElementById(cur_language_lefts).style.opacity="0.4";
	   });

}


for(var k=0; k<only_tag.length; k++){
    only_tag[k].addEventListener("mouseout", function(e) {
    	
		switch(this.innerHTML){
  			case "ENGLISH":
      			cur_language_lefts = "ENGLISH";
      			//cur_language = "title-english";
      			hover_color = "#70CCF7";
      			break;
      		case "AFRIKAANS":
      			cur_language_lefts = "AFRIKAANS";
      			hover_color = "#FFC0EF";
      			break;
      		case "ITALIAN":
      			cur_language_lefts = "ITALIAN";
      			hover_color = '#3eb549';
      			break;
      		case "ROMANIAN":
      			cur_language_lefts = "ROMANIAN";
      			hover_color = "#70CCF7";
      			break;
      		case "ALBANIAN":
      			cur_language_lefts = "ALBANIAN";
      			hover_color = '#ddd9d6';
      			break;
      		case "ESTONIAN":
      			cur_language_lefts = "ESTONIAN";
      			hover_color = '#3eb549';
      			break;
      		case "LATVIAN":
      			cur_language_lefts = "LATVIAN";
      			hover_color = '#ffff00';
      			break;
      		case "SLOVAK":
      			cur_language_lefts = "SLOVAK";
      			hover_color = '#ddd9d6';
      			break;
			case "CATALAN":
	  			cur_language_lefts = "CATALAN";
	  			hover_color = '#ffff00';
	  			break;
	  		case "FINNISH":
	  			cur_language_lefts = "FINNISH";
          		hover_color = '#ddd9d6';
	  			break;
			case "LITHUANIAN":
      			cur_language_lefts = "LITHUANIAN";
      			hover_color = "#FFC0EF";
      			break;
      		case "SLOVENIAN":
      			cur_language_lefts = "SLOVENIAN";
      			hover_color = "#70CCF7";
      			break;
      		case "CROATIAN":
      			cur_language_lefts = "CROATIAN";
      			hover_color = '#3eb549';
      			break;
      		case "FRENCH":
      			cur_language_lefts = "FRENCH";
      			hover_color = "#70CCF7";
      			break;
      		case "MALTESE":
      			cur_language_lefts = "MALTESE";
      			hover_color = '#d7b089';
      			break;
      		case "SPANISH":
      			cur_language_lefts = "SPANISH";
      			hover_color = '#ffff00';
      			break;
	      	case "GERMAN":
	  			cur_language_lefts = "GERMAN";
	  			hover_color = '#3eb549';
	  			break;
	  		case "NORWEGIAN":
	  			cur_language_lefts = "NORWEGIAN";
          		hover_color = "#70CCF7";
	  			break;
			case "CZECH":
      			cur_language_lefts = "CZECH";
      			hover_color = "#FFC0EF";
      			break;
      		case "SWEDISH":
      			cur_language_lefts = "SWEDISH";
      			hover_color = '#3eb549';
      			break;
      		case "DANISH":
      			cur_language_lefts = "DANISH";
      			hover_color = '#ffff00';
      			break;
      		case "HUNGARIAN":
      			cur_language_lefts = "HUNGARIAN";
      			hover_color = '#d7b089';
      			break;
      		case "POLISH":
      			cur_language_lefts = "POLISH";
      			hover_color = '#ddd9d6';
      			break;
      		case "TURKISH":
      			cur_language_lefts = "TURKISH";
      			hover_color = "#FFC0EF";
      			break;
      		case "DUTCH":
      			cur_language_lefts = "DUTCH";
      			hover_color = "#70CCF7";
      			break;
      		case "ICELANDIC":
      			cur_language_lefts = "ICELANDIC";
      			hover_color = "#FFC0EF";
      			break;
      		case "PORTUGUESE":
      			cur_language_lefts = "PORTUGUESE";
      			hover_color = '#ffff00';
      			break;
      		case "VIETNAMESE":
      			cur_language_lefts = "VIETNAMESE";
      			hover_color = '#d7b089';
      			break;
	  		default:
	  			break;
	  		}
	  		document.getElementById(cur_language_lefts).style.backgroundColor='white';
	  		document.getElementById(cur_language_lefts).style.opacity="1";
	  		document.getElementById(cur_language_left).style.backgroundColor=cur_color;
	   });

}

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fashion&api-key=oObWA9Y4w0O3UeN7RevglXHX4MdXzw74';

function setup()
{
	loadJSON(url, gotData);
}

function gotData(data)
{
	println(data.response.docs[0].headline.main);

}


var slider_e3_weight = document.getElementById("e3-example-slider-weight");
var output_e3_weight = document.getElementById("e3-value-weight");
var slider_e3_size = document.getElementById("e3-example-slider-size");
var output_e3_size = document.getElementById("e3-value-size");
var slider_e3_lineheight = document.getElementById("e3-example-slider-lineheight");
var output_e3_lineheight = document.getElementById("e3-value-lineheight");
var dark_mode = document.getElementById("dark-mode");

var checkbox_ital = document.getElementById("checkbox_ital");
var checkbox_color = document.getElementById("pick-color");

var book_overview = document.getElementById("book-overview");
var book_title = document.getElementById("book-title");
var book_character_1 = document.getElementById("book-character-1");
var book_character_2 = document.getElementById("book-character-2");
var book_character_1_txt = document.getElementById("book-character-1-txt");
var book_character_2_txt = document.getElementById("book-character-2-txt");
var book_chapter = document.getElementById("book-chapter");
var book_chapter_txt = document.getElementById("book-chapter-txt");

var curr_txtbox = "book-title";

checkbox_ital.onclick = function() {
	if(checkbox_ital.checked == true){
		document.getElementById(curr_txtbox).style.fontStyle = 'italic';
	}
	else{
		document.getElementById(curr_txtbox).style.fontStyle = 'normal';
	}
}

slider_e3_weight.oninput = function() {
	output_e3_weight.innerHTML = slider_e3_weight.value;
	//alert(curr_txtbox);
	var d = document.getElementById(curr_txtbox);
	d.style.setProperty('--e3-text-weight', this.value);

}

slider_e3_size.oninput = function() 
{
	output_e3_size.innerHTML = slider_e3_size.value;
	var d = document.getElementById(curr_txtbox);
	d.style.setProperty('--e3-text-size', this.value);
}

slider_e3_lineheight.oninput = function() 
{
	output_e3_lineheight.innerHTML = slider_e3_lineheight.value;
	var d = document.getElementById(curr_txtbox);
	d.style.setProperty('--e3-text-lineheight', this.value);
}

var dark = false;

function darkFunction()
{
	if(document.getElementById("e3-dark-mode").checked == true){
		document.getElementById("LastPage").style.backgroundColor='#000000';
		document.getElementById("LastPage").style.color='#ffffff';
		document.getElementById("LastPage").style.border='1px solid #ffffff';
		book_overview.style.color='#ffffff';
		book_title.style.color='#ffffff';
		book_character_1.style.color='#ffffff';
		book_character_1_txt.style.color='#ffffff';
		book_character_2.style.color='#ffffff';
		book_character_2_txt.style.color='#ffffff';
		book_chapter.style.color='#ffffff';
		book_chapter_txt.style.color='#ffffff';
		document.getElementById("Example3-line1").style.borderColor='#ffffff';
		document.getElementById("Example3-line2").style.borderColor='#ffffff';
		document.getElementById("Example3-line3").style.borderColor='#ffffff';
		document.getElementById("Example3-line4").style.borderColor='#ffffff';

		document.getElementById("tweak-box-container").style.backgroundColor='#000000';
		document.getElementById("tweak-box-container").style.color='#ffffff';
		document.getElementById("tweak-box-container").style.border='1px solid #ffffff';
		document.getElementById("e3-example-slider-weight").style.background='#ffffff';
		document.getElementById("e3-example-slider-size").style.background='#ffffff';
		document.getElementById("e3-example-slider-lineheight").style.background='#ffffff';
		document.getElementById("checkmark1").style.borderColor='#ffffff';
		document.getElementById("checkmark1").style.background='#ffffff';
		document.getElementById("checkmark2").style.background='#ffffff';
		document.getElementById("checkmark2").style.borderColor='#ffffff';

		document.getElementById("text-weight-container").style.borderColor='#ffffff';

		checkbox_color.value = "#ffffff";
	
	}
	else{
		document.getElementById("LastPage").style.backgroundColor='#ffffff';
		document.getElementById("LastPage").style.color='#000000';
		document.getElementById("LastPage").style.border='none';
		book_overview.style.color='#000000';
		book_title.style.color='#000000';
		book_character_1.style.color='#000000';
		book_character_1_txt.style.color='#000000';
		book_character_2.style.color='#000000';
		book_character_2_txt.style.color='#000000';
		book_chapter.style.color='#000000';
		book_chapter_txt.style.color='#000000';
		document.getElementById("Example3-line1").style.borderColor='#000000';
		document.getElementById("Example3-line2").style.borderColor='#000000';
		document.getElementById("Example3-line3").style.borderColor='#000000';
		document.getElementById("Example3-line4").style.borderColor='#000000';

		document.getElementById("tweak-box-container").style.backgroundColor='#ffffff';
		document.getElementById("tweak-box-container").style.color='#000000';
		document.getElementById("tweak-box-container").style.border='1px solid #000000';
		document.getElementById("e3-example-slider-weight").style.background='#000000';
		document.getElementById("e3-example-slider-size").style.background='#000000';
		document.getElementById("e3-example-slider-lineheight").style.background='#000000';
		document.getElementById("checkmark1").style.borderColor='#000000';
		document.getElementById("checkmark1").style.background='transparent';
		document.getElementById("checkmark2").style.background='transparent';
		document.getElementById("checkmark2").style.borderColor='#000000';

		document.getElementById("text-weight-container").style.borderColor='#000000';

		checkbox_color.value = "#000000";

	}

}

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#"+red+green+blue;
};

function rgbtoHex(t)
{
	str = t;
	str = str.substring(0, str.length - 1);
	str = str.slice(4);
	var st = str.split(',');
	//alert(st[0]+"hello");
	if(st.length == 3){
		return fullColorHex(st[0],st[1],st[2]);
	}
	else{
		return;
	}
	return '#ffffff';
	

}
checkbox_color.oninput = function()
{
	document.getElementById(curr_txtbox).style.color=checkbox_color.value;
}

book_overview.onclick = function()
{
	curr_txtbox = book_overview.id;
	var styles_applied = window.getComputedStyle(book_overview);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_overview.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_title.onclick = function()
{
	curr_txtbox = book_title.id;
	var styles_applied = window.getComputedStyle(book_title);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_title.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_character_1.onclick = function()
{
	curr_txtbox = book_character_1.id;
	var styles_applied = window.getComputedStyle(book_character_1);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_character_1.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_character_1_txt.onclick = function()
{
	curr_txtbox = book_character_1_txt.id;
	var styles_applied = window.getComputedStyle(book_character_1_txt);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_character_1_txt.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_character_2.onclick = function()
{
	curr_txtbox = book_character_2.id;
	var styles_applied = window.getComputedStyle(book_character_2);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_character_2.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_character_2_txt.onclick = function()
{
	curr_txtbox = book_character_2_txt.id;
	var styles_applied = window.getComputedStyle(book_character_2_txt);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_character_2_txt.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_chapter.onclick = function()
{
	curr_txtbox = book_chapter.id;
	var styles_applied = window.getComputedStyle(book_chapter);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_chapter.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

book_chapter_txt.onclick = function()
{
	curr_txtbox = book_chapter_txt.id;
	var styles_applied = window.getComputedStyle(book_chapter_txt);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(book_chapter_txt.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

dark_mode.onclick = function()
{
	curr_txtbox = dark_mode.id;
	var styles_applied = window.getComputedStyle(dark_mode);

	slider_e3_weight.value = styles_applied.fontWeight;
	output_e3_weight.innerHTML = styles_applied.fontWeight;

	size_wo_px = styles_applied.fontSize;
	size_wo_px = size_wo_px.replace('p','');
	size_wo_px = size_wo_px.replace('x','');
	slider_e3_size.value = size_wo_px;
	output_e3_size.innerHTML = size_wo_px;

	lh_wo_px = styles_applied.lineHeight;
	lh_wo_px = lh_wo_px.replace('p','');
	lh_wo_px = lh_wo_px.replace('x','');
	slider_e3_lineheight.value = lh_wo_px;
	output_e3_lineheight.innerHTML = lh_wo_px;

	checkbox_color.value = rgbtoHex(dark_mode.style.color);

	if(styles_applied.fontStyle == 'italic'){
		document.getElementById("checkbox_ital").checked = true;
	}
	else {
		document.getElementById("checkbox_ital").checked = false;
	}
}

// Make the DIV element draggable:
dragElement(document.getElementById("tweak-box-container"));

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
	// if present, the header is where you move the DIV from:
	document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
	// otherwise, move the DIV from anywhere inside the DIV: 
	elmnt.onmousedown = dragMouseDown;
 }

  function dragMouseDown(e) {
	e = e || window.event;
	e.preventDefault();
	// get the mouse cursor position at startup:
	pos3 = e.clientX;
	pos4 = e.clientY;
	document.onmouseup = closeDragElement;
	// call a function whenever the cursor moves:
	document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
	e = e || window.event;
	e.preventDefault();
	// calculate the new cursor position:
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	// set the element's new position:
	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
	// stop moving when mouse button is released:
	document.onmouseup = null;
	document.onmousemove = null;
	}
}


var img = $('.book');
var offset = img.offset();
var mouseDown = false;
var f_x=0;
var f_y=0;

function mouse(evt) {

    if(mouseDown ==true){
    var center_x = (f_x - evt.pageX)/2;
    var center_y = (f_y - evt.pageY)/2;
    var center_z = center_y + center_x;
    var mouse_x = -center_x + 'deg';
    var mouse_y = center_y + 'deg';
    //var mouse_z = center_z + 'deg';
    document.getElementById("bookup").style.setProperty('--rotate-y', mouse_x);
    document.getElementById("bookup").style.setProperty('--rotate-x', mouse_y);
    //document.getElementById("bookup").style.setProperty('--rotate-z', mouse_z);

    }
}

img.mousedown(function (e) {
    mouseDown=true;
    f_x=e.pageX;
    f_y=e.pageY;
    //f_z=e.pageZ;
    //alert(f_z);
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})

//alert(document.getElementById("header-1").innerHTML);
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

function changeNews(topic)
{
	url='https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+topic+'&api-key=oObWA9Y4w0O3UeN7RevglXHX4MdXzw74'
	getJSON(url,
	function(err, data) {
	  if (err !== null) {
	    alert('Something went wrong: ' + err);
	  } else {

	  	
	  	var headers1 = document.getElementById('mainhead');
	  	var headers2 = document.getElementById('subhead');
	  	var snippets1 = document.getElementById('snippet');
	  	var authors = document.getElementById('author21');

	    headers1.innerHTML = data.response.docs[0].headline.main;
	    document.getElementById("Example2-1").style.content = "url(https://www.nytimes.com/" + data.response.docs[0].multimedia[0].url + ")";
	    document.getElementById("author-1").innerHTML = data.response.docs[0].byline.original;
	    snippets1.innerHTML = data.response.docs[0].snippet;

	    headers2.innerHTML = data.response.docs[1].headline.main;
	    document.getElementById("Example2-2").style.content = "url(https://www.nytimes.com/" + data.response.docs[1].multimedia[0].url + ")";
	    authors.innerHTML = data.response.docs[1].byline.original;



	    var factor = 0.9; 
	    var factorup = 1.1;
		var header = $('#header-1');
		var header1 = $('#mainhead');

		var header2 = $('#header-2');
		var header21 = $('#subhead');

		var snippet = $('#snippet-1');
		var snippet1 = $('#snippet');

		var author2 = $('#author-2');
		var author21 = $('#author21');

		
		if(header.height() < header1.height()){
			while(header.height() < header1.height()){
				var style = window.getComputedStyle(headers1, null).getPropertyValue('font-size');
				var fontSize = parseFloat(style); 

				header1.css('font-size', (fontSize * factor) + 'px');
				header1.css('line-height', (fontSize * 1.4) + 'px');
			}
		}
		else{
			while(header.height() > header1.height()){
				var style = window.getComputedStyle(headers1, null).getPropertyValue('font-size');
				var fontSize = parseFloat(style); 


				header1.css('font-size', (fontSize * factorup) + 'px');
				header1.css('line-height', (fontSize * 1.4) + 'px');
				if(header.height() < header1.height()){
					header1.css('font-size', (fontSize) + 'px');
					header1.css('line-height', (fontSize * 1.4) + 'px');
					break;
				}
			}
		}

		if(header2.height() < header21.height()){
			while(header2.height() < header21.height()){
				var style2 = window.getComputedStyle(headers2, null).getPropertyValue('font-size');
				var fontSize2 = parseFloat(style2); 

				header21.css('font-size', (fontSize2 * factor) + 'px');
				header21.css('line-height', (fontSize2 * 1.3) + 'px');
			}
		}
		else{
			while(header2.height() > header21.height()){
				var style2 = window.getComputedStyle(headers2, null).getPropertyValue('font-size');
				var fontSize2 = parseFloat(style2); 

				header21.css('font-size', (fontSize2 * factorup) + 'px');
				header21.css('line-height', (fontSize2 * 1.3) + 'px');
				//alert(fontSize2);
				if(header2.height() < header21.height()){
					//alert("stop");
					header21.css('font-size', (fontSize2) + 'px');
					header21.css('line-height', (fontSize2 * 1.3) + 'px');
					break;
				}
			}
		}
		

		while(snippet.height() < snippet1.height()){
			var style = window.getComputedStyle(snippets1, null).getPropertyValue('font-size');
			var lineHeight = window.getComputedStyle(snippets1, null).getPropertyValue('line-height');
			var fontSize = parseFloat(style); 

			snippet1.css('font-size', (fontSize * factor) + 'px');
			snippet1.css('line-height', (fontSize * 1.4) + 'px');
		}

		while(author2.height() < author21.height()){
			var style = window.getComputedStyle(authors, null).getPropertyValue('font-size');
			var lineHeight = window.getComputedStyle(authors, null).getPropertyValue('line-height');
			var fontSize = parseFloat(style); 

			author21.css('font-size', (fontSize * factor) + 'px');
			author21.css('line-height', (fontSize * 1.4) + 'px');
		}
		
	  }
	});
 
}

var send_news = document.getElementById("input-topic");
send_news.onclick=function()
{
	var topic = document.getElementById("e2-topic").value;
	if(topic == "input new topic"){
		return;
	}
	else{
		changeNews(topic);
	}
}


var reload = document.getElementById("reload");
var tpic = ["corona", "fashion", "cheese" , "car", "halloween", "christmas" , "pet", "clothes", "donut", "asia"
, "america", "europe", "africa", "color", "cold", "hot", "party", "food", "technology", "bill gates", "building", "fun"
, "family", "tree"];
reload.onclick=function()
{
	changeNews(tpic[Math.floor(Math.random() * tpic.length)]);
}

dragElement(document.getElementById("header-1"));
dragElement(document.getElementById("header-2"));
dragElement(document.getElementById("author-1"));
dragElement(document.getElementById("author-2"));
dragElement(document.getElementById("snippet-1"));
dragElement(document.getElementById("example-line-5"));
dragElement(document.getElementById("example-line-1"));

if(window.innerWidth > 1000){
	//alert("OVER");
	(function () {
	    'use strict';

	    var module = {
	        init: function (id) {
	            var me = this;

	            // if older browser then don't run javascript
	            if (document.addEventListener) {
	                this.el = document.getElementById(id);
	                this.resize();
	                this.plugins();

	                // on window resize, update the plugin size
	                window.addEventListener('resize', function (e) {
	                	var size = me.resize();
	                	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
						const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

	                	$(me.el).turn('size', size.width, size.height);
	       
	                });
	            }
	        },
	        resize: function () {
	            // reset the width and height to the css defaults
	            this.el.style.width = '';
	            this.el.style.height = '';

	            var width = this.el.clientWidth,
	                height = this.el.clientHeight;

	            return {
	                width: this.el.clientWidth,
	                height: this.el.clientHeight
	            };
	        },
	        plugins: function () {
	            // run the plugin
	            $(this.el).turn({
	            	page: 2,
	                pages: 20,
	                acceleration: true,
	                when: {
					    start: function(event, pageObject, corner) {
					       if (pageObject.next==1) 
					         event.preventDefault();
					    }, 
					    turning: function(event, page, view) {
					       if (page==1)
					          event.preventDefault();
					    }
	  				}
	            });

	            // hide the body overflow
	            document.body.className = 'hide-overflow';
	        }
	    };

	    module.init('crimson-book');
	}());
}




function checkPageLeft(){
	//alert($('#crimson-book').turn('page'));
	switch($('#crimson-book').turn('page')){

		case 5:
			document.getElementById("intro").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;

		case 19:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';	
			break;
		case 21:
			document.getElementById('example1').scrollIntoView({behavior: 'smooth'});
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("recognition").style.color='white';
			break;
	
		default:
			break;
	}
}


function checkPageRight(){
	//alert($('#crimson-book').turn('page'));
	/*if(num==6){
		document.getElementById("the-text").focus();
	}
	else if(num==10){
		document.getElementById("drink-text").focus();
	}
	else if(num==12){
		document.getElementById("eat-me").focus();
	}
	else if(num==14){
		document.getElementById("text-nocake").focus();
	}*/

	switch($('#crimson-book').turn('page')){
		
		case 6:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';	
			break;
			//alert("found");
			break;
		case 20:
			document.getElementById('example1').scrollIntoView({behavior: 'smooth'});
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("recognition").style.color='white';
			break;
		case 22:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='#FEC0F0';
			break;
		default:
			break;
	}


}


$("#right").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('next');
	checkPageRight();
});


$("#left").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('previous');

	checkPageLeft();
	
});


$("#intro").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 2);
	//alert($('#crimson-book').turn('page'));
	document.getElementById("intro").style.color='#FEC0F0';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='white';
});

$("#design").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 6);
	document.getElementById("intro").style.color='white';
	document.getElementById("design").style.color='#FEC0F0';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='white';
});

$("#example").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 20);
	document.getElementById('example1').scrollIntoView({behavior: 'smooth'});
	document.getElementById("intro").style.color='white';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='#FEC0F0';
	document.getElementById("recognition").style.color='white';
});

$("#recognition").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 22);
	document.getElementById("intro").style.color='white';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='#FEC0F0';
});


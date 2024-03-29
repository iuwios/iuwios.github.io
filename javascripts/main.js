
"use strict";


/* temporary window scroll disable */
function disableScroll() 
{ 
    document.body.classList.add("stop-scrolling"); 
} 
  
function enableScroll() { 
    document.body.classList.remove("stop-scrolling"); 
}


/* transitions for left and right arrow Keys */
let num = 0;
let max = document.querySelectorAll("[id='pg']").length-2;
let elms = document.querySelectorAll("[id='pg']");



let mql = window.matchMedia( "screen and (max-width: 1000px)" );
mql.addListener(mediaqueryresponse);
function mediaqueryresponse(mql){
 if (mql.matches){ // if media query matches
  //alert("Changed");
  location.reload();
 }
 else{
  location.reload();
 }
}


let countby = 0;
if(window.innerWidth > 1000){

	/*navigation scroll*/
	window.onscroll = function() {myFunction()};


	const navbar = document.getElementById("nav-container");
	let sticky = navbar.offsetTop + navbar.offsetHeight - window.innerHeight;

	let navbar2 = document.getElementById("Example-2");
	let navbar3 = document.getElementById("contain");

	
	let pgExample = navbar.offsetTop;
	let accesschange = true;
	let accessintro = false;

	function myFunction() {

	    if (window.pageYOffset >= sticky && window.pageYOffset <navbar2.offsetTop) {
			  //navbar.classList.add("sticky");
			  navbar.style.position="fixed";
			  navbar.style.setProperty('--sticky-2', navbar2.offsetHeight - navbar.offsetHeight + "px");
		}
		else if (window.pageYOffset >= navbar2.offsetTop) {
			navbar.style.setProperty('--sticky-2', navbar2.offsetTop+navbar2.offsetHeight - navbar.offsetHeight + "px");
			navbar.style.position="absolute";
			accesschange = false;
			//console.log("mid");
		}   
		else{
			//navbar.classList.remove("sticky");
			navbar.style.position="absolute";
			navbar.style.setProperty('--sticky-2', navbar3.offsetTop + navbar3.offsetHeight + "px");
			accesschange = true;
			//console.log("remove");
		}

		if (window.pageYOffset >= pgExample && accesschange) {
		  	//console.log("changed");
		    navbar.classList.add("sticky");
		    $('#crimson-book').turn('page', 22);
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("recognition").style.color='white';
			accesschange = false;
			accessintro = true;
		}
		else if(window.pageYOffset <= sticky && accessintro){
			$('#crimson-book').turn('page', 2);
			document.getElementById("intro").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			accessintro = false;

		}

	}

	/*Crimson Book Open and Close */

	document.getElementById("crimson-book").addEventListener("mousewheel", function(event){
		//disableScroll();
		event.preventDefault();

	       clearTimeout($.data(this, 'timer'));
			$.data(this, 'timer', setTimeout(function() {
		     //4milisecond delay
		    	if(event.deltaY>0){
					$('#crimson-book').turn('next');

					checkPageRight();

				}
				else if(event.deltaY<0){
					$('#crimson-book').turn('previous');
					checkPageLeft();
				}
		    }, 40));

    	

		countby = countby + 1;

	});				
}

/* Intro Page 2 Left Interactions */

function checkWeight(weight_type,animation_type){
	let wghtTypes = ['slnt','wdth','wght','ital','opsz'];
	document.getElementById("smile").className = animation_type;

	for(let i = 0; i<wghtTypes.length; i++){
		if(wghtTypes[i] === weight_type){
			document.getElementById(weight_type).style.background = 'black';
			document.getElementById(weight_type).style.color = 'white';

		}
		else{
			document.getElementById(wghtTypes[i]).style.background = 'white';
			document.getElementById(wghtTypes[i]).style.color = 'black';
		}

	}
}

let roboto_count = 0;


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
			checkWeight('wght', 'weight_animation');
			break;
		case 1:
			checkWeight('wdth', 'width_animation');
			break;
		case 2:
			checkWeight('slnt', 'slant_animation');
			break;
		case 3:
			checkWeight('ital', 'italic_animation');
			break;
		case 4:
			checkWeight('opsz', 'opticalsize_animation');
			break;
		default:
			break;

	}

		
});
		


/* Intro Page 2 Right Interactions */

let slider = document.getElementById("slider-O");
let output = document.getElementById("txt-OO");

let sliderY = document.getElementById("slider-Y");
let outputY = document.getElementById("txt-YY");

let slider5 = document.getElementById("slider-FVFV");
let output5 = document.getElementById("txt-FVFV");

let slidert = document.getElementById("slider-t");
let outputt = document.getElementById("txt-tt");

let slidere = document.getElementById("slider-e");
let outpute = document.getElementById("txt-ee");

let sliderr = document.getElementById("slider-r");
let outputr = document.getElementById("txt-rr");

let sliderval;

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


/* design pg 3 PA */

var A_letter = document.getElementById("A-letter");

var O_letter = document.getElementById("O-letter");
O_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "O-counter";
	cur_box = "O-box";
	cur_alpha = "alpha-O";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var D_letter = document.getElementById("D-letter");
var B_letter = document.getElementById("B-letter");
B_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "B-counter";
	cur_box = "B-box";
	cur_alpha = "alpha-B";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var C_letter = document.getElementById("C-letter");
C_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "C-counter";
	cur_box = "C-box";
	cur_alpha = "alpha-C";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var f_letter = document.getElementById("f-letter");

var N_letter = document.getElementById("N-letter");
N_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "N-counter";
	cur_box = "N-box";
	cur_alpha = "alpha-N";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var Om_letter = document.getElementById("Om-letter");
Om_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Om-counter";
	cur_box = "Om-box";
	cur_alpha = "alpha-Om";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var Ob_letter = document.getElementById("Ob-letter");
var R_letter = document.getElementById("R-letter");
R_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "R-counter";
	cur_box = "R-box";
	cur_alpha = "alpha-R";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var per_letter = document.getElementById("per-letter");
per_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "per-counter";
	cur_box = "per-box";
	cur_alpha = "alpha-per";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var Z_letter = document.getElementById("Z-letter");
Z_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Z-counter";
	cur_box = "Z-box";
	cur_alpha = "alpha-Z";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var P_letter = document.getElementById("P-letter");
var K_letter = document.getElementById("K-letter");
K_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "K-counter";
	cur_box = "K-box";
	cur_alpha = "alpha-K";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var e_letter = document.getElementById("e-letter");
e_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "e-counter";
	cur_box = "e-box";
	cur_alpha = "alpha-e";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var cn_letter = document.getElementById("cn-letter");
cn_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "cn-counter";
	cur_box = "cn-box";
	cur_alpha = "alpha-cn";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var Q_letter = document.getElementById("Q-letter");
Q_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Q-counter";
	cur_box = "Q-box";
	cur_alpha = "alpha-Q";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var sh_letter = document.getElementById("sh-letter");
var sv_letter = document.getElementById("sv-letter");
sv_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "sv-counter";
	cur_box = "sv-box";
	cur_alpha = "alpha-sv";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var qu_letter = document.getElementById("qu-letter");
qu_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "qu-counter";
	cur_box = "qu-box";
	cur_alpha = "alpha-qu";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var sx_letter = document.getElementById("sx-letter");
sx_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "sx-counter";
	cur_box = "sx-box";
	cur_alpha = "alpha-sx";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var ac_letter = document.getElementById("ac-letter");
ac_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "ac-counter";
	cur_box = "ac-box";
	cur_alpha = "alpha-ac";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var Obs_letter = document.getElementById("Obs-letter");
Obs_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Obs-counter";
	cur_box = "Obs-box";
	cur_alpha = "alpha-Obs";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var S_letter = document.getElementById("S-letter");
S_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "S-counter";
	cur_box = "S-box";
	cur_alpha = "alpha-S";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var nn_letter = document.getElementById("nn-letter");
var M_letter = document.getElementById("M-letter");
M_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "M-counter";
	cur_box = "M-box";
	cur_alpha = "alpha-M";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var Bx_letter = document.getElementById("Bx-letter");
Bx_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Bx-counter";
	cur_box = "Bx-box";
	cur_alpha = "alpha-Bx";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var U_letter = document.getElementById("U-letter");
U_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "U-counter";
	cur_box = "U-box";
	cur_alpha = "alpha-U";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var E_letter = document.getElementById("E-letter");
E_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "E-counter";
	cur_box = "E-box";
	cur_alpha = "alpha-E";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};
var at_letter = document.getElementById("at-letter");
at_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "at-counter";
	cur_box = "at-box";
	cur_alpha = "alpha-at";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var Ff_letter = document.getElementById("Ff-letter");
Ff_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Ff-counter";
	cur_box = "Ff-box";
	cur_alpha = "alpha-Ff";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

var cur_alpha = "alpha-P";
var cur_counter;
var cur_box;

var element1 = document.getElementById("box");
var element2 = document.getElementById("P-counter");
var element3 = document.getElementById("patch1");
var element4 = document.getElementById("patch2");
var element5 = document.getElementById("box");

A_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "A-counter";
	cur_box = "A-box";
	cur_alpha = "alpha-A";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "block";
	element4.style.display = "block";
	document.getElementById(cur_alpha).style.display = "block";
};

D_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "D-counter";
	cur_box = "D-box";
	cur_alpha = "alpha-D";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

f_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "f-counter";
	cur_box = "f-box";
	cur_alpha = "alpha-f";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

Ob_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "Ob-counter";
	cur_box = "Ob-box";
	cur_alpha = "alpha-Ob";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};


sh_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "sh-counter";
	cur_box = "sh-box";
	cur_alpha = "alpha-sh";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

nn_letter.onclick = function(){

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);

	}

	document.getElementById(cur_alpha).style.display = "none";

	cur_counter = "nn-counter";
	cur_box = "nn-box";
	cur_alpha = "alpha-nn";

	element1.classList.add(cur_box);
	element2.classList.add(cur_counter);
	element3.style.display = "none";
	element4.style.display = "none";
	document.getElementById(cur_alpha).style.display = "block";
};

P_letter.onclick = function(){

	var element0 = document.getElementById(cur_alpha);
	element0.style.display = "none";

	cur_alpha = "alpha-P";

	if(cur_counter!=null){
		element1.classList.remove(cur_box);
		element2.classList.remove(cur_counter);
		element3.style.display = "none";
		element4.style.display = "none";
		document.getElementById(cur_alpha).style.display = "block";

	}
};


/* design page 4 */

var curd_color = "red";
var rom_ital='italic';
var night_mode = false;
var d_text = document.getElementById("drink-text");

var cur_t = document.getElementById("triangle7");
var d_R = document.getElementById("roman");
var d_I = document.getElementById("italic");


var weight_txt =document.getElementById("weight-unlimited");
var weight_bot_txt = document.getElementById("with-unlimited");
var pg_left =document.getElementById("pg-4-1");
var pg_right = document.getElementById("pg-4-2");
var grd_left =document.getElementById("grd-left");
var grd_right = document.getElementById("grd-right");
var circles = document.getElementsByClassName("circles");
var head_l = document.getElementById("head-l");
var head_r = document.getElementById("head-r");
var d4_is_dark = false;

var d = 1000;


function d4_dark_mode(){
	d4_is_dark = true;
	weight_txt.style.color = "white";
	weight_txt.style.borderColor = "white";
	weight_bot_txt.style.color = "white";
	pg_left.style.backgroundColor = "black";
	pg_right.style.backgroundColor = "black";
	d_text.style.color = 'white';
	d_text.style.backgroundColor = 'black';
	head_l.style.color="white";
	head_r.style.color="white";


	//pg_left.style.cssText = "background-color: " + "black";
	//pg_right.style.cssText = "background-color: " + "black";


	if(rom_ital == 'italic'){
		d_I.style.backgroundColor = 'white';
		d_I.style.color = "black";
		d_R.style.backgroundColor = 'black';
		d_R.style.color = "white";
	}
	else{
		d_I.style.backgroundColor = 'black';
		d_I.style.color = "white";
		d_R.style.backgroundColor = 'white';
		d_R.style.color = "black";
	}
	d_I.style.borderColor = 'white';
	d_R.style.borderColor = 'white';

	grd_left.style.visibility = 'hidden';
	grd_right.style.visibility = 'hidden';

	for(i=0; i<circles.length; i++){
		circles[i].style.borderColor = 'white';
	}
}

function d4_normal_mode(){
	d4_is_dark = false;
	weight_txt.style.color = 'black';
	weight_txt.style.borderColor = "black";
	weight_bot_txt.style.color = "black";
	pg_left.style.backgroundColor = "white";
	pg_right.style.backgroundColor = "white";
	d_text.style.color = curd_color;
	d_text.style.backgroundColor = 'white';

	head_l.style.color="black";
	head_r.style.color="black";	

	if(rom_ital == 'italic'){
		d_I.style.backgroundColor = curd_color;
		d_I.style.color = "white";
		d_R.style.backgroundColor = 'white';
		d_R.style.color = "black";
	}
	else{
		d_R.style.backgroundColor = curd_color;
		d_R.style.color = "white";
		d_I.style.backgroundColor = 'white';
		d_I.style.color = "black";
	}
	d_I.style.borderColor = 'black';
	d_R.style.borderColor = 'black';

	grd_left.style.backgroundColor = 'linear-gradient(to left, #D7D7D7, #F2F2F1, white)';
	grd_right.style.backgroundColor = 'linear-gradient(to right, #D7D7D7, #F2F2F1, white)';

	
	grd_left.style.visibility = 'visible';
	grd_right.style.visibility = 'visible';

	

	for(i=0; i<circles.length; i++){
		circles[i].style.borderColor = 'black';
	}
}

function check_ItalRom(){
	if(rom_ital == 'italic'){
		d_I.style.backgroundColor = curd_color;
		d_I.style.color = "white";
	}
	else{
		d_R.style.backgroundColor = curd_color;
		d_R.style.color = "white";
	}
}
function color_moon(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle1");
	cur_t.style.visibility = 'visible';
	d4_dark_mode();

}

function color_yellow(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle4");
	cur_t.style.visibility = 'visible';
	curd_color = "#FFEB00";
	d_text.style.color = curd_color;
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}
function color_blue(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle2");
	cur_t.style.visibility = 'visible';
	curd_color = "#70CCF7";
	d_text.style.color = "#70CCF7";
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}
function color_brown(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle3");
	cur_t.style.visibility = 'visible';
	curd_color = "#D7B089";
	d_text.style.color = "#D7B089";
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}
function color_red(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle7");
	cur_t.style.visibility = 'visible';
	curd_color = "red";
	d_text.style.color = "red";
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}
function color_black(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle8");
	cur_t.style.visibility = 'visible';
	curd_color = "black";
	d_text.style.color = "black";
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}
function color_green(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle6");
	cur_t.style.visibility = 'visible';
	curd_color = "#3EB449";
	d_text.style.color = "#3EB449";
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}
function color_white(){
	cur_t.style.visibility = 'hidden';
	cur_t = document.getElementById("triangle5");
	cur_t.style.visibility = 'visible';
	curd_color = "#FFBFF1";
	d_text.style.color = "#FFBFF1";
	check_ItalRom();
	if(d4_is_dark){
		d4_normal_mode();
	}
}


function d4click_roman()
{
	rom_ital='roman';
	document.getElementById("drink-text").style.fontStyle='normal';
	if(d4_is_dark){
		document.getElementById("roman").style.color='black';
		document.getElementById("roman").style.backgroundColor='#FFFFFF';
		document.getElementById("italic").style.color='white';
		document.getElementById("italic").style.background='black';
	}
	else{
		document.getElementById("roman").style.color='white';
		document.getElementById("roman").style.backgroundColor=curd_color;
		document.getElementById("italic").style.color='black';
		document.getElementById("italic").style.background='white';
	}

}

function d4click_italic()
{
	rom_ital='italic';
	document.getElementById("drink-text").style.fontStyle='italic';
	if(d4_is_dark){
		document.getElementById("italic").style.color='black';
		document.getElementById("italic").style.backgroundColor='#FFFFFF';
		document.getElementById("roman").style.color='white';
		document.getElementById("roman").style.background='black';
		
	}
	else{
		document.getElementById("italic").style.color='white';
		document.getElementById("italic").style.backgroundColor=curd_color;
		document.getElementById("roman").style.color='black';
		document.getElementById("roman").style.background='white';
	}

}

var sliderd4 = document.getElementById("design-slider");
//var outputd4 = document.getElementById("d-weighttxt");

sliderd4.oninput = function()
{	
	//outputd4.innerHTML = sliderd4.value;
	d_text.style.setProperty('--text-weight', this.value);
}

/* design 2 right */
var slider_pg3 = document.getElementById("slider-pg3");
slider_pg3.oninput = function() {
		var d = document.getElementById("many-lines");
		d.style.setProperty('--text-weight-small', this.value);
}



/*page d6-2 CAPS PAGE */
var A_caps = document.getElementById("A-d6");
var B_caps = document.getElementById("B-d6");
var C_caps = document.getElementById("C-d6");
var D_caps = document.getElementById("D-d6");
var E_caps = document.getElementById("E-d6");
var F_caps = document.getElementById("F-d6");
var G_caps = document.getElementById("G-d6");
var H_caps = document.getElementById("H-d6");
var I_caps = document.getElementById("I-d6");
var J_caps = document.getElementById("J-d6");
var K_caps = document.getElementById("K-d6");
var L_caps = document.getElementById("L-d6");
var M_caps = document.getElementById("M-d6");
var N_caps = document.getElementById("N-d6");
var O_caps = document.getElementById("O-d6");
var P_caps = document.getElementById("P-d6");
var Q_caps = document.getElementById("Q-d6");
var R_caps = document.getElementById("R-d6");
var S_caps = document.getElementById("S-d6");
var T_caps = document.getElementById("T-d6");
var U_caps = document.getElementById("U-d6");
var V_caps = document.getElementById("V-d6");
var W_caps = document.getElementById("W-d6");
var X_caps = document.getElementById("X-d6");
var Y_caps = document.getElementById("Y-d6");
var Z_caps = document.getElementById("Z-d6");

var small_caps = document.getElementById("small-caps");
var full_caps = document.getElementById("full-caps");
var regular_caps = document.getElementById("regular-caps");

var current_cap;

A_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "A";
	small_caps.children[0].innerHTML = "a";
	regular_caps.children[0].innerHTML = "a";
	A_caps.style.color = "#70CCF7";
	//typeWriter("small-caps", textArray);
}
A_caps.onmouseout = function(){
	full_caps.children[0].innerHTML = '';
	small_caps.children[0].innerHTML = '';
	regular_caps.children[0].innerHTML = '';
	A_caps.style.color = "black";
}

B_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "B";
	small_caps.children[0].innerHTML = "b";
	regular_caps.children[0].innerHTML = "b";
	B_caps.style.color = "#D7B089";
}
B_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	B_caps.style.color = "black";
}

C_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "C";
	small_caps.children[0].innerHTML = "c";
	regular_caps.children[0].innerHTML = "c";
	C_caps.style.color="#FFFF00";
}
C_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	C_caps.style.color="black";
}


D_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "D";
	small_caps.children[0].innerHTML = "d";
	regular_caps.children[0].innerHTML = "d";
	D_caps.style.color = "#FFBFF1";
}
D_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	D_caps.style.color = "black";
}


E_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "E";
	small_caps.children[0].innerHTML = "e";
	regular_caps.children[0].innerHTML = "e";
	E_caps.style.color ="#3EB449";
}
E_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	E_caps.style.color ="black";
}


F_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "F";
	small_caps.children[0].innerHTML = "f";
	regular_caps.children[0].innerHTML = "f";
	F_caps.style.color = "#DDD9D6";
}
F_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	F_caps.style.color = "black";
}


G_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "G";
	small_caps.children[0].innerHTML = "g";
	regular_caps.children[0].innerHTML = "g";
	G_caps.style.color="#FFBFF1";
}
G_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	G_caps.style.color="black";
}


H_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "H";
	small_caps.children[0].innerHTML = "h";
	regular_caps.children[0].innerHTML = "h";
	H_caps.style.color="#DDD9D6";
}
H_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	H_caps.style.color="black";
}

I_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "I";
	small_caps.children[0].innerHTML = "i";
	regular_caps.children[0].innerHTML = "i";
	I_caps.style.color="#3EB449";
}
I_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	I_caps.style.color="black";
}

J_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "J";
	small_caps.children[0].innerHTML = "j";
	regular_caps.children[0].innerHTML = "j";
	J_caps.style.color ="#FFFF00";
}
J_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	J_caps.style.color ="black";
}

K_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "K";
	small_caps.children[0].innerHTML = "k";
	regular_caps.children[0].innerHTML = "k";
	K_caps.style.color="#D7B089";
}
K_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	K_caps.style.color="black";
}

L_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "L";
	small_caps.children[0].innerHTML = "l";
	regular_caps.children[0].innerHTML = "l";
	L_caps.style.color = "#70CCF7";
}
L_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	L_caps.style.color = "black";
}

M_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "M";
	small_caps.children[0].innerHTML = "m";
	regular_caps.children[0].innerHTML = "m";
	M_caps.style.color = "#3EB449";
}
M_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	M_caps.style.color = "black";
}

N_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "N";
	small_caps.children[0].innerHTML = "n";
	regular_caps.children[0].innerHTML = "n";
	N_caps.style.color = "#DDD9D6";
}
N_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	N_caps.style.color = "black";
}

O_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "O";
	small_caps.children[0].innerHTML = "o";
	regular_caps.children[0].innerHTML = "o";
	O_caps.style.color="#FFBFF1";
}
O_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	O_caps.style.color="black";
}

P_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "P";
	small_caps.children[0].innerHTML = "p";
	regular_caps.children[0].innerHTML = "p";
	P_caps.style.color="#FFFF00";
}
P_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	P_caps.style.color="black";
}

Q_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "Q";
	small_caps.children[0].innerHTML = "q";
	regular_caps.children[0].innerHTML = "q";
	Q_caps.style.color="#DDD9D6";
}
Q_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	Q_caps.style.color="black";
}

R_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "R";
	small_caps.children[0].innerHTML = "r";
	regular_caps.children[0].innerHTML = "r";
	R_caps.style.color="#FFBFF1";
}
R_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	R_caps.style.color="black";
}


S_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "S";
	small_caps.children[0].innerHTML = "s";
	regular_caps.children[0].innerHTML = "s";
	S_caps.style.color="#70CCF7";
}
S_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	S_caps.style.color="black";
}

T_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "T";
	small_caps.children[0].innerHTML = "t";
	regular_caps.children[0].innerHTML = "t";
	T_caps.style.color="#3EB449";
}
T_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	T_caps.style.color="black";
}

U_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "U";
	small_caps.children[0].innerHTML = "u";
	regular_caps.children[0].innerHTML = "u";
	U_caps.style.color="#3EB449";
}
U_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	U_caps.style.color="black";
}

V_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "V";
	small_caps.children[0].innerHTML = "v";
	regular_caps.children[0].innerHTML = "v";
	V_caps.style.color="#FFBFF1";
}
V_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	V_caps.style.color="black";
}

W_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "W";
	small_caps.children[0].innerHTML = "w";
	regular_caps.children[0].innerHTML = "w";
	W_caps.style.color="#D7B089";
}
W_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	W_caps.style.color="black";
}

X_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "X";
	small_caps.children[0].innerHTML = "x";
	regular_caps.children[0].innerHTML = "x";
	X_caps.style.color="#FFFF00";
}
X_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	X_caps.style.color="black";
}

Y_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "Y";
	small_caps.children[0].innerHTML = "y";
	regular_caps.children[0].innerHTML = "y";
	Y_caps.style.color="#70CCF7";
}
Y_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	Y_caps.style.color="black";
}

Z_caps.onmouseover = function(){
	full_caps.children[0].innerHTML = "Z";
	small_caps.children[0].innerHTML = "z";
	regular_caps.children[0].innerHTML = "z";
	Z_caps.style.color="#FFBFF1";
}
Z_caps.onmouseout = function(){
	small_caps.children[0].innerHTML = "";
	regular_caps.children[0].innerHTML = "";
	full_caps.children[0].innerHTML = '';
	Z_caps.style.color="black";
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



// book rotation
var img = $('.book');
var offset = img.offset();
var bcont = document.getElementById("book-container");
var mouseDown = false;
var mouseMove = false;
var f_x=0;
var f_y=0;

function mouse(evt) {

    if(mouseDown ==true){
    	//mouseMove = true;
	    var center_x = (f_x - evt.pageX)/2;
	    var center_y = (f_y - evt.pageY)/2;
	    var center_z = center_y + center_x;
	    var mouse_x = -center_x + 'deg';
	    var mouse_y = center_y + 'deg';
	    //var mouse_z = center_z + 'deg';

	    //console.log("Hello");

	    document.getElementById("bookup").style.setProperty('--rotate-y', mouse_x);
	    document.getElementById("bookup").style.setProperty('--rotate-x', mouse_y);
	    //document.getElementById("bookup").style.setProperty('--rotate-z', mouse_z);
    }

}

img.mousedown(function (e) {
    mouseDown=true;
    f_x=e.pageX;
    f_y=e.pageY;
    //console.log("Move");
    //f_z=e.pageZ;
    //alert(f_z);
    $(document).mousemove(mouse);
});

$(document).mouseup(function (e) {
	/*if(mouseMove == false){
		bcont.classList.toggle('paused');
		//console.log("paused");
	}*/
    mouseDown = false;
    //mouseMove = false;
})


var play_book = document.getElementById("play-book");
var play_pause= document.getElementById("playps");
var open_book = document.getElementById("open-book");

var plps = true;

play_book.onclick = function(){
	bcont.classList.toggle('paused');
	if(plps==true){
		play_pause.classList.add('playpause');
		plps = false;
	}
	else{
		play_pause.classList.remove('playpause');
		plps = true;
	}

}

open_book.onclick = function(){
	document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
	document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
}





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

	  	console.log(data.response);

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
, "family", "tree", "cook", "culture", "fishing", "android", "mobile", "weather", "nature", "global", "game"];
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
dragElement(document.getElementById("reload"));

var exampleSpace = window.innerHeight;
var ratiohw = 1440/900;
var outputhw = exampleSpace * ratiohw;
		
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

	                	exampleSpace = window.innerHeight;
						ratiohw = 1440/900;
						outputhw = exampleSpace * ratiohw;

						document.documentElement.style.setProperty('--init-new-vw', outputhw+"px");

	                	var size = me.resize();

	                	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
						const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

						/*sticky nav bar*/
						/*sticky = crimson_top.offsetTop + crimson_top.offsetHeight + navbar.offsetHeight;
						pgExample = crimson_top.offsetTop + crimson_top.offsetHeight;*/

						/*example page ratio*/
						

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

	switch($('#crimson-book').turn('page')){
		case 5:
			document.getElementById('wght').removeEventListener('click', wghtEv);
			document.getElementById("intro").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
			document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
			break;

		case 19:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
			document.getElementById('contain').scrollIntoView({behavior: 'smooth'});	
			break;

		case 22:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='#FEC0F0';
			document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
			document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
			break;
		default:
			break;
	}
}
let wghtEv = function(){
	checkWeight('wght', 'weight_animation')
}

function checkPageRight(){
	switch($('#crimson-book').turn('page')){
		case 4:
			document.getElementById('wght').addEventListener("click",
			wghtEv,false);
			
			/*document.getElementById('wdth').addEventListener("click",
			function(){
				 checkWeight('wdth', 'width_animation')}
				 ,false);
			document.getElementById('slnt').addEventListener("click",function(){
				 checkWeight('slnt', 'slant_animation')}
				 ,false);
			document.getElementById('ital').addEventListener("click",function(){
				 checkWeight('ital', 'italic_animation')}
				 ,false);
			document.getElementById('opsz').addEventListener("click",function(){
				 checkWeight('opsz', 'opticalsize_animation')
			},false);*/

			break;
		case 6:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';	
			document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
			document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
			break;
			//alert("found");
		case 20:
			document.getElementById("intro").style.color='white';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='#FEC0F0';
			document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
			document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
			break;
		case 24:
			document.getElementById("Example-1").setAttribute("style", "scroll-snap-align: center;");
			//document.getElementById("Example-2").setAttribute("style", "scroll-snap-align: center;");
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




//document.documentElement.style.setProperty('--init-new-vw', outputhw);


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

	document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
	document.getElementById('contain').scrollIntoView({behavior: 'smooth'});

	document.getElementById("intro").style.color='#FEC0F0';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='white';
});

$("#design").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 6);
	document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
	document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
	document.getElementById("intro").style.color='white';
	document.getElementById("design").style.color='#FEC0F0';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='white';
	accessintro = false;
});

$("#example").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 23);
	document.getElementById("Example-1").setAttribute("style", "scroll-snap-align: top;");
	document.getElementById("Example-1").scrollIntoView({behavior: 'smooth'});
	document.getElementById("intro").style.color='white';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='#FEC0F0';
	document.getElementById("recognition").style.color='white';
	accessintro = true;
});

$("#recognition").click(function(e){
	e.preventDefault();
	$('#crimson-book').turn('page', 22);
	document.getElementById("contain").setAttribute("style", "scroll-snap-align: center;");
	document.getElementById('contain').scrollIntoView({behavior: 'smooth'});
	document.getElementById("intro").style.color='white';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("recognition").style.color='#FEC0F0';
	accessintro = false;
});

/* transcript page */

var tk_box = document.getElementById("tweak-bx");
var tk_disp = document.getElementById("tk-disp");
var tk_circ = document.getElementById("tk-circ");
var tswap = 0;

var tk_out = document.getElementById("tk-output");
var tk_slide = document.getElementById("slider-tk");
var e3_h1 = document.getElementById("h-1-container");
var e3_main = document.getElementById("h-main");
var e3_perform = document.getElementById("perform-container");
var e3_about = document.getElementById("about-container");
var e3_th = document.getElementById("th-info");
var e3_right = document.getElementById("Example-right-page-3");

tk_slide.addEventListener("input", function(){
	tk_out.innerHTML = tk_slide.value;

	var a = Math.floor((tk_slide.value/100) * 300);
	var b = Math.floor((tk_slide.value/100) * 100);
	var c = Math.floor((tk_slide.value/100) * 200);
	var mn = Math.floor(((tk_slide.value)/100) * 100);

	e3_h1.style.setProperty('--e3-text-weight', a+400);
	e3_perform.style.setProperty('--e3-text-weight', b+400);
	e3_about.style.setProperty('--e3-text-weight', b+400);
	e3_th.style.setProperty('--e3-text-weight', b+400);
	e3_right.style.setProperty('--e3-text-weight', c+400);
	e3_main.style.setProperty('--e3-text-main', mn+ 800);
	console.log(a+400);
});

tk_box.addEventListener("click", function(){
	//if(tk_box.style.pointerEvents=='auto' || tk_box.style.pointerEvents==''){
		
		tk_box.style.setProperty('--init-tk-width', 563); 
		tk_disp.style.display = 'block';

		tk_box.style.pointerEvents = "none";
		tk_disp.style.pointerEvents = 'auto';
		//console.log("TK-DISP: " + tk_disp.style.pointerEvents);
		//console.log("TK-BOX: " + tk_box.style.pointerEvents);
		//tswap = 1;
	//}
	
});

tk_circ.addEventListener("click", function(){
	event.stopPropagation();

	tk_box.style.setProperty('--init-tk-width', 92);  
	tk_disp.style.display = 'none';

	tk_box.style.pointerEvents = 'auto';
	tk_disp.style.pointerEvents = 'none';
	//console.log("TK-DISP: " + tk_disp.style.pointerEvents);
	//console.log("TK-BOX: " + tk_box.style.pointerEvents);
});


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
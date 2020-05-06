var num = 0;
var max = document.querySelectorAll("[id='pg']").length-2;
var elms = document.querySelectorAll("[id='pg']");
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
	elms[16].style.display = 'block';
	elms[17].style.display = 'block';

	num=16;
}

function recognition(){
	document.getElementById("recognition").style.color='#FEC0F0';
	document.getElementById("design").style.color='white';
	document.getElementById("example").style.color='white';
	document.getElementById("intro").style.color='white';
	elms[num].style.display = 'none';
	elms[num+1].style.display = 'none';
	elms[26].style.display = 'block';
	elms[27].style.display = 'block';

	num=26;
}

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
		case 16:
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("intro").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 26:
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


	switch(num){
		case 2:
			document.getElementById("intro").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 14:
			document.getElementById("design").style.color='#FEC0F0';
			document.getElementById("intro").style.color='white';
			document.getElementById("example").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		case 24:
			document.getElementById("example").style.color='#FEC0F0';
			document.getElementById("design").style.color='white';
			document.getElementById("intro").style.color='white';
			document.getElementById("recognition").style.color='white';
			break;
		default:
			break;
	}

}

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

slider.oninput = function() {
		output.innerHTML = slider.value;
		var d = document.getElementById("OO");
		d.style.setProperty('--text-weight', this.value);

		var right = (this.value / 900) * -25;
		d.style.setProperty('--astr-margin-right', right);
}

sliderY.oninput = function() {
		outputY.innerHTML = sliderY.value;
		a = "wght" + this.value;
		var d = document.getElementById("YY");
		d.style.setProperty('--text-weight', this.value);
}

slider5.oninput = function() {
		output5.innerHTML = slider5.value;
		a = "wght" + this.value;
		var d = document.getElementById("FVFV");
		d.style.setProperty('--text-weight', this.value);
}

slidert.oninput = function() {
		outputt.innerHTML = slidert.value;
		a = "wght" + this.value;
		var d = document.getElementById("tt");
		d.style.setProperty('--text-weight', this.value);
}

slidere.oninput = function() {
		outpute.innerHTML = slidere.value;
		a = "wght" + this.value;
		var d = document.getElementById("ee");
		d.style.setProperty('--text-weight', this.value);
}

sliderr.oninput = function() {
		outputr.innerHTML = sliderr.value;
		a = "wght" + this.value;
		var d = document.getElementById("rr");
		d.style.setProperty('--text-weight', this.value);
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

slider_pg3.oninput = function() 
{
		var d = document.getElementById("many-lines");
		d.style.setProperty('--text-weight-small', this.value);
}


var elems = document.getElementById("triangle-containerz").getElementsByTagName("img");
function color_red()
{
	document.getElementById("drink-text").style.color='red';
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
	document.getElementById("drink-text").style.color='#FFEB00';
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
	document.getElementById("drink-text").style.color='#70CCF7';
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
	document.getElementById("drink-text").style.color='#D7B089';
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
	document.getElementById("drink-text").style.color='#FFC0EF';
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
	document.getElementById("drink-text").style.color='black';
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
	document.getElementById("drink-text").style.color='#3EB449';
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

/*text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;*/
function color_white()
{
	document.getElementById("drink-text").style.color='white';
	for (var i = 0; i<elems.length; i++) {
        if (elems[i].className == 'triangle8') {
            elems[i].style.visibility = 'visible';
            document.getElementById("drink-text").style.textShadow =  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";  
        }
        else {
            elems[i].style.visibility = 'hidden';
        }
    }
}


function d4click_roman(){
	document.getElementById("drink-text").style.fontStyle='normal';
	document.getElementById("roman").style.background='red';
	document.getElementById("roman").style.color='white';

	document.getElementById("italic").style.color='black';
	document.getElementById("italic").style.background='white';
}

function d4click_italic(){
	document.getElementById("drink-text").style.fontStyle='italic';
	document.getElementById("italic").style.background='red';
	document.getElementById("italic").style.color='white';

	document.getElementById("roman").style.color='black';
	document.getElementById("roman").style.background='white';
}

var d4_size_elems = document.getElementById("d4-size-containers").getElementsByTagName("li");

function d4xs()
{
	document.getElementById("drink-text").style.setProperty("--init-line-height", 30);
	document.getElementById("drink-text").style.setProperty("--text-size-L", 30);

	for (var i = 0; i<d4_size_elems.length; i++) {
        if (d4_size_elems[i].className == 'd4xs') {
        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
            d4_size_elems[i].style.backgroundColor='red';
            d4_size_elems[i].style.color='white';
        }
        else {

            d4_size_elems[i].style.backgroundColor='white';
            d4_size_elems[i].style.color='black';
            d4_size_elems[i].style.setProperty("--init-border-color", "white");
            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
        }
    }
}

function d4s()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 60);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 60);

	for (var i = 0; i<d4_size_elems.length; i++) {
        if (d4_size_elems[i].className == 'd4s') {
        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
            d4_size_elems[i].style.backgroundColor='red';
            d4_size_elems[i].style.color='white';
        }
        else {

            d4_size_elems[i].style.backgroundColor='white';
            d4_size_elems[i].style.color='black';
            d4_size_elems[i].style.setProperty("--init-border-color", "white");
            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
        }
    }
}

function d4m()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 120);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 108);

	for (var i = 0; i<d4_size_elems.length; i++) {
        if (d4_size_elems[i].className == 'd4m') {
        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
            d4_size_elems[i].style.backgroundColor='red';
            d4_size_elems[i].style.color='white';
        }
        else {

            d4_size_elems[i].style.backgroundColor='white';
            d4_size_elems[i].style.color='black';
            d4_size_elems[i].style.setProperty("--init-border-color", "white");
            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
        }
    }
}

function d4l()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 180);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 140);

	for (var i = 0; i<d4_size_elems.length; i++) {
        if (d4_size_elems[i].className == 'd4l') {
        	d4_size_elems[i].style.setProperty("--init-border-colorL", "#231F20");
            d4_size_elems[i].style.backgroundColor='red';
            d4_size_elems[i].style.color='white';
        }
        else {

            d4_size_elems[i].style.backgroundColor='white';
            d4_size_elems[i].style.color='black';
            d4_size_elems[i].style.setProperty("--init-border-color", "white");
        }
    }
}

function d4xl()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 195);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 170);

	for (var i = 0; i<d4_size_elems.length; i++) {
        if (d4_size_elems[i].className == 'd4xl') {
        	d4_size_elems[i].style.setProperty("--init-border-color", "#231F20");
            d4_size_elems[i].style.backgroundColor='red';
            d4_size_elems[i].style.color='white';
        }
        else {

            d4_size_elems[i].style.backgroundColor='white';
            d4_size_elems[i].style.color='black';
            d4_size_elems[i].style.setProperty("--init-border-color", "white");
            d4_size_elems[i].style.setProperty("--init-border-colorL", "white");
        }
    }


}

var sliderd4 = document.getElementById("design-slider");
var outputd4 = document.getElementById("d-weighttxt");

sliderd4.oninput = function() {
		outputd4.innerHTML = sliderd4.value;
		var d = document.getElementById("drink-text");
		d.style.setProperty('--text-weight', this.value);
}









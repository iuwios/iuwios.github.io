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
var cur_color = "#EB0000";
var cur_element = "d4_l";
var black_white = "#FFFFFF";
var rom_ital='italic';
var night_mode = false;

slider_pg3.oninput = function() 
{
		var d = document.getElementById("many-lines");
		d.style.setProperty('--text-weight-small', this.value);
}


var elems = document.getElementById("triangle-containerz").getElementsByTagName("img");
function color_red()
{
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

/*text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;*/
function color_white()
{
	cur_color='#FFFFFF';
	document.getElementById("drink-text").style.color='white';
	document.getElementById(cur_element).style.backgroundColor=cur_color;
	black_white = "#000000";
	document.getElementById(cur_element).style.color=black_white;
	document.getElementById("roman").style.backgroundColor='#000000';
	document.getElementById("roman").style.color='#FFFFFF';
	document.getElementById("italic").style.backgroundColor='#000000';
	document.getElementById("italic").style.color='#FFFFFF';
	document.getElementById(rom_ital).style.backgroundColor='#FFFFFF';
	document.getElementById(rom_ital).style.color='#000000';
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
		document.getElementById("roman").style.color='#FFFFFF';
		document.getElementById("roman").style.backgroundColor='black';
	}
	else{
		document.getElementById("roman").style.color='white';
		document.getElementById("roman").style.backgroundColor=cur_color;
	}

	document.getElementById("italic").style.color='black';
	document.getElementById("italic").style.background='white';
}

function d4click_italic()
{
	rom_ital='italic';
	document.getElementById("drink-text").style.fontStyle='italic';
	if(cur_color=='#FFFFFF'){
		document.getElementById("italic").style.color='#FFFFFF';
		document.getElementById("italic").style.backgroundColor='black';
		
	}
	else{
		document.getElementById("italic").style.color='white';
		document.getElementById("italic").style.backgroundColor=cur_color;
	}


	document.getElementById("roman").style.color='black';
	document.getElementById("roman").style.background='white';
}

var d4_size_elems = document.getElementById("d4-size-containers").getElementsByTagName("li");

function d4xs()
{
	document.getElementById("drink-text").style.setProperty("--init-line-height", 30);
	document.getElementById("drink-text").style.setProperty("--text-size-L", 30);
	cur_element="d4_xs";

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

function d4s()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 60);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 60);
	cur_element="d4_s";

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

function d4m()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 120);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 108);
	cur_element="d4_m";

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

function d4l()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 180);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 140);
	cur_element="d4_l";

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

function d4xl()
{
	document.getElementById("drink-text").style.setProperty("--text-size-L", 195);
	document.getElementById("drink-text").style.setProperty("--init-line-height", 170);
	cur_element="d4_xl";

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
          	switch(s.options[i].innerHTML){
          		case "ENGLISH":
          			alert("English title change");
          			break;
          		case "AFRIKAANS":
          			alert("AFRIKAANS title changed");
          			break;
          		default:
          			break;
          	}
         
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
    	//alert(this.innerHTML);
		switch(this.innerHTML){
	  		case "ENGLISH":
	  			alert("English title change");
	  			break;
	  		case "AFRIKAANS":
	  			alert("AFRIKAANS title changed");
	  			break;
	  		default:
	  			break;
	  		}
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










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


/* Menu animations */
var menu1 = "hidden";
var menu2 = "hidden";
var menu3 = "hidden";

function toggleMenu1() {
    if (menu1=="hidden") {
	$("#menu2").fadeOut('fast');
	menu2 = "hidden";
	$("#menu3").fadeOut('fast');
	menu3 = "hidden";
	$("#menu1").delay(200).fadeIn('fast');
	menu1 = "shown";
    }
    else {
	$("#menu1").fadeOut('fast');
	menu1 = "hidden";
    }
}

function toggleMenu2() {
    if (menu2=="hidden") {
	$("#menu1").fadeOut('fast');
	menu1 = "hidden";
	$("#menu3").fadeOut('fast');
	menu3 = "hidden";
	$("#menu2").delay(200).fadeIn('fast');
	menu2 = "shown";
    }
    else {
	$("#menu2").fadeOut('fast');
	menu2 = "hidden";
    }
}

function toggleMenu3() {
    if (menu3=="hidden") {
	$("#menu1").fadeOut('fast');
	menu1 = "hidden";
	$("#menu2").fadeOut('fast');
	menu2 = "hidden";
	$("#menu3").delay(200).fadeIn('fast');
	menu3 = "shown";
    }
    else {
	$("#menu3").fadeOut('fast');
	menu3 = "hidden";
    }
}

/* End of Menu animations */
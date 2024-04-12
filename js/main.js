var myVar;

function timeout() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function showMenu() {
    if (document.getElementById("mobile menu").style.display === "inline") {
        document.getElementById("mobile menu").style.display = "none";
    } else {
        document.getElementById("mobile menu").style.display = "inline";
    }
}

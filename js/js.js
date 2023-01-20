function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function popup() {
    w = open("html/popup.html", 'Avis', 'width=500,height=300,toolbar=no,scrollbars=no,resizable=no,location=no,top=200,left=500');
}
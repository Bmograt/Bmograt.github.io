function toggleNavMenu() {
    var x = document.getElementById("nav-container");
    if (x.className === "show") {
        x.className = "hide";
    } else {
        x.className = "show";
    }
}  
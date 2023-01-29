function displayChange(elId, show = true) {
    console.log(elId, show)
    var x = document.getElementById(elId);
    if (show) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



let els = [...document.getElementsByClassName("prevent-wrtie")];
els.forEach(element => {
    element.onkeydown = function (event) {
        if (event.keyCode === 38 || event.keyCode == 40)
            return;
    }
});

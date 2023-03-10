function displayChange(elId, show = true) {
    var x = document.getElementById(elId);
    if (show) {
        x.style.display = "block";
        x.classList.remove('d-none');
    } else {
        x.style.display = "none";
    }
}

function readOnlyChange(elId, readOnly = true) {
    document.getElementById(elId).disabled = readOnly;
}


function initNumbersElements() {
    let els = [...document.getElementsByClassName("input-number")];
    els.forEach(element => {
        element.onkeydown = function (event) {
            let allowedChar = [8, 46, ...Array.from({ length: 4 }, (_, i) => i + 37), ...Array.from({ length: 10 }, (_, i) => i + 96)]
            if (allowedChar.indexOf(event.keyCode) > -1)
                return;
            event.preventDefault();
            event.stopPropagation();
        }
    });
}

function initCountriesOptions() {
    let countries = ['المملكة العربية السعودية', 'مصر', 'البحرين', 'الكويت', 'المغرب', 'السودان', 'تركيا', 'اليمن'];
    let body = "";
    countries.forEach(c => body += `<option>${c}</option>`);

    let countriesEls = [...document.getElementsByClassName("countries")];
    countriesEls.forEach(element => {
        element.innerHTML = body;
    });

    let cities = ['الرياض', 'جده', 'المدينه المنوره', 'الدمام', 'الاحساء'];
    let body2 = "";
    cities.forEach(c => body2 += `<option>${c}</option>`);

    let citiesEls = [...document.getElementsByClassName("cities")];
    citiesEls.forEach(element => {
        element.innerHTML = body2;
    });
}

function initTextList() {
    let row = (index) => `              
    <div class="d-flex align-items-center mt-2">
        <label>${index}- </label>&nbsp;
        <input type="text" class="form-control flex-grow-1">
    </div>`;

    let body = "";
    for (i = 1; i <= 3; i++) {
        body += row(i);
    }

    let lists = [...document.getElementsByClassName("text-list")];
    lists.forEach(element => {
        element.innerHTML = body;
    });
}
function initRequired() {
    let els = [...document.querySelectorAll("[required]")];
    els.forEach(e => {
        // e.setAttribute("style", "border-color: #efbdbd;")
        let label = e.previousElementSibling;
        label.innerHTML = label.innerHTML + '<span style="color: red;">*</span>';
    })
}


initNumbersElements();
initCountriesOptions();
initTextList();
initRequired();
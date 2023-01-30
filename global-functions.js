function displayChange(elId, show = true) {
    var x = document.getElementById(elId);
    if (show) {
        x.style.display = "block";
        x.classList.remove('d-none');
    } else {
        x.style.display = "none";
    }
}


function initNumbersElements() {
    let els = [...document.getElementsByClassName("input-number")];
    els.forEach(element => {
        element.onkeydown = function (event) {
            if (event.keyCode === 38 || event.keyCode == 40)
                return;
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
    for (i = 1; i <= 5; i++) {
        body += row(i);
    }
    
    let lists = [...document.getElementsByClassName("text-list")];
    lists.forEach(element => {
        element.innerHTML = body;
    });
}


initNumbersElements();
initCountriesOptions();
initTextList();
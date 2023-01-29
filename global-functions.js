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
    let els = [...document.getElementsByClassName("prevent-wrtie")];
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


initNumbersElements();
initCountriesOptions();
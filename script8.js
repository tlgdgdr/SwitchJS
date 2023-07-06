function change() {
    window.location.href = 'https://www.google.com';
}
function goBack() {
    window.history.back();
}

window.onload = function(){
    document.getElementById("browser").innerHTML =  window.navigator.userAgent;
    document.getElementById("version").innerHTML =  window.navigator.appVersion;
    document.getElementById("height").innerHTML =  window.screen.height;
    document.getElementById("width").innerHTML =  window.screen.width;
    
    document.getElementById('cookie').addEventListener('click',(e) =>{
        let cookieName = "My Cookie";
        let cookieValue = "Cookie Value";
        document.cookie = cookieName + " = " + cookieValue;
    });
        
    document.querySelector("#highlight").addEventListener('click', (e) => {
        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach((p) => {
            p.classList.add('highlight');
        });
    });

    document.querySelector("#replace").addEventListener('click', (e) =>{
        document.querySelector('.replace').innerText = "THIS IS A NEW PARAGRAPH";
    });
}

function changeBodyColor() {
    document.body.style.backgroundColor = "yellow";
}


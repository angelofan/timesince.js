var log = document.getElementById("test");

function test(name, a, b) {

    var result;
    if(a === b) 
        result = "pass";
    else 
        result = "fail";

    log.innerHTML += '<div class="' + result  + '"><strong>'+ name + '</strong><br>got: ' + a + '<br>expecting: ' + b + '</div>'
    
}

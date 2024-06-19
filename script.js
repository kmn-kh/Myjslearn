function myFunction() {
    console.log("Function is running repeatedly");
    if (document.getElementById("num1").style.backgroundColor == "") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num1');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        var eleme = document.querySelectorAll('.num10');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 1
    else if (document.getElementById("num1").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num2');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num1');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = 'white';
        });
    }
    // 2
    else if (document.getElementById("num2").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num3');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num2');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 3
    else if (document.getElementById("num3").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num4');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num3');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 4
    else if (document.getElementById("num4").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num5');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num4');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 5
    else if (document.getElementById("num5").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num6');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num5');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 6
    else if (document.getElementById("num6").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num7');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num6');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 7
    else if (document.getElementById("num7").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num8');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num7');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 8
    else if (document.getElementById("num8").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num9');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num8');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
    // 9
    else if (document.getElementById("num9").style.backgroundColor == "aqua") {
        //Select all elements with the class name 'me'
        var elements = document.querySelectorAll('.num10');
        elements.forEach(function (element) {
            element.style.backgroundColor = 'aqua';
        });//Select all elements with the class name 'me'
        var elem = document.querySelectorAll('.num9');
        elem.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
        //Select all elements with the class name 'me'
        var eleme = document.querySelectorAll('.num1');
        eleme.forEach(function (elemen) {
            elemen.style.backgroundColor = '';
        });
    }
}

// Run myFunction every 2 seconds (2000 milliseconds)
var a = setInterval(myFunction, 2000);

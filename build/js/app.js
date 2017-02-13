(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function() {

var current,
    screen,
    output,
    limit,
    zero,
    period,
    operator;

    screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");

      var len = elem.length;

      for(var i = 0; i < len; i++ ) {

        elem[i].addEventListener("click",function() {

            num = this.value;

            output = screen.innerHTML +=num;

            limit = output.length;

         if(limit > 16 ) {

         alert("Sorry no more input is allowed");

       }

     },false);

    }

    document.querySelector(".zero").addEventListener("click",function() {

        zero = this.value;

        if(screen.innerHTML === "") {

           output = screen.innerHTML = zero;
        }

        else if(screen.innerHTML === output) {

         output = screen.innerHTML +=zero;

        }

    },false);

    document.querySelector(".period").addEventListener("click",function() {

        period = this.value;

        if(screen.innerHTML === "") {

         output = screen.innerHTML = screen.innerHTML.concat("0.");

         }

        else if(screen.innerHTML === output) {

          screen.innerHTML = screen.innerHTML.concat(".");

        }

    },false);


    document.querySelector("#eqn-bg").addEventListener("click",function() {

      if(screen.innerHTML === output) {

        screen.innerHTML = eval(output);
      }

      else {
            screen.innerHTML = "";
      }

    },false);

 document.querySelector("#delete").addEventListener("click",function() {

        screen.innerHTML = "";

    },false);


     var elem1 = document.querySelectorAll(".operator");

      var len1 = elem1.length;

      for(var i = 0; i < len1; i++ ) {

        elem1[i].addEventListener("click",function() {

        operator = this.value;

         if(screen.innerHTML === "") {

            screen.innerHTML = screen.innerHTML.concat("");

        }

        else if(output) {

            screen.innerHTML = output.concat(operator);

        }

    },false);

      }
}

},{}]},{},[1]);

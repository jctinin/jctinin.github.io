window.onload = function () {
  function reset(car1, car2, car3) {
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    car3.style.marginLeft = 0;
    clearInterval(car1.timer);
    clearInterval(car2.timer);
    clearInterval(car3.timer);
    car1.style.animation = ""; 
    car2.style.animation = ""; 
    car3.style.animation = ""; 
    button.disabled = false;
  }

  var button = document.querySelector("button");
  var car1 = document.querySelector('.car1');
  car1.style.marginLeft = 0;
  var car2 = document.querySelector('.car2');
  car2.style.marginLeft = 0;
  var car3 = document.querySelector('.car3');
  car3.style.marginLeft = 0;

  button.addEventListener("click", function (event) {
    button.disabled = true;

    console.log(car1.style.animation)
    car1.style.animation = 'racing 1700ms ease-out';
    car1.style.animationFillMode = 'forwards'
    car1.style.animationIterationCount = '2'
    car1.style.animationDirection = 'alternate'
    car1.addEventListener("animationend", car1EventEnd)

    car2.style.animation = 'racing 1400ms ease-out';
    car2.style.animationFillMode = 'forwards'
    car2.style.animationIterationCount = '2'
    car2.style.animationDirection = 'alternate'
    car2.addEventListener("animationend", car2EventEnd)

    car3.style.animation = 'racing 1000ms ease-out';
    car3.style.animationFillMode = 'forwards'
    car3.style.animationIterationCount = '2'
    car3.style.animationDirection = 'alternate'
    car3.addEventListener("animationend", car3EventEnd)
  });


  function car1EventEnd() {
    alert("Carro 1 ganhou!");
    car3.removeEventListener("animationend", car1EventEnd)
    car2.removeEventListener("animationend", car2EventEnd)
    reset(car1, car2, car3);
  }

  function car2EventEnd() {
    alert("Carro 2 ganhou!"); 
    car1.removeEventListener("animationend", car1EventEnd)
    car3.removeEventListener("animationend", car3EventEnd)
    reset(car1, car2, car3);
  }

  function car3EventEnd() {
    alert("Carro 3 ganhou!"); 
    car1.removeEventListener("animationend", car1EventEnd)
    car2.removeEventListener("animationend", car2EventEnd)
    reset(car1, car2, car3);
  }
}

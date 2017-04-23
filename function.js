function sum(first, second) {
  return first + second;
}

//  console.log(sum(7, 3));
function multiply(unu, doi) {
  return unu * doi;
}

// console.log(multiply(5, 'ion'))

function calculeazaSalariu(salariu) {
  const impozit = 0.08 * salariu;
  const asigurare = 0.09 * salariu;
  const impozitTotal = impozit + asigurare;
  const salariuNet = salariu - impozitTotal;

  return salariuNet;
}

const deCalculat = calculeazaSalariu(5000);
// console.log(deCalculat)
// "Masa5" -> "Masa"

// ["M","a","s","a","5"]
// function stringClean() {
// const arr = 'Masa5'.split('');
// const arrNou = [];

// for (let i = 0; i < arr.length - 1; i += 1) {
// console.log(i, arr[i])
// arrNou.push(arr[i]);
// }

// console.log(arr);
// var rime = arrNou.join("")
//  console.log(rime)
function stringClean(str) {
  var arr = str.split("");
  var cifre = "0123456789".split('');
  var arrResultat = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    if (cifre.indexOf(arr[i]) === -1) {
      arrResultat.push(arr[i]);
    }
  }

  return arrResultat.join("");
}

function stringClean2(str) {
  return str.replace(/\d/g, '');
}


console.log(stringClean("Masa"));
console.log(stringClean("Ion"));
console.log(stringClean("I2o4n"));
console.log(stringClean("6346"));






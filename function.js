function sum(first, second) {
  return first + second;
}

//  console.log(sum(7, 3));
function multiply(unu, doi) {
  return unu * doi;
}

// console.log(multiply(5, 'ion'))

function calculeazaSalariu(salariu) {
  let impozit = 0.08 * salariu;
  let asigurare = 0.09 * salariu;
  let impozitTotal = impozit + asigurare;
  let salariuNet = salariu - impozitTotal;

  return salariuNet;
}

let deCalculat = calculeazaSalariu(5000);
console.log(deCalculat);


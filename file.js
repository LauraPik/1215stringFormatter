// Pateikę stringą, kurį sudaro tik raidės, parašykite funkciją, kuri gražina performatuotą stringą pagal pvz.

// pasizymiu input
let input = document.querySelector('input');


// susikuriu funkcija, kuri konvertuoja ivesta input i norima formata
const stringFormatter = str => {
  let output = document.querySelector('.output');
    
  let word = '';
  
  for(let i=0; i<str.length; i++){
    // su repeat pakartoju raides kiekvieno ciklo interacijos skaiciumi ir pridedu i nauja kintamaji word
    word += str[i].repeat(i+1) 
    // atskiriu zodzio raides bruksneliu 
    if(i< str.length -1){
      word += '-';
    }
  }

  console.log(word)
  // priskiriu gauta zodi i p 
   output.innerHTML = word;

  };



// pasizymiu input ir kvieciu susikurta funkcija, kuriai paduodu input parametra
input.addEventListener('input', () => {
    stringFormatter(input.value)
    
  });
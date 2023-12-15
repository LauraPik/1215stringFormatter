// Pateikę stringą, kurį sudaro tik raidės, parašykite funkciją, kuri gražina performatuotą stringą pagal pvz.

let input = document.querySelector('input');


const stringFormatter = str => {
    const output = document.querySelector('.output');
    output.textContent = str.value.split("").join("-");
  };

input.addEventListener('input', () => {
    stringFormatter(input)
    
  });
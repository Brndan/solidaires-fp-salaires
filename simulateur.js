
const inflationDepuis1995 = 42.5;
const augmentationIndiceDepuis1995 = 14.3;

// Événement 
const menuEchelon = document.querySelector('select[id="echelon"]');
menuEchelon.addEventListener("change", () => {
  let indice = parseInt(document.getElementById('echelon').value,10);
  console.log(indice);
});

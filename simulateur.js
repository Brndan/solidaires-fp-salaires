
const inflationDepuis1995 = 42.5;
const augmentationIndiceDepuis1995 = 14.3;
const ptIndiceActuel = 4.68;

// Événement 
const menuEchelon = document.querySelector('select[id="echelon"]');
menuEchelon.addEventListener("change", () => {
  let indice = parseInt(document.getElementById('echelon').value,10);
  let traitementBrutActuel = parseFloat(indice*ptIndiceActuel).toPrecision(6);
  console.log(traitementBrutActuel);
});


const inflationDepuis1995 = 48.83; // en 2022
const augmentationIndiceDepuis1995 = 18.29; // en 2022
const ptIndiceActuel = 4.85; // en 2022

// Événement 
const menuEchelon = document.querySelector('select[id="echelon"]');
menuEchelon.addEventListener("change", () => {
  if (document.getElementById('echelon').value == "0") {
    document.getElementById('result').style.display = 'none';
    return;
  }
  document.getElementById('result').style.display = 'block';
  let indice = parseInt(document.getElementById('echelon').value,10);
  let traitementBrutActuel = indice * ptIndiceActuel;
  let traitementInflationCompensee = traitementBrutActuel + traitementBrutActuel * ((inflationDepuis1995 - augmentationIndiceDepuis1995)/100);
  let baissePourcentage = inflationDepuis1995 - augmentationIndiceDepuis1995;
  let manqueMensuel = traitementInflationCompensee - traitementBrutActuel;
  let manqueAnnuel = manqueMensuel * 12;
  document.getElementById("traitementIndiciaireBrut").innerHTML = (Math.round(traitementBrutActuel * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("traitementInflationCompensee").innerHTML = (Math.round(traitementInflationCompensee * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("manqueChaqueMois").innerHTML = (Math.round(manqueMensuel * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("manqueChaqueAnnee").innerHTML = (Math.round(manqueAnnuel * 100) / 100).toLocaleString() + "&nbsp;€";

});

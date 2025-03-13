// <script> // pour site de Solidaires
const inflationDepuis2000 = 52.30; // en décembre 2024
const augmentationIndiceDepuis2000 = 15.37; // en décembre 2024
const ptIndiceActuel = 4.92; // en décembre 2024

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
  let traitementInflationCompensee = traitementBrutActuel + traitementBrutActuel * ((inflationDepuis2000 - augmentationIndiceDepuis2000)/100);
  let baissePourcentage = inflationDepuis2000 - augmentationIndiceDepuis2000;
  let manqueMensuel = traitementInflationCompensee - traitementBrutActuel;
  let manqueAnnuel = manqueMensuel * 12;
  document.getElementById("traitementIndiciaireBrut").innerHTML = (Math.round(traitementBrutActuel * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("traitementInflationCompensee").innerHTML = (Math.round(traitementInflationCompensee * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("manqueChaqueMois").innerHTML = (Math.round(manqueMensuel * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("manqueChaqueAnnee").innerHTML = (Math.round(manqueAnnuel * 100) / 100).toLocaleString() + "&nbsp;€";

});

// Pour le site de Solidaires
// </script>

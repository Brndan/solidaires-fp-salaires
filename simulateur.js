
const inflationDepuis1995 = 42.5;
const augmentationIndiceDepuis1995 = 14.3;
const ptIndiceActuel = 4.68;

// Événement 
const menuEchelon = document.querySelector('select[id="echelon"]');
menuEchelon.addEventListener("change", () => {
  if (document.getElementById('echelon').value == "0") {
    return;
  }
  let indice = parseInt(document.getElementById('echelon').value,10);
  let traitementBrutActuel = indice * ptIndiceActuel;
  let traitementInflationCompensee = traitementBrutActuel + traitementBrutActuel * ((inflationDepuis1995 - augmentationIndiceDepuis1995)/100);
  console.log("Devrait être " + traitementInflationCompensee);
  let baissePourcentage = inflationDepuis1995 - augmentationIndiceDepuis1995;
  let manqueMensuel = traitementInflationCompensee - traitementBrutActuel;
  let manqueAnnuel = manqueMensuel * 12;
  document.getElementById("traitementIndiciaireBrut").innerHTML = (Math.round(traitementBrutActuel * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("traitementInflationCompensee").innerHTML = (Math.round(traitementInflationCompensee * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("manqueChaqueMois").innerHTML = (Math.round(manqueMensuel * 100) / 100).toLocaleString() + "&nbsp;€";
  document.getElementById("manqueChaqueAnnee").innerHTML = (Math.round(manqueAnnuel * 100) / 100).toLocaleString() + "&nbsp;€";

});



/* 
L'inflation depuis entre 1995 et 2019 est de XXX % 
Le point d'indice a augmenté durant la même période de XX %

Votre traitement indiciaire brut est aujourd'hui de XXXX € mensuels (hors primes).

Si le point d'indice avait augmenté en suivant l'inflation depuis 1995, votre traitement devrait être de XXXX €

Votre traitement brut a baissé relativement de XX% : il manque mensuellement XXXX€ / annuellement XXXX€ */
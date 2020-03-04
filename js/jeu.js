import tableau from './tableau.js';
import newArme from './newarme.js';
import newPersonnage from './newpersonnage.js';
import majPerso from './majperso.js';
import placement from './placement.js';
import tour from './tour.js';
import deplacement from './deplacement.js';
import ramasseArme from './ramassearme.js';
import combat from './combat.js';

$('#finTour').hide();



$('#newGame').on('click', function(){
  tableau();
  const armes = newArme();
  const persos = newPersonnage(armes);
  majPerso(persos);
  placement(armes, persos);
  $('#newGame').hide();
  $('#finTour').show();
  let aQuiLeTour = tour(persos);
  let placementFinal = deplacement(aQuiLeTour, persos);
  document.getElementById('finTour').addEventListener('click', function(e){
    e.stopPropagation();
    placementFinal = deplacement(aQuiLeTour, persos);
    ramasseArme(placementFinal, armes, persos);
    combat(placementFinal, persos, aQuiLeTour);
  })

})

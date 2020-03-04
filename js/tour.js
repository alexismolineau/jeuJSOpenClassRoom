export default function tour(persos){
  let tourJ1 = true;
  let tourJ2 = false;
  let perso = persos.joueur1.pseudo;
  document.getElementById('tour').innerHTML = 'Au tour de ' + perso;

  function tour2(persos){
  document.getElementById('finTour').addEventListener('click', function(event){
    event.stopPropagation();
    tourJ1 = tourJ2;
    tourJ2 = !tourJ1;

    if(tourJ1 === true){
      perso = persos.joueur1.pseudo;
    }
    if(tourJ2 === true){
      perso = persos.joueur2.pseudo;
    }
    document.getElementById('tour').innerHTML = 'Au tour de ' + perso;
    return {tourJ1, tourJ2};
  })
  }


  tour2(persos);
  return {tourJ1, tourJ2};

}

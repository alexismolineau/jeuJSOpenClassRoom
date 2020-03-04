import possibilite from './possibilite.js';

let placeJ1;
let placeJ2;

export default function deplacement(aQuiLeTour, persos){

  let possJ1 = possibilite(persos, aQuiLeTour);
  let possJ2 = possibilite(persos, aQuiLeTour);
  let tour = [];
  let joueur;
  let miseEnForme = true;

  if(aQuiLeTour.tourJ1 === true){
    tour = possJ1;
    joueur = persos.joueur1;
  }
  if(aQuiLeTour.tourJ2 === true){
    tour = possJ2;
    joueur = persos.joueur2;
  }

  aQuiLeTour.tourJ1 = !aQuiLeTour.tourJ1;
  aQuiLeTour.tourJ2 = !aQuiLeTour.tourJ2;

  let tour2 = possibilite(persos, aQuiLeTour);

    for (let i = 0; i < tour.length; i++) {
      $('#' + tour[i]).css('backgroundColor', 'cyan')
      $('#' + tour[i]).on('mouseover', function a(){
        red(event)

      });

      $('#' + tour[i]).on('mouseout', function(e){
        e.target.style.backgroundColor = 'cyan';
      });
      $('#' + tour[i]).on('click', function b(){maj(event, joueur)});
    }

  function red(event){
    event.target.style.backgroundColor = 'red';
      $('#finTour').on('click', function(event){
        event.stopPropagation();
        if(miseEnForme === true) {
        for (let i = 0; i < tour.length; i++) {

        if(!tour2.includes(tour[i])){
            $('#' + tour[i]).off();
            $('#' + tour[i]).css('backgroundColor', '')
        }
        }
        miseEnForme = false;
        }
    })
  }

  function maj(e, joueur){
    $('#' + e.target.id).html('<img src=' + joueur.img + '></img>');
    $('#' + joueur.placement).html('');
    joueur.placement = parseInt(e.target.id);
    if(aQuiLeTour.tourJ1 === true){
      placeJ1 = parseInt(e.target.id);
    }
    if(aQuiLeTour.tourJ2 === true){
      placeJ2 = parseInt(e.target.id);
    }
  }



    return[placeJ1, placeJ2];
}

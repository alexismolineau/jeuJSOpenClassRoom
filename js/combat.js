import majPerso from './majperso.js';
import tableau from './tableau.js';

export default function combat(placementFinal, persos, aQuiLeTour){
    let click = 0;
    if(placementFinal[0] === placementFinal[1] && typeof placementFinal[0] === 'number' ){
      alert('COMBAT !!!');
      $('table').html('');
      $('#finTour').hide();
      $('#carte').append('<div class=\'row\'><div id=\'instructions\' class=\'text-center col-lg-12\'></div></div>')
      $('#carte').append('<div class=\'row\'><div id=\'journal\' class=\'text-center col-lg-12\'></div></div>')
      $('#cadreJ1').append('<button id=\'atk1\'>Attaquer</button>');
      $('#cadreJ1').append('<button id=\'def1\'>Défendre</button>');
      $('#cadreJ2').append('<button id=\'atk2\'>Attaquer</button>');
      $('#cadreJ2').append('<button id=\'def2\'>Défendre</button>');
      let actionJ1;
      let actionJ2;

      function action(){


        if(aQuiLeTour.tourJ1 === true){
          $('#instructions').html(persos.joueur1.pseudo + ', choisis ton action' + '<br><br>')
          $('#atk1').on('click', function(e){
            e.stopPropagation();
            actionJ1 = true;
            $('#action1').html('Action : Attaque');
          })
          $('#def1').on('click', function(e){
            e.stopPropagation();
            actionJ1 = false;
            $('#action1').html('Action : Défense');
          })
        }
        else if(aQuiLeTour.tourJ2 === true){
          $('#instructions').html(persos.joueur2.pseudo + ', choisis ton action' + '<br><br>')
          $('#atk2').on('click', function(e){
            e.stopPropagation();
            actionJ2 = true;
            $('#action2').html('Action : Attaque');
          })
          $('#def2').on('click', function(e){
            e.stopPropagation();
            actionJ2 = false;
            $('#action2').html('Action : Défense');
          })
          }

          aQuiLeTour.tourJ1 = aQuiLeTour.tourJ2;
          aQuiLeTour.tourJ2 = !aQuiLeTour.tourJ1;
        return [actionJ1, actionJ2];
        }


        function journal(){
          let log = '';
          if(actionJ1 === true && actionJ2 === true){
            log = persos.joueur1.pseudo + ' attaque, ' + persos.joueur2.pseudo + ' perd ' + persos.joueur1.degat + ' pv !' + '<br>';
          }
          else if(actionJ1 === false){
            log = persos.joueur1.pseudo + ' se défend !' + '<br>';
          }
          else if(actionJ1 === true && actionJ2 === false){
            log = persos.joueur1.pseudo + ' attaque, ' + persos.joueur2.pseudo + ' perd ' + persos.joueur1.degat / 2 + ' pv !' + '<br>';
          }
          $('#journal').append(log);
          if(actionJ2 === true && actionJ1 === true){
            log = persos.joueur2.pseudo + ' attaque, ' + persos.joueur1.pseudo + ' perd ' + persos.joueur2.degat + ' pv !' + '<br>';
          }
          else if(actionJ2 === false){
            log = persos.joueur2.pseudo + ' se défend !' + '<br>';
          }
          else if(actionJ2 === true && actionJ1 === false){
            log = persos.joueur2.pseudo + ' attaque, ' + persos.joueur1.pseudo + ' perd ' + persos.joueur2.degat /2 + ' pv !' + '<br>';
          }
          $('#journal').append(log);
        }



      let tamer = action();
      $('button').on('click', function(){
        click++;
        tamer = action();
        if(click%2){
          if(tamer[0] && tamer[1]){
            persos.joueur1.pv -= persos.joueur2.degat;
            persos.joueur2.pv -= persos.joueur1.degat;
            majPerso(persos);
          }
          if(tamer[0] && !tamer[1]){
            persos.joueur2.pv -= persos.joueur1.degat / 2;
            majPerso(persos);
          }
          if(tamer[1] && !tamer[0]){
            persos.joueur1.pv -= persos.joueur2.degat / 2;
            majPerso(persos);
          }
          if(persos.joueur1.pv <= 0 && persos.joueur2.pv > 0){
            majPerso(persos);
            alert(persos.joueur2.pseudo + ' a gagné !');
            $('#newGame').show();
          }
          if(persos.joueur2.pv <= 0 && persos.joueur1.pv > 0){
            majPerso(persos);
            alert(persos.joueur1.pseudo + ' a gagné !');
            $('#newGame').show();
          }
          if(persos.joueur2.pv <= 0 && persos.joueur1.pv <= 0){
            majPerso(persos);
            alert('Match nul !');
            $('#newGame').show();
          }
          journal();
        }
        });


    }
}

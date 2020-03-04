import majPerso from './majperso.js';

export default function ramasseArme(placementFinal, armes, persos){
  const listArmes = [armes.lance, armes.epee, armes.sulfateuse];

  for (let i = 0; i < listArmes.length; i++) {
    if(placementFinal[1] === listArmes[i].placement){
      $('#' + placementFinal[1]).html('<img src=' + persos.joueur1.img + '></img>' + ' ' + persos.joueur1.arme);
      listArmes[i].placement = 0;
      persos.joueur1.arme = listArmes[i].nom;
      persos.joueur1.degat = listArmes[i].degat;
      majPerso(persos)
    }
    if(placementFinal[0] === listArmes[i].placement){
      $('#' + placementFinal[0]).html('<img src=' + persos.joueur2.img + '></img>' + ' ' + persos.joueur2.arme);
      listArmes[i].placement = 0;
      persos.joueur2.arme = listArmes[i].nom;
      persos.joueur2.degat = listArmes[i].degat;
      majPerso(persos)
    }
  }
}

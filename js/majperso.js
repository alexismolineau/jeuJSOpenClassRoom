export default function majPerso(persos) {
  for (let i = 1; i < 3; i++) {
    let joueur = persos.joueur1;
    if(i === 1){
      joueur = persos.joueur1;
    }
    if(i === 2 ){
      joueur = persos.joueur2;
    }
    document.getElementById('pseudo' + [i]).innerHTML = 'Pseudo : ' + joueur.pseudo;
    document.getElementById('pv' + [i]).innerHTML = 'PV : ' + joueur.pv;
    document.getElementById('arme' + [i]).innerHTML = 'Arme : ' + joueur.arme;
    document.getElementById('degat' + [i]).innerHTML = 'Dégâts : ' + joueur.degat;
  }

}

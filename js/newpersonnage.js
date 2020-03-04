
function newPersonnage(armes){

  function Joueur(pseudo, pv, arme, placement, degat, img){
    this.pseudo = pseudo,
    this.pv = pv,
    this.arme = arme,
    this.placement = placement,
    this.degat = degat,
    this.img = img
  }


  let place5 = Math.ceil(Math.random() * 100)
  while(place5 === armes.epee.placement || place5 === armes.lance.placement || place5 === armes.sulfateuse.placement){
    place5 = Math.ceil(Math.random() * 100);
  }
  let place6 = Math.ceil(Math.random() * 100)
  while(place5 === armes.epee.placement || place5 === armes.lance.placement || place5 === armes.sulfateuse.placement || place5 === place6 || place5 + 1 === place6 || place5 -1 === place6 || place5 + 10 === place6 || place5 -10 === place6){
    place6 = Math.ceil(Math.random() * 100);
  }



  const joueur1 = new Joueur(
    prompt('Joueur 1 : choisissez votre pseudo' , 'Joueur1'),
    100,
    armes.poing.nom,
    place5,
    armes.poing.degat,
    '../img/perso1.png'
  );

  const joueur2 = new Joueur(
    prompt('Joueur 2 : choisissez votre pseudo' , 'Joueur2'),
    100,
    armes.poing.nom,
    place6,
    armes.poing.degat,
    '../img/perso2.png'
  );

  return {joueur1, joueur2};
}

export default newPersonnage;

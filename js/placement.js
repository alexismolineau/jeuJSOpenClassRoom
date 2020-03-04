export default function placement(armes, persos) {
  document.getElementById(armes.lance.placement).innerHTML = '<img src=' + armes.lance.img + '></img>';
  document.getElementById(armes.epee.placement).innerHTML = '<img src=' + armes.epee.img + '></img>';
  document.getElementById(armes.sulfateuse.placement).innerHTML = '<img src=' + armes.sulfateuse.img + '></img>';
  document.getElementById(persos.joueur1.placement).innerHTML = '<img src=' + persos.joueur1.img + '></img>';
  document.getElementById(persos.joueur2.placement).innerHTML = '<img src=' + persos.joueur2.img + '></img>';
  for (let i = 0; i < 10; i++) {
    let gris = Math.ceil(Math.random() * 100);
    while(gris === armes.lance.placement || gris === armes.epee.placement || gris === armes.sulfateuse.placement || gris === persos.joueur1.placement || gris === persos.joueur2.placement){
      gris = Math.ceil(Math.random() * 100);
    }
    document.getElementById(gris).className = 'grey';
  }
}

export default function possibilite(persos, aQuiLeTour){
  let poss1;
  let poss2;
  let poss3;
  let poss4;
  let poss5;
  let poss6;
  let poss7;
  let poss8;
  let poss9;
  let poss10;
  let poss11;
  let poss12;

  let joueur;
  if(aQuiLeTour.tourJ1 === true){
    joueur = persos.joueur1;
  }
  if(aQuiLeTour.tourJ2 === true){
    joueur = persos.joueur2;
  }

  if(joueur.placement < 91){
    poss1 = joueur.placement + 10;
  }else {
    poss1 = 0;
  }

  if(joueur.placement < 81){
    poss2 = joueur.placement + 20;
  }else {
    poss2 = 0;
  }
  if(joueur.placement < 71){
    poss3 = joueur.placement + 30;
  }else {
    poss3 = 0;
  }
  if(joueur.placement > 10){
    poss4 = joueur.placement - 10;
  }else {
    poss4 = 0;
  }
  if(joueur.placement > 20){
    poss5 = joueur.placement - 20;
  }else {
    poss5 = 0;
  }
  if(joueur.placement > 30){
    poss6 = joueur.placement - 30;
  }else {
    poss6 = 0;
  }
  if(joueur.placement < 100 && joueur.placement !== 90 && joueur.placement !== 80 && joueur.placement !== 70 && joueur.placement !== 60 && joueur.placement !== 50 && joueur.placement !== 40 && joueur.placement !== 30 && joueur.placement !== 20 && joueur.placement !== 10){
    poss7 = joueur.placement + 1;
  }else {
    poss7 = 0;
  }
  if(joueur.placement < 99 && joueur.placement !== 90 && joueur.placement !== 80 && joueur.placement !== 70 && joueur.placement !== 60 && joueur.placement !== 50 && joueur.placement !== 40 && joueur.placement !== 30 && joueur.placement !== 20 && joueur.placement !== 10
    && joueur.placement !== 89 && joueur.placement !== 79 && joueur.placement !== 69 && joueur.placement !== 59 && joueur.placement !== 49 && joueur.placement !== 39 && joueur.placement !== 29 && joueur.placement !== 19 && joueur.placement !== 9){
    poss8 = joueur.placement + 2;
  }else {
    poss8 = 0;
  }
  if(joueur.placement < 98 && joueur.placement !== 90 && joueur.placement !== 80 && joueur.placement !== 70 && joueur.placement !== 60 && joueur.placement !== 50 && joueur.placement !== 40 && joueur.placement !== 30 && joueur.placement !== 20 && joueur.placement !== 10
    && joueur.placement !== 89 && joueur.placement !== 79 && joueur.placement !== 69 && joueur.placement !== 59 && joueur.placement !== 49 && joueur.placement !== 39 && joueur.placement !== 29 && joueur.placement !== 19 && joueur.placement !== 9
    && joueur.placement !== 88 && joueur.placement !== 78 && joueur.placement !== 68 && joueur.placement !== 58 && joueur.placement !== 48 && joueur.placement !== 38 && joueur.placement !== 28 && joueur.placement !== 18 && joueur.placement !== 8){
    poss9 = joueur.placement + 3;
  }else {
    poss9 = 0;
  }
  if(joueur.placement > 1 && joueur.placement !== 91 && joueur.placement !== 81 && joueur.placement !== 71 && joueur.placement !== 61 && joueur.placement !== 51 && joueur.placement !== 41 && joueur.placement !== 31 && joueur.placement !== 21 && joueur.placement !== 11){
    poss10 = joueur.placement - 1;
  }else {
    poss10 = 0;
  }
  if(joueur.placement > 2 && joueur.placement !== 91 && joueur.placement !== 81 && joueur.placement !== 71 && joueur.placement !== 61 && joueur.placement !== 51 && joueur.placement !== 41 && joueur.placement !== 31 && joueur.placement !== 21 && joueur.placement !== 11
    && joueur.placement !== 92 && joueur.placement !== 82 && joueur.placement !== 72 && joueur.placement !== 62 && joueur.placement !== 52 && joueur.placement !== 42 && joueur.placement !== 32 && joueur.placement !== 22 && joueur.placement !== 12){
    poss11 = joueur.placement - 2;
  }else {
    poss11 = 0;
  }
  if(joueur.placement > 3 && joueur.placement !== 91 && joueur.placement !== 81 && joueur.placement !== 71 && joueur.placement !== 61 && joueur.placement !== 51 && joueur.placement !== 41 && joueur.placement !== 31 && joueur.placement !== 21 && joueur.placement !== 11
    && joueur.placement !== 92 && joueur.placement !== 82 && joueur.placement !== 72 && joueur.placement !== 62 && joueur.placement !== 52 && joueur.placement !== 42 && joueur.placement !== 32 && joueur.placement !== 22 && joueur.placement !== 12
    && joueur.placement !== 93 && joueur.placement !== 83 && joueur.placement !== 73 && joueur.placement !== 63 && joueur.placement !== 53 && joueur.placement !== 43 && joueur.placement !== 33 && joueur.placement !== 23 && joueur.placement !== 13){
    poss12 = joueur.placement - 3;;
  }else {
    poss12 = 0;
  }


  let poss = [poss1, poss2, poss3, poss4, poss5, poss6, poss7, poss8, poss9, poss10, poss11, poss12];
  for (let i = 0; i < poss.length; i++) {
    if(document.getElementById(poss[i]).className === 'grey'){

      if(poss[i] === poss7){
        poss[i + 1] = 0;
        poss[i + 2] = 0;
      }
      if(poss[i] === poss8){
        poss[i + 1] = 0;
      }
      if(poss[i] === poss10){
        poss[i + 1] = 0;
        poss[i + 2] = 0;
      }
      if(poss[i] === poss11){
        poss[i + 1] = 0;
      }
      if(poss[i] === poss4){;
        poss[i + 1] = 0;
        poss[i + 2] = 0;
      }
      if(poss[i] === poss5){
        poss[i + 1] = 0;
      }
      if(poss[i] === poss1){
        poss[i + 1] = 0;
        poss[i + 2] = 0;
      }
      if(poss[i] === poss2){
        poss[i + 1] = 0;
      }
      poss[i] = 0;
    }
  }



  return poss;
}

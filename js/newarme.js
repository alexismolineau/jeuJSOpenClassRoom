function newArme(){
  function Arme(nom, degat, img, placement){
    this.nom = nom,
    this.degat = degat,
    this.img = img,
    this.placement = placement
  }


    const place1 = Math.ceil(Math.random() * 100)
    let place2 = Math.ceil(Math.random() * 100)
    while(place1 === place2){
      place2 = Math.ceil(Math.random() * 100);
    }
    let place3 = Math.ceil(Math.random() * 100)
    while(place3 === place2 || place3 === place1){
      place3 = Math.ceil(Math.random() * 100);
    }
    let place4 = Math.ceil(Math.random() * 100)
    while(place4 === place3 || place4 === place2 || place4 === place1){
      place4 = Math.ceil(Math.random() * 100);
    }


  const poing = new Arme(
    'poing',
    10,
    'tamer',
    place1
  );

  const lance = new Arme(
    'lance',
    20,
    '../img/lance.png',
    place2
  );

  const epee = new Arme(
    'epée',
    15,
    '../img/epee.png',
    place3
  );

  const sulfateuse = new Arme(
    'sulfateuse',
    50,
    '../img/sulfateuse.png',
    place4
  );


return {poing, lance, epee, sulfateuse};
}

export default newArme;

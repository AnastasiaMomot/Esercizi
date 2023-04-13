// // // // // // // // // // // // // Crea una funzione che prende in input un numero e restituisce la stringa "minore di zero" quando il numero è minore di 0, "maggiore di zero" quando il numero è maggiore di zero e "proprio zero" quando il valore è 0
// // // // // // // // // // // // // puoi usare una funzione "classica" o una arrow function
// // // // // // // // // // // // // fai il log del risultato

// // // // // // // // // // // // // quanti gradi celsius sono 100 gradi Farhenheit (F)? e quanto gradi Farhenheit (F) sono 100 gradi Celsius (C)?
// // // // // // // // // // // // // Crea una funzione che prende in input i gradi Celsius e restituisce i gradi Farhenehit e una funzione che fa l'opposto;
// // // // // // // // // // // // // usa una funzione "classica" per C -> F e una arrow function per F -> C
// // // // // // // // // // // // // assegna il risultato delle funzioni rispettivamente a due variabili e mostra il valore della variabili con console.log
// // // // // // // // // // // // // N.B. F = C * 1.8 + 32 e C = (F - 32) / 1.8

// // // // // // // // // // // // const calc = (numero) => {

// // // // // // // // // // // //     if (numero < 0) {
// // // // // // // // // // // //         console.log("minore di zero");
// // // // // // // // // // // //     } else if (numero > 0) {
// // // // // // // // // // // //         console.log("maggiore di zero");
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //         console.log("proprio il zero");
// // // // // // // // // // // //     }
// // // // // // // // // // // // };
// // // // // // // // // // // // calc(1);


// // // // // // // // // // // // function calcCelsius(Farhenheit) {
// // // // // // // // // // // //     return (Farhenheit - 32) / 1.8;
// // // // // // // // // // // // }
// // // // // // // // // // // // const result = calcCelsius(100)
// // // // // // // // // // // // console.log(result);


// // // // // // // // // // // // const calcFar = (celsius) => {
// // // // // // // // // // // //     return celsius * 1.8 + 32;
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(calcFar(100));

// // // // // // // // // // // // // Crea una funzione che prenda in input un'array e che restituisca un nuovo array composto solo dagli elementi con indice pari
// // // // // // // // // // // // // fai console.log del risultato
// // // // // // // // // // // // // E.s. ['Ciao', 'come', 'stai', '?'] -> ['Ciao', 'stai'];
// // // // // // // // // // // // // N.B per sapere se un numero e' pari o dispari usa il "modulo operator (%)" -> x % 2 === 0. Se il resto della divisione tra x e 2 e' 0 allora x e' un numero pari 

// // // // // // // // // // // // const numeri = ['a', 'b', 'c', 'd'];



// // // // // // // // // // // // function numpari(array) {

// // // // // // // // // // // //     const solopari = [];
// // // // // // // // // // // //     for (let i = 0; i < array.length; i++) {
// // // // // // // // // // // //         if (i % 2 === 0) {
// // // // // // // // // // // //             console.log(array[i]);
// // // // // // // // // // // //             solopari.push(array[i]);
// // // // // // // // // // // //         }

// // // // // // // // // // // //     }
// // // // // // // // // // // //     return solopari;

// // // // // // // // // // // // }
// // // // // // // // // // // // numpari(numeri);

// // // // // // // // // // // // // crea una funzione che fa console.log di tutti gli elementi in una lista, ma al contrario
// // // // // // // // // // // // // E.s ['Ciao', 'come', 'stai', '?'] -> ? stai come Ciao;

// // // // // // // // // // // // const seasons = ['winter', 'spring', 'summer', 'autumn'];

// // // // // // // // // // // // function revertArrayAndLogIt(array) {
// // // // // // // // // // // //     const result = array.reverse();
// // // // // // // // // // // //     console.log(result);
// // // // // // // // // // // // }

// // // // // // // // // // // // revertArrayAndLogIt(seasons);












// // // // // // // // // // // const numeri = [1, 50, 87, 96, 200];
// // // // // // // // // // // numeri.push(30, 25, 80, 96);
// // // // // // // // // // // for (let i = 0; i < numeri.length; i++) {
// // // // // // // // // // //     console.log(numeri[i]);
// // // // // // // // // // // }


// // // // // // // // // // // const numeriGrandi = [1000, 87659, 156489, 123547];
// // // // // // // // // // // for (let i = 0; i < numeriGrandi.length; i++) {
// // // // // // // // // // //     numeri.push(numeriGrandi[i]);
// // // // // // // // // // // }


// // // // // // // // // // // console.log(numeri);


// // // // // // // // // // // const listaDiListe = [[4, 25, 60], [4, 8, 6, 4], [0]];
// // // // // // // // // // // for (let indiceListaDiListe = 0; indiceListaDiListe < listaDiListe.length; indiceListaDiListe++) {

// // // // // // // // // // //     const listaInterna = listaDiListe[indiceListaDiListe];

// // // // // // // // // // //     for (let indiceListaInterna = 0; indiceListaInterna < listaInterna.length; indiceListaInterna++) {
// // // // // // // // // // //         const elementoDellaListaInterna = listaInterna[indiceListaInterna];

// // // // // // // // // // //         console.log(elementoDellaListaInterna);
// // // // // // // // // // //     }
// // // // // // // // // // // }

// // // // // // // // // // // let frase = 'i miei vicini Yamada';
// // // // // // // // // // // let contoDelleI = 0;
// // // // // // // // // // // let contoDelleA =0;
// // // // // // // // // // // for (let i = 0; i < frase.length; i++) {
// // // // // // // // // // //     if (frase[i] === 'i') {
// // // // // // // // // // //         contoDelleI++;
// // // // // // // // // // //     }
// // // // // // // // // // //     if (frase[i] === 'a') {
// // // // // // // // // // //     contoDelleA++;
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // console.log(contoDelleI,contoDelleA);

// // // // // // // // // // // let frase2 = 'Nastiusha bravissima';
// // // // // // // // // // // for (let i = frase2.length - 1; i >= 0; i--) {
// // // // // // // // // // //     console.log(frase2[i]);

// // // // // // // // // // // }




// // // // // // // // // // // const lista = [15,3,9,54,7,60];
// // // // // // // // // // // let lista10 = [];
// // // // // // // // // // // for (let i=0; i<lista.length; i++){
// // // // // // // // // // //     if(lista[i]<=10){
// // // // // // // // // // //         lista10.push(lista[i]);
// // // // // // // // // // //     }   
// // // // // // // // // // // }
// // // // // // // // // // // console.log(lista10);


// // // // // // // // // // const filter = (lista) => {
// // // // // // // // // //     let lista10 = [];
// // // // // // // // // //     for (let i = 0; i < lista.length; i++) {
// // // // // // // // // //         if (lista[i] <= 10) {
// // // // // // // // // //             lista10.push(lista[i]);
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // //     return lista10
// // // // // // // // // // }



// // // // // // // // // // const lista = [15, 3, 9, 54, 7, 60];
// // // // // // // // // // let lista2 = filter(lista)
// // // // // // // // // // console.log(lista2);






// // // // // // // // // // const numeroPiuGrande = (numero1, numero2) => {
// // // // // // // // // //     if (numero1 > numero2) {
// // // // // // // // // //         return numero1;
// // // // // // // // // //     }
// // // // // // // // // //     else {
// // // // // // // // // //         return numero2;
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // console.log(numeroPiuGrande(250, 98));




// // // // // // // // // const listaNumeri = [10, 2, 50, 200, 4, 75];
// // // // // // // // // let numeroPiuGrande = 0
// // // // // // // // // for (let i = 0; i < listaNumeri.length; i++) {
// // // // // // // // //     if (listaNumeri[i] > numeroPiuGrande) {
// // // // // // // // //         numeroPiuGrande = listaNumeri[i];
// // // // // // // // //     }

// // // // // // // // // }
// // // // // // // // // console.log(numeroPiuGrande);


// // // // // // // // // const max = (lista) => {
// // // // // // // // //     let numeroPiuGrande = 0
// // // // // // // // //     for (let i = 0; i < lista.length; i++) {
// // // // // // // // //         if (lista[i] > numeroPiuGrande) {
// // // // // // // // //             numeroPiuGrande = lista[i];

// // // // // // // // //         }

// // // // // // // // //     }
// // // // // // // // //     return numeroPiuGrande;
// // // // // // // // // }
// // // // // // // // // console.log(max([45,80,900,2644750,60]));



// // // // // // // // // const fizzbuzz = (numero) => {
// // // // // // // // //     for ( let i= 0; i <= numero; i++){
// // // // // // // // //         if ( i % 3 === 0 && i % 5 === 0 ){
// // // // // // // // //             console.log ('FizzBuzz');
// // // // // // // // //         } 
// // // // // // // // //         else if ( i % 5 === 0) {
// // // // // // // // //             console.log('Buzz');
// // // // // // // // //         }
// // // // // // // // //         else if  ( i % 3 === 0){
// // // // // // // // //             console.log('Fizz');
// // // // // // // // //         }
// // // // // // // // //         else {
// // // // // // // // //             console.log(i);
// // // // // // // // //         }
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // // fizzbuzz(86);

// // // // // // // // // const fizzbuzz2 = (numero) => {
// // // // // // // // //     for (let i = 0; i <= numero; i++) {
// // // // // // // // //         let str = '';
// // // // // // // // //         if ( i % 3 === 0) {
// // // // // // // // //             str += 'Fizz';
// // // // // // // // //         } 
// // // // // // // // //         if (i % 5 ===0) {
// // // // // // // // //             str += 'Buzz'
// // // // // // // // //         }

// // // // // // // // //         if (str !== '') {
// // // // // // // // //             console.log(str);
// // // // // // // // //         } else {
// // // // // // // // //             console.log(i);
// // // // // // // // //         }
// // // // // // // // //     }
// // // // // // // // // }


// // // // // // // // // fizzbuzz2(80);





// // // // // // // // // console.log(stringa.split(' ').join(' '))

// // // // // // // // // const url = '/api/prodotti/:id';

// // // // // // // // // const nuovoUrl = url.replace(':id', '1');




// // // // // // // // let stringa = 'vorrei ricevere gli stivali';
// // // // // // // // let listaDelleParole = stringa.split(' ');
// // // // // // // // let stringa2 = '';
// // // // // // // //  for( let i= listaDelleParole.length- 1 ; i >= 0 ; i--) {
// // // // // // // // stringa2+= listaDelleParole[i] + ' ';
// // // // // // // //  }
// // // // // // // //  console.log(stringa2);


// // // // // // // //  let stringa3 = listaDelleParole.reverse().join(' ');
// // // // // // // //  console.log(stringa3);

// // // // // // // // stringa.split(' ').reverse().join(' ')



// // // // // // // const listaPasseggeri = [{
// // // // // // //     name: 'Sam',
// // // // // // //     age: 39
// // // // // // // },
// // // // // // // {
// // // // // // //     name: 'Pam',
// // // // // // //     age: 40
// // // // // // // }
// // // // // // // ]

// // // // // // // const listaNomi = [];
// // // // // // // for (const pippo of listaPasseggeri) {
// // // // // // //     listaNomi.push(pippo.name);

// // // // // // // }
// // // // // // // console.log(listaNomi);


// // // // // // // const listaAge = [];
// // // // // // // for (const passeggero of listaPasseggeri) {
// // // // // // //     listaAge.push(passeggero.age);

// // // // // // // }
// // // // // // // console.log(listaAge);

// // // // // // // const listaAge2 = listaPasseggeri.map((passeggero) => passeggero.age)

// // // // // // // console.log(listaAge2);


// // // // // // // const user = {
// // // // // // //     name: 'Sam',
// // // // // // //     pass: 'sam123'
// // // // // // // }

// // // // // // // let encrypt = utente => {
// // // // // // //     let reversedPass = utente.pass.split('').reverse().join('');
// // // // // // //     utente.pass = reversedPass;
// // // // // // //     return utente
// // // // // // // }
// // // // // // // encrypt(user);
// // // // // // // console.log(user);



// // // // // // // const listaUtenti = [
// // // // // // //     {
// // // // // // //         name: 'Bill',
// // // // // // //         pass: '145hy'
// // // // // // //     },
// // // // // // //     {
// // // // // // //         name: 'Jim',
// // // // // // //         pass: 'yhg1'
// // // // // // //     },
// // // // // // //     {
// // // // // // //         name: 'Kat',
// // // // // // //         pass: 'bhgtr47'
// // // // // // //     }
// // // // // // // ]


// // // // // // // let encryptEvrybody = listaUtenti => {
// // // // // // //     for (const utente of listaUtenti) {
// // // // // // //         encrypt(utente);
// // // // // // //     }
// // // // // // // }

// // // // // // // listaUtenti.forEach(encrypt)

// // // // // // // console.log(listaUtenti);


// // // // // // const triangolo = {
// // // // // //     base: 10,
// // // // // //     altezza: 12,
// // // // // //     calc() {
// // // // // //         return this.base * this.altezza / 2;
// // // // // //     }
// // // // // // }
// // // // // // console.log(triangolo.calc());

// // // // // // const triangoloFactory = (base, altezza) => {
// // // // // //     return {
// // // // // //         base: base,
// // // // // //         altezza: altezza,
// // // // // //         calc() {
// // // // // //             return this.base * this.altezza / 2;
// // // // // //         }
// // // // // //     }
// // // // // // }
// // // // // // console.log(triangoloFactory(20, 41));


// // // // // // const listaTriangoli = [];
// // // // // // for (let index = 0; index < 100; index++) {
// // // // // //     let triangolo = triangoloFactory(13, 80);
// // // // // //     listaTriangoli.push(triangolo);
// // // // // // }
// // // // // // console.log(listaTriangoli);


// // // // // // let sommaAree = 0;
// // // // // // for (const triangolo of listaTriangoli) {
// // // // // //     sommaAree += triangolo.calc()
// // // // // // }
// // // // // // console.log(sommaAree);





// // // // // // const quadrato = {
// // // // // //     lato: 10,
// // // // // //     calcPerimetro() {
// // // // // //         return this.lato * 4;
// // // // // //     },
// // // // // //     calcArea() {
// // // // // //         return this.lato * this.lato;
// // // // // //     }
// // // // // // }
// // // // // // const quadratoFactory = (lato) => {
// // // // // //     return {
// // // // // //         lato: lato,
// // // // // //         calcPerimetro() {
// // // // // //             return lato * 4;
// // // // // //         },
// // // // // //         calcArea() {
// // // // // //             return lato * lato;
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // // const listaQuadrati = [];
// // // // // // for (let index = 0; index < 100; index++) {
// // // // // //     let quadrato = quadratoFactory(20)
// // // // // //     listaQuadrati.push(quadrato);
// // // // // // }
// // // // // // let sommaAreeQ = 0;
// // // // // // let sommaPerimetro = 0;
// // // // // // for (let quadrato of listaQuadrati) {
// // // // // //     sommaPerimetro += quadrato.calcPerimetro();
// // // // // //     sommaAreeQ += quadrato.calcArea();
// // // // // // }

// // // // // // console.log(sommaPerimetro);



// // // // // // const azienda = {
// // // // // //     impiegati: [
// // // // // //         {
// // // // // //             nome: 'Nicola',
// // // // // //             stipendio: 900
// // // // // //         }
// // // // // //     ],
// // // // // //     budgetAnnuale: 40000,
// // // // // //     assumiPersonale(impiegato) {
// // // // // //         this.impiegati.push(impiegato)
// // // // // //     },
// // // // // //     get budgetRimasto() {
// // // // // //         let sommaStipendi = 0
// // // // // //         for (const impiegato of this.impiegati) {
// // // // // //             sommaStipendi += impiegato.stipendio;
// // // // // //         }
// // // // // //         return this.budgetAnnuale - sommaStipendi;
// // // // // //     },

// // // // // //     licenzia(nomeDelImpiegato) {
// // // // // //         const nuoviImpiegati = this.impiegati.filter((impiegato) => {
// // // // // //             if (impiegato.nome === nomeDelImpiegato) {
// // // // // //                 return false;
// // // // // //             } else {
// // // // // //                 return true;
// // // // // //             }
// // // // // //         })
// // // // // //         this.impiegati= nuoviImpiegati;
// // // // // //     }
// // // // // // }



// // // // // // console.log(azienda.budgetRimasto);

// // // // // // azienda.assumiPersonale({
// // // // // //     nome: 'Kiki',
// // // // // //     stipendio: 20
// // // // // // });

// // // // // // console.log(azienda.impiegati);

// // // // // // console.log(azienda.budgetRimasto);

// // // // // // azienda.licenzia('Nicola');
// // // // // // console.log(azienda.impiegati);




// // // // // const pikachu = {
// // // // //     name: 'pikachu',
// // // // //     power: 50,
// // // // //     lifePoints: 200,
// // // // //     attack(pokemon) {
// // // // //         let newLifePoints = pokemon.lifePoints - this.power;
// // // // //         pokemon.lifePoints = newLifePoints;
// // // // //     },
// // // // //     alive() {
// // // // //         if (this.lifePoints > 0) {
// // // // //             return true;
// // // // //         } else {
// // // // //             return false;
// // // // //         }
// // // // //     }

// // // // // }


// // // // // const pokemonFactory = (name, power, lifePoints) => {
// // // // //     return {
// // // // //         name: name,
// // // // //         power: power,
// // // // //         lifePoints: lifePoints,
// // // // //         attack(pokemon) {
// // // // //             let newLifePoints = pokemon.lifePoints - this.power;
// // // // //             pokemon.lifePoints = newLifePoints;
// // // // //         },
// // // // //         get alive() {
// // // // //             if (this.lifePoints > 0) {
// // // // //                 return true;
// // // // //             } else {
// // // // //                 return false;
// // // // //             }
// // // // //         }

// // // // //     }
// // // // // }


// // // // // const bulbozaur = pokemonFactory('bulbozaur', 40, 230);
// // // // // const squirtle = pokemonFactory('squirtle',60,180);


// // // // // bulbozaur.attack(squirtle);
// // // // // squirtle.attack(bulbozaur);
// // // // // bulbozaur.attack(squirtle);
// // // // // bulbozaur.attack(squirtle);
// // // // // squirtle.attack(bulbozaur);
// // // // // squirtle.attack(bulbozaur);

// // // // // console.log(bulbozaur.alive);
// // // // // console.log(squirtle.alive);



// // // // class Pokemon {
// // // //     constructor(name,attack,lifePoints) {
// // // //         this.name = name;
// // // //         this.attack = attack * Math.random();
// // // //         this.lifePoints = lifePoints;
// // // //     }
// // // //     speak(){
// // // //         console.log(`Hello! I am ${this.name}`);
// // // //     }
// // // //     hit(pokemon){
// // // //         let newlifepoints = pokemon.lifePoints - this.attack;
// // // //         pokemon.lifePoints=newlifepoints;
// // // //     }
// // // // }


// // // // const pikachu = new Pokemon('Pikachu',200,300);
// // // // pikachu.speak();


// // // // const bulbozaur = new Pokemon('Bulbozaur', 210, 200);
// // // // bulbozaur.hit(pikachu);
// // // // console.log(pikachu);


// // // const hrenas = document.createElement('h1');
// // // hrenas.textContent='hrenasi nas nas';
// // // hrenas.style.backgroundColor= 'rgba(10,40,52,0.5)';
// // // document.body.appendChild(hrenas);

// // // for (let index = 0; index < 1000; index++) {
// // //     let h1 = document.createElement('h1');
// // //     document.body.appendChild(h1);
// // //     h1.textContent=index;
// // // }



// // // Crea un p con testo a piacere e inseriscilo in body
// // const paragraph = document.createElement("p");
// // paragraph.textContent="Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key. ";
// // document.appendChild(paragraph);





// // // Crea una lista di stringhe a piacere e PER OGNI stringa crea un p che ha per testo la stringa e inseriscilo dentro body

// // const listaDiStringe = ["Rather than constructing promises","you’ll be handling Promise objects"," returned to you as the result of an asynchronous operation"];
// // for (let i = 0; i < listaDiStringe.length; i++) {
// // let p = listaDiStringe(i)
// // document.body.appendChild(p);

// // }



// // // Crea un oggetto che ha due proprietà: name e age. 
// // // Poi crea un p che ha per testo la proprieta name e un p che ha per testo proprieta age e inseriscili dentro body




// let input = document.getElementById('input');
// let button = document.getElementById('button');
// let list = document.getElementById('list');

// button.onclick = function () {
//     let div = document.createElement('div');
//     let text = document.createElement('span');
//     text.appendChild(document.createTextNode(input.value));
//     input.value='';
//     let checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.onchange = function () {
//         if (checkbox.checked) {
//             text.style.textDecoration = 'line-through';
//         }
//         else {
//             text.style.textDecoration = '';
//         }
//     };

//     let deleteButton = document.createElement('button');
//     deleteButton.innerText = 'Delete';
//     deleteButton.addEventListener("click", function (event) {
//         div.remove();
//     });
//     div.appendChild(checkbox);
//     div.appendChild(text);
//     div.appendChild(deleteButton);
//     list.appendChild(div);
// }
    

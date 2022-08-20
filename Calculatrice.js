const add = (a,b) => a + b;

const soustraction = (a,b) => a + b;

const pourcentage = a => a/100;

const division = (a,b) => a/b;

const multiplication = (a,b) => a*b;

const operation = (operateur, a, b) => {
    if(operateur === "+"){
        add(a,b);
    }
    else if(operateur === "-"){
        soustraction(a,b);
    }
    else if(operateur === "÷"){
        division(a,b);
    }
    else if (operateur === "x"){
        multiplication(a,b);
    }
};

let nombre1 = "";

let nombre2 = "";

let nombre3 = "";

let operateur = "";

//début afficher nombre1 lors de clique sur une touche nombre
const container = document.querySelector('#container');
const touchesNombre = container.querySelectorAll('.toucheNombre');
const p = container.querySelector('#ecran p');
const afficherNombre1 = touchesNombre.forEach(toucheNombre => toucheNombre.addEventListener('click', function(e){
    nombre1 = nombre1 + e.target.lastChild.textContent;
    console.log(nombre1);
    p.textContent = nombre1;
}));
//fin --------------------------------------------------

//début cliquer sur un opérateur
const 



const afficherResultat = document.querySelector('.afficher');

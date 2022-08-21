const add = (a,b) =>  a + b;

const soustraction = (a,b) => a - b;

const pourcentage = a => a/100;

const division = (a,b) => a/b;

const multiplication = (a,b) => a*b;

const operation = (operateur, a, b) => {
    if(operateur === "+"){
        return add(a,b);
    }
    else if(operateur === "-"){
       return soustraction(a,b);
    }
    else if(operateur === "÷"){
       return division(a,b);
    }
    else if (operateur === "x"){
       return multiplication(a,b);
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
    if(operateur === ""){
        nombre1 = nombre1 + e.target.lastChild.textContent;
        console.log(nombre1);
        p.textContent = nombre1;
    }
    else if(nombre3 !== ""){
        nombre1 = nombre3;
    }


}));
//fin --------------------------------------------------

//début cliquer sur un opérateur
const touchesOperateur = container.querySelectorAll('.toucheOperateur');
const sauvegarderOperateur = touchesOperateur.forEach(toucheOperateur => toucheOperateur.addEventListener('click',
(e) => {
    if(operateur === ""){
        operateur = e.target.innerText;
        p.textContent = "";
    }
    else if(operateur !== "" && nombre2 === ""){
        operateur = "";
        p.textContent = "";
        operateur = e.target.innerText;
    }
    else if(operateur !== "" && nombre1 !== "" && nombre2 !== ""){
        nombre3 = `${operation(operateur, parseInt(nombre1), parseInt(nombre2))}`;
        console.log(nombre3);
        operateur = "";
        p.textContent = "";
        p.textContent = nombre3;
        operateur = e.target.innerText;
        nombre1 = "";
        nombre2 = "";

    }
}));
//fin ----------------------------------------------------

//début afficher nombre2 lors de clique sur une touche nombre
const afficherNombre2 = touchesNombre.forEach(toucheNombre => toucheNombre.addEventListener('click', function(e){
    if(operateur !== ""){
        nombre2 = nombre2 + e.target.lastChild.textContent;
        console.log(nombre2);
        p.textContent = nombre2;
    }
    else if(nombre3 !== ""){
        nombre3 = "";
        nombre2 = nombre2 + e.target.lastChild.textContent;
        console.log(nombre2);
        p.textContent = nombre2;
    }

}));
//fin -----------------------------------------------------

//début calculer l'operation entre les deux nombres
const toucheEgalite = container.querySelector('.afficher');
const afficherResultat = toucheEgalite.addEventListener('click',()=>{
    
    nombre3 = `${operation(operateur, parseInt(nombre1), parseInt(nombre2))}`;;
    console.log(nombre3);
    p.textContent = nombre3;
});

//fin ------------------------------------------------------

//début bouton clear
const toucheClear = container.querySelector('#toucheClear');
const effacerTout = toucheClear.addEventListener('click', ()=>{
    nombre1 = "";
    nombre2 = "";
    nombre3 = "";
    operateur = "";
    p.textContent = "";
});
//fin -------------------------------------------------------

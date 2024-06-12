//fonction pour corriger le quiz 
function submitQuiz(){
    var score=0; //au début le score est initialisé à 0
    const nbqsts=10; //on utilise cette constante comme conditions dans la boucle for
    var qstSansRep=0; //on compte le nombre de questions sans réponse pour le signaler à l'utilisateur
    //on enregistre dans un tableau constant les réponses correctes
    const correction = {
        q1: "c",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: "c",
        q6: "b",
        q7: "b",
        q8: "b",
        q9: "d",
        q10: "c"
    };

    //on parcourt les réponses de l'utilisateur ainsi que le tableau correction
    for(let i=1; i<= nbqsts; i++){
        let qst = "q"+i; //variable utilisé pour le parcours
        let selection = document.querySelector('input[name="' + qst + '"]:checked'); //on récupère la réponse sélectionnée par l'utilisateur 
        
        //si rien a été sélectionné on incrémente le nmbre de questions sans réponses
        if(!selection){
            qstSansRep++;
        }
        //sinon on vérifie que la valeur sélectionnée est bien la bonne réponse
        else if(selection && selection.value === correction[qst]){
            score++; //si c'est le cas on incrémente le score de l'utilisateur
        }
    }
    //si le nombre de questions sans réponse est supérieur à zéro, on vérifie que l'utilisateur veut vraiment soumettre ses réponses
    if(qstSansRep >0){
        var confirmation = confirm("Vous n'avez pas répondu à "+qstSansRep+" question(s).\nÊtes vous sûr de vouloir soumettre vos réponses ?");
        //sinon on sort de la fonction
        if(!confirmation){
            return;
        }
    }
    //on affiche le score de l'utilisateur
    alert("Votre score est " + score + " sur " + nbqsts);
}

function display1() {
    var bubble = document.querySelector('.bubble1');
    if (bubble.style.display === 'none') {
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }
}
function display2(){
    var bubble = document.querySelector('.bubble2');
    if (bubble.style.display === 'none') {
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }
}
function display3(){
    var bubble = document.querySelector('.bubble3');
    if (bubble.style.display === 'none') {
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }
}
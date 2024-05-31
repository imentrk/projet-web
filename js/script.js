function submitQuiz(){
    var score=0;
    const nbqsts=10;
    var qstSansRep=0;
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

    for(let i=1; i<= nbqsts; i++){
        let qst = "q"+i;
        let selection = document.querySelector('input[name="' + qst + '"]:checked');
        if(!selection){
            qstSansRep++;
        }
        else if(selection && selection.value === correction[qst]){
            score++;
        }
    }
    if(qstSansRep >0){
        var confirmation = confirm("Vous n'avez pas répondu à "+qstSansRep+" question(s).\nÊtes vous sûr de vouloir soumettre vos réponses ?");
        if(!confirmation){
            return;
        }
    }

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
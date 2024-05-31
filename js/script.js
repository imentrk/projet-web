function submitQuiz(){
    var score=0;
    const nbqsts=10;

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

        if(selection && selection.value === correction[qst]){
            score++;
        }
    }

    alert("Votre score est " + score + " sur " + nbqsts);
}
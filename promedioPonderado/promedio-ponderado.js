const notes=[
    {
        course:"Educación Física",
        note:10,
        credit:2
        },
    {
        course:"Programación",
        note:8,
        credit:5
    

    },
    {
        course:"Finanzas Personales",
        note:7,
        credit:5
    
    },
];

const notesWithCredit= notes.map(function(noteObject){
    return noteObject.note* noteObject.credit;
});

const sumOfNotesWithCredit=notesWithCredit.reduce(
    function(sum,newVal){
        return sum+newVal;
    }
)
/* Vamos a crear un nuevo arreglo credits únicamente con los créditos de cada materia */

const credits=notes.map(function(noteObject){
    return noteObject.credit;
})

// otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus elementos.
const sumOfCredits=credits.reduce(function(sum,newVal){
    return sum+newVal;
})

const promedioPonderadoNotasConCredito=sumOfNotesWithCredit/sumOfCredits;
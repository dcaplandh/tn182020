var alumnos = [
    'Gomez Beret Agustin',
]

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

alumnos = shuffle(alumnos);
grupos = [];

for(let i = 0; i < alumnos.length; i++){
    let grupo = [];
    grupo.push(alumnos[i]);
    i++;
    grupo.push(alumnos[i]);
    i++;
    grupo.push(alumnos[i]);
    i++;
    grupos.push(grupo);
}

var x = 2;


grupos.forEach(grupo=>{
    console.log("GRUPO #"+x);
    x++;
    console.log("Integrantes:");
    console.log(grupo[0] + ", " + grupo[1] + " y " + grupo[2]);
    console.log("Link Github:")
    console.log("")
});
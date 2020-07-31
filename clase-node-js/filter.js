var array = ["Juan","Luis","Gonza","Tami","Romi"];

var nuevoArray = [];

for(var i = 0; i < array.length; i++){
    if(array[i] == "Romi"){
        nuevoArray.push(array[i]);
    }
}

var nuevoArray2 = array.filter(nombre=>nombre=="Romi");
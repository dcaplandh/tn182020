const sumar = function (n1,n2){
    if(typeof n1 == 'undefined'){
        return 0;
    }
    return n1+n2;
}

module.exports = sumar;
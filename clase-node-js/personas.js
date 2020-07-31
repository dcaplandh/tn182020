module.exports = [
    {
        nombre : "Gregorio",
        dni: 1234567,
        apodo: "Grego",
        soltero: true,
        estaSoltero: function(){
            return this.soltero;
        },
        buscaPareja: function(){
            return this.estaSoltero();
        }
    },
    {
        nombre : "Maria",
        dni: 876543,
        apodo: "Mary",
        soltero: false,
        estaSoltero: function(){
            return this.soltero;
        },
        buscaPareja: function(){
            return this.estaSoltero();
        }
    }
]
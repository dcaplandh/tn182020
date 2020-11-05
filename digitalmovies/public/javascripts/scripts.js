
window.addEventListener("load",function(){

    let parrafo = document.querySelector('p');
    parrafo.addEventListener("click",function(){
        console.log("tocaron el parrafo");
        var colores = ["blue","red","green","violet"];
        var lis = document.querySelectorAll('ul li');
        var color = colores[Math.round(Math.random()*4)];
        lis.forEach(function(li){
            li.style.color = color;
        });
    })
});
/* */
window.addEventListener("load",function(){
    console.log("otra cosa");
})



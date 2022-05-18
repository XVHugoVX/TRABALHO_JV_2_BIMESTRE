let calcular = document.querySelector("#calcular");
calcular.addEventListener("click", function(event){
    event.preventDefault()

    let r1 = document.querySelector("#receita1").value;
    let r2 = document.querySelector("#receita2").value;
    let r3 = document.querySelector("#receita3").value;

    let d1 = document.querySelector("#desconto1").value;
    let d2 = document.querySelector("#desconto2").value;
    
    var rt = Number(r1) + Number(r2) + Number(r3) ;
    document.querySelector("#resultadototal").value = rt;
    var dt = Number(d1) + Number(d2) ;
    document.querySelector("#descontototal").value = dt;
    var vt = Number(rt) - Number(dt) ;
    document.querySelector("#valortotal").value = vt;
    
});

function reset(){
    document.querySelector("#receita1").value;
    document.querySelector("#receita2").value;
    document.querySelector("#receita3").value;
    document.querySelector("#desconto1").value;
    document.querySelector("#desconto2").value
    document.querySelector("#resultadototal").value = rt;
    document.querySelector("#descontototal").value = dt;
    document.querySelector("#valortotal").value = vt;
}
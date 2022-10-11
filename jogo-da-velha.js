var jogador = 1;

const map = new Map();
map.set('a1', -9);
map.set('a2', -9);
map.set('a3', -9);

map.set('b1', -9);
map.set('b2', -9);
map.set('b3', -9);

map.set('c1', -9);
map.set('c2', -9);
map.set('c3', -9);


let elements = document.getElementsByClassName("house");
for (var i = 0; i < elements.length; i++) {
    let id = elements[i].id;
    elements[i].addEventListener('click', ()=>{marcarXouO(id)});
}

function marcarXouO(id) {
    let campo = document.getElementById(id);
    if (campo.innerHTML == ""){
        if (jogador === 1) {
            campo.innerHTML = "X";
            map.set(id, 1);
            jogador = 2;
        } else {
            campo.innerHTML = "O";
            map.set(id, 2);
            jogador = 1;
        }
        verificarGanhadorOuEmpate();
    }
};

 function verificarGanhadorOuEmpate() {
    let soma = map.get('a1')+map.get('a2')+map.get('a3');
    validarGanhador(soma);

    soma = map.get('b1')+map.get('b2')+map.get('b3');
    validarGanhador(soma);

    soma = map.get('c1')+map.get('c2')+map.get('c3');
    validarGanhador(soma);

    soma = map.get('a1')+map.get('b1')+map.get('c1');
    validarGanhador(soma);

    soma = map.get('a2')+map.get('b2')+map.get('c2');
    validarGanhador(soma);

    soma = map.get('a3')+map.get('b3')+map.get('c3');
    validarGanhador(soma);

    soma = map.get('a1')+map.get('b2')+map.get('c3');
    validarGanhador(soma);

    soma = map.get('a3')+map.get('b2')+map.get('c1');
    validarGanhador(soma);

    validarEmpate();
 }

 function validarGanhador(soma) {
    if (soma == 3){
        setTimeout(function() { 
            alert ('jogador 1 venceu!!!'); 
            window.location.reload();
        }, 1);

    } else if (soma == 6) {
        setTimeout(function() { 
            alert ('jogador 2 venceu!!!'); 
            window.location.reload();
        }, 1);
    }
 }

 function validarEmpate() {
    const values = [...map.values()];
    if(!values.includes(-9)) {
        setTimeout(function() { 
            alert ('Empatou!!!'); 
            window.location.reload();
        }, 1);
    }
 }
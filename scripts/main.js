// VARIABLES EXPORTADAS DEL INDEX.HTML
const cuadro = document.getElementById("cuadroDeSalida");
const btnAC = document.getElementById("btnAC");
const btnDE = document.getElementById("btnDE");
const btnMUL = document.getElementById("btnMUL");

const btn7 = document.getElementById("btnN7");
const btn8 = document.getElementById("btnN8");
const btn9 = document.getElementById("btnN9");
const btnSUM = document.getElementById("btnSUM");

const btn4 = document.getElementById("btnN4");
const btn5 = document.getElementById("btnN5");
const btn6 = document.getElementById("btnN6");
const btnRES = document.getElementById("btnRES");

const btn1 = document.getElementById("btnN1");
const btn2 = document.getElementById("btnN2");
const btn3 = document.getElementById("btnN3");

const btnPOINT = document.getElementById("btnPOINT");
const btn0 = document.getElementById("btnN0");
const btnResult = document.getElementById("resultBtn");

// OBTIENE EL DATO DEL BOTÓN QUE SE PRESIONA Y LO MANDA AL CUADRO DE SALIDA DE LA CALCULADORA
function key(input) {
    cuadro.value += input;
}

// LIMPIA TODOS LOS DATOS EXISTENTES EN EL CUADRO DE SALIDA DE LA CALCULADORA
function clearBtn() {
    cuadro.value = '';
}

// EVALUA LOS DATOS PUESTOS EN EL CUADRO DE SALIDA DE LA CALCULADORA
function result() {
    try {
        if (cuadro.value === '') {
            cuadro.value = 'Empty';
        }
        
        else {
            cuadro.value = eval(cuadro.value);
        }
    }
    
    catch (error) {
        cuadro.value = "Error";
    }
}

// BORRA EL ÚLTIMO DATO INGRESADO POR EL USUARIO
function clearLastBtn() {
    cuadro.value = cuadro.value.slice(0, -1);
}

//BUSCA LA RAÍZ CUADRADA DE UN NÚMERO
function raiz() {
    const valor = cuadro.value;

    if (valor) {
        const result = Math.sqrt(parseFloat(valor));
        cuadro.value = result;
    }
    
    else {
        cuadro.value = "Empty";
    }
}

//EVENTOS DE TECLAS
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            btn1.click();
            break;

        case '2':
            btn2.click();
            break;

        case '3':
            btn3.click();
            break;

        case '4':
            btn4.click();
            break;

        case '5':
            btn5.click();
            break;

        case '6':
            btn6.click();
            break;

        case '7':
            btn7.click();
            break;

        case '8':
            btn8.click();
            break;

        case '9':
            btn9.click();
            break;

        case '0':
            btn0.click();
            break;

        case '+':
            btnSUM.click();
            break;

        case '-':
            btnRES.click();
            break;

        case 'x':
            btnMUL.click();
            break;

        case 'Backspace':
            btnDE.click();
            break;

        case 'Delete':
            btnAC.click();
            break;

        case '.':
            btnPOINT.click();
            break;

        case 'Enter':
            btnResult.click();
            break;
    }
    
});
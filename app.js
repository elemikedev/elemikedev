const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

class CampoNumerico {

    constructor(selector) {
    this.nodo = document.querySelector(selector);
    this.valor = '';
    
    this.empezarAEscucharEventos();
    }
    
    empezarAEscucharEventos() {
    this.nodo.addEventListener('keydown', function(evento) {
        const teclaPresionada = evento.key;
        const teclaPresionadaEsUnNumero =
        Number.isInteger(parseInt(teclaPresionada));

        const sePresionoUnaTeclaNoAdmitida = 
        teclaPresionada != 'ArrowDown' &&
        teclaPresionada != 'ArrowUp' &&
        teclaPresionada != 'ArrowLeft' &&
        teclaPresionada != 'ArrowRight' &&
        teclaPresionada != 'Backspace' &&
        teclaPresionada != 'Delete' &&
        teclaPresionada != 'Enter' &&
        !teclaPresionadaEsUnNumero;
        const comienzaPorCero =
        this.nodo.value.length === 0 &&
        teclaPresionada == 0;

        if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
        evento.preventDefault();
        } else if (teclaPresionadaEsUnNumero) {
        this.valor += String(teclaPresionada);
        }

    }.bind(this));

    this.nodo.addEventListener('input', function(evento) {
        const cumpleFormatoEsperado = new RegExp(/^[0-9]+/).test(this.nodo.value);

        if (!cumpleFormatoEsperado) {
        this.nodo.value = this.valor;
        } else {
        this.valor = this.nodo.value;
        }
    }.bind(this));
    }

}
new CampoNumerico('#numero');


let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function() {
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
    sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    }else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }


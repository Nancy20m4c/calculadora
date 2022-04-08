class MiCalculadora {
    constructor() {
      this.formula = '';
      this.resultado = '';
      this.estaEncendido = true;
      this.elements = document.querySelectorAll('.btn-calc');
      this.botonOnOff = document.getElementById('encendido');
     

       this.elements.forEach( elemento => {
         elemento.addEventListener('click', function() {
          switch(elemento.innerText) {
            case 'on/off':
              calculadora.onOff();
              calculadora.cambiarEstiloBoton();
              break;
            case 'CE':
              calculadora.borrarTodo();
              break;
            case 'C':
              calculadora.borrar();
              break;
            case '=':
              calculadora.calcularResultado();
              break;
            default:
              calculadora.anyadirValor(elemento.innerText);
            }
          });
      });

   

    }



  anyadirValor(valor){
    if(this.estaEncendido){
      this.formula = this.formula + valor;
      this.refrescarFormula();
    }
  }

  calcularResultado(){
    try {
      this.resultado= eval(this.formula);
      document.getElementById('resultado').innerText = this.resultado;
    } catch (error) {
      document.getElementById('resultado').innerText = error;
  }

  }
  cambiarEstiloBoton(){
   
    if(this.estaEncendido){
      this.botonOnOff.setAttribute('id','apagado');
      this.apagar();
    } else {
      this.botonOnOff.setAttribute('id','encendido');
      this.encender();
    }
}

  apagar(){
    this.formula = ' ';
    this.resultado = ' ';  
    this.estaEncendido = false;
   
    this.refrescarFormula();
    this.refrescarResultado();
  }

  encender(){
      this.formula = ' ';
      this.resultado = ' ';
      this.estaEncendido = true;
      this.refrescarCampo('formula', '0');
  }


  onOff(){
    if(this.estaEncendido){
      this.refrescarFormula();
      this.refrescarCampo('formula', '0');
    }else{
      this.apagar();
      this.refrescarFormula();
      this.refrescarResultado();
     
    }
  }
  borrar() {
      this.formula = this.formula.toString().slice(0,-1);
      this.refrescarFormula();
      this.refrescarCampo('formula', this.formula);
      this.resultado = '';
      this.refrescarResultado();
  }


  borrarTodo(){
    this.formula='';

    this.refrescarCampo('formula', '0');
    this.resultado='';
    this.refrescarCampo('resultado', '');
    //this.refrescarResultado();
  }

  refrescarCampo(htmlId, valor){
    let elementoFormula = document.getElementById(htmlId);
    elementoFormula.innerText = valor;
  }

  refrescarFormula(){
    let elementoFormula = document.getElementById('formula');
    elementoFormula.innerText = this.formula;

  }
  
  refrescarResultado(){
    document.getElementById('resultado').innerText = this.resultado;
  }







}

  const calculadora = new MiCalculadora();

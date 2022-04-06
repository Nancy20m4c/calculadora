class MiCalculadora {
    constructor() {
      this.formula = '';
      this.resultado = '';
      this.estaEncendido = true;
      this.elements = document.querySelectorAll('.btn-calc');
      


       this.elements.forEach( elemento=> {
        e.addEventListener('click', function() {

         // switch(elemento)

    

          // probar con un switch
          elemento.getAttribute('value')
          console.log(elemento.innerText);
          if(elemento.innerText === 'on/off'){
            calculadora.onOff();

          } else if(elemento.innerText === 'CE') {
            calculadora.borrarTodo();
    
          }else if(elemento.innerText === 'C') {
            calculadora.borrar();
          }else if(elemento.getAttribute('value') == '=' ){
            calculadora.calcularResultado();
          } else {
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
    try{
    this.resultado= eval(this.formula);
    document.getElementById('resultado').innerText = this.resultado;
  }catch(error){
    document.getElementById('resultado').innerText = error;

  }
    
    
  }

  apagar(){
    this.formula = ' ';
    this.resultado = ' ';  
    this.estaEncendido = false;
    this.refrescarFormula();
    this.refrescarResultado();

    console.log('se apago la calculadora');
  }

  encender(){
      this.formula = ' ';
      this.resultado = ' ';
      this.estaEncendido = true;
      this.refrescarFormula(0);
      console.log('se encendio la calculadora');
  }


  onOff(){
    if(this.estaEncendido){
      this.refrescarFormula(0);
    }else{
      this.apagar();
      this.refrescarFormula();  
      /* this.encender();
      this.refrescarCampo('formula', '0'); */
    }
  }
  borrar() {
      this.formula = this.formula.toString().slice(0,-1);
      //this.refrescarFormula();
      this.refrescarCampo('formula', this.formula);
      this.resultado = '';
      this.refrescarResultado();
      this.refrescarCampo();
  }


  borrarTodo(){
    this.formula='';
    //this.refrescarFormula();
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

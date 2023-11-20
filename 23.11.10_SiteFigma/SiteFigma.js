//  PADRÃO
    function retornar(element){
        element.style.backgroundColor = '';
        element.style.transform = 'scale(1)';
    }




// HEADER
    function animarHeader(element){
        element.style.backgroundColor = '#312e40';
        element.style.transform = 'scale(1.1)';
    }





// BODY
    //Cursos esquerda
    function animarCursos(element){
        element.style.transform = 'scale(1.05)';
    }



// SUB-BODY
    // SuperDev
    function acharSuperDev() {
        let element = document.getElementById('superDev');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }

    // BootCamps
    function acharBootCamps() {
        let element = document.getElementById('bootCamps');
  
        let elementPosition = element.offsetTop;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }  
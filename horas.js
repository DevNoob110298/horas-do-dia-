let container = document.querySelector('.container');
let botao = document.querySelector('.botao');
let imagem = document.querySelector('.imagem')

botao.addEventListener('click',()=>{
  setInterval(horas,1000);
  horas();
    
})
function horas(){
    container.style.display = 'block'
    let data = new Date()
    let hora = data.getHours() ;
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let horas = `${tempo(hora)}:${tempo(minutos)}:${tempo(segundos)}`;
    document.querySelector('.texto').innerHTML = horas;  
  
    function tempo(tempo){
        if(tempo < 10){
            return '0'+ tempo;
        }else{
            return tempo;
        }
    }
    if( hora >= 9 && hora < 12){
        document.querySelector('body').style.background = 'goldenrod';
        document.querySelector('.imagem').src = 'fotomanha.png';
        document.querySelector('.textoI').innerHTML = 'Manhã';
        document.querySelector('.msg').innerHTML = 'BOM DIA';
        imagem.style.display = 'inline';
    }else if(hora >= 12 && hora < 18){
        document.querySelector('body').style.background = 'navajowhite';
        document.querySelector('.imagem').src = 'fototarde.png';
        document.querySelector('.textoI').innerHTML = 'Tarde';
        document.querySelector('.msg').innerHTML = 'BOA TARDE';
        imagem.style.display = 'inline';
    }else{
        document.querySelector('body').style.background = 'black';
        document.querySelector('.imagem').src = 'fotonoite.png';
        document.querySelector('.textoI').innerHTML = 'Noite';
        document.querySelector('.msg').innerHTML = 'BOA NOITE';
        imagem.style.display = 'inline';
    }
}
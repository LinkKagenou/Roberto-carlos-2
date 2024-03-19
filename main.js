var motivos = [
    " ele não tem uma perna",
    "ele é o herói mais maneiro de todos!!!1!1",
    "as musicas dele já curaram mais de 10 milhões de pessoas ",
      "ele ama programar musicas",
      "ele adora compor musicas"
      
  ];
  
  var imagens = [ "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Roberto_Carlos_Credicard_Hall_%2842626066250%29.jpg/1200px-Roberto_Carlos_Credicard_Hall_%2842626066250%29.jpg",
    "https://uploads.metropoles.com/wp-content/uploads/2022/07/21135142/293225183_566753541844569_8465128677026050412_n-1.jpg",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/Roberto-Carlos-Instagram-e1637183842432.jpg?w=666","https://conteudo.imguol.com.br/c/entretenimento/3f/2022/12/24/roberto-carlos-emociona-com-show-de-fim-de-ano-1671877415668_v2_1x1.jpg",         "https://ciadoslivros.com.br/wp-content/uploads/2023/02/biografia-de-roberto-carlos.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  
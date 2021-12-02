
const botão = document.getElementById("contar");
const contagemLetras = {};
const contagemPalavras = {};


botão.addEventListener("click", function(){
    letras()
    palavras()
})


function letras(){   
    //pega o texto do input, passa para lower case
    //e deixa apenas caracteres do alfabeto
    let texto = document.getElementById("texto").value;   
    texto = texto.toLowerCase()
    texto = texto.replace(/[^a-z'\s]+/g, "")
    texto = texto.replace(' ','')
    
    //percorre cada letra de texto
    for (let i = 0; i < texto.length; i++) {
        let letraAtual = texto[i];       
      console.log(letraAtual)
        //encontra e aumenta a contagem de uma letra
        if (contagemLetras[letraAtual] === undefined){
            contagemLetras[letraAtual] = 1; 
        }else{ 
            contagemLetras[letraAtual]++; 
        }
    }
    //pega cada letra e adiciona sua contagem
    for (let letra in contagemLetras) { 

        //cria elemento onde vão ser adicionada as letras
        const span = document.createElement("span"); 

        //cria a string onde serão adicionadas as letras e sua frequência
        const quantLetras = `"${letra}": ${contagemLetras[letra]}, `;
            span.innerText = quantLetras; 
        
        //adiciona a string à div já criada em HTML
        const letras = document.getElementById("lettersDiv");
            letras.appendChild(span); 
      }     

}
  

function palavras(){

    let texto = document.getElementById("texto").value;   
    texto = texto.toLowerCase()
    texto = texto.replace(/[^a-z'\s]+/g, "")
    let words = texto.split(' ');
        
        for(let i = 0; i < words.length; i++){
            let palavraAtual = words[i];       

            if (contagemPalavras[palavraAtual] === undefined){
                contagemPalavras[palavraAtual] = 1; 
            }else{ 
                contagemPalavras[palavraAtual]++; 
            }
        }
        for (let palavra in contagemPalavras) {        
            const p = document.createElement("p"); 
            const quantPalavras = `"${palavra}": ${contagemPalavras[palavra]}, `;
                p.innerText = quantPalavras; 
                    
            const palavras = document.getElementById("wordsDiv");
                palavras.appendChild(p); 
        }     

}


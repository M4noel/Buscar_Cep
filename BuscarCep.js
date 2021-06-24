
document.querySelector('#cepforme').addEventListener('submit', getCepInfo);

function getCepInfo(e) {

    // Pega valor do cep do input

    const cep = document.querySelector('.cep').value;

    // Faz a request

    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => {

            return response.json();

        })

        .then(data => {

            // Exibe informação do CEP

            let infoCep = "";

            if (data.erro) {

                infoCep += `
         
         <div class=" encon">-------------Cep não encontrado-------------</div>
         
        `;


            } else {
                infoCep += `
               
       <div class= "encon">  -------------CEP encontrado-------------</div>
        
       <div = id="result">
     <p ><strong>Cep: </strong>${data.cep}</p>
     <p ><strong>Estado: </strong>${data.uf}</p>
     <p "><strong>Cidade: </strong>${data.localidade}</p>
     <p ><strong>Logradouro: </strong>${data.logradouro}</p>
   </div>
         
         `;
            }

            document.querySelector("#infoCep").innerHTML = infoCep;

        });


    e.preventDefault();


}


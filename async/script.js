async function iniciarAsync() {
    const dadosResponse = await fetch('./teste.json');
    const dadosJSON = await dadosResponse.json();

    const spans = document.querySelectorAll('span');
    spans[0].innerText = await dadosJSON.nome;
    spans[1].innerText =  await dadosJSON.idade;
    spans[2].innerText = await dadosJSON.cidade;

    if (dadosJSON.faculdade) {
        spans[3].innerText = "Cursando ensino superior";
    }else {
        spans[3].innerText = "Ensino superior incompleto";
    }
    
}

iniciarAsync();
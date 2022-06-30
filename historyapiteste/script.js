// ↓↓ seleciona os links no html  <->  get links on html
const links = document.querySelectorAll('a');

// ↓↓ função de clique  <->  click function
function handleClick(event) {
    event.preventDefault();

    // ↓↓ pega o link da página atual  <->  get the link of the current page
    fetchPage(event.target.href);

    // ↓↓ altera a url quando troca a sessão do navegador  <->  change url when switching browser session
    window.history.pushState(null, null, event.target.href)
}

// ↓↓ função para pegar link da página atual  <->  function to get the link of the current page
async function fetchPage(url) {
    
    // ↓↓ pega a url <-> get url
    const pageResponse = await fetch(url);

    // ↓↓ transforma a url em texto  <->  transform the url in text
    const pagetext = await pageResponse.text();

    // ↓↓ troca o conteúdo da página  <->  change the page content
    replaceContent(pagetext)
}

// ↓↓ função para realocar ou trocar o conteúdo da página  <->  function to replace or change the content of page
function replaceContent(newText) {

    // ↓↓ Cria um elemento 'div' para alocar o novo conteúdo  <->  create a new element 'div' to put the new content
    const newHtml = document.createElement('div');

    // ↓↓ Recebe o conteúdo novo  <->  get the new content
    newHtml.innerHTML = newText;
    
    // ↓↓ Pega o conteúdo antigo  <->  get the oldest contet
    const oldContent = document.querySelector('.content');

    // ↓↓ seleciona a classe referente ao conteúdo novo <->  select the class referring to the new content
    const newContent = newHtml.querySelector('.content')

    // ↓↓ Faz a troca de conteúdo da div selecionada('.content')  <->  change the div content selected('.content')
    oldContent.innerHTML = newContent.innerHTML;

    // ↓↓ Troca o título da página  <->  Change the page title
    document.title = newHtml.querySelector('title').innerText;
}

// ↓↓ Altera o link da págino quando a entrada do histórico ativa é alterada  <=>  change page link when active history entry is changed
window.addEventListener('popstate', () => {
    fetchPage(window.location.pathname)
})

// ↓↓ Adiciona o evento de clique nos links  <->  add the click event to the links
links.forEach(link => {
    link.addEventListener('click', handleClick)
})
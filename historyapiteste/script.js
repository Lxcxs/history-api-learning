const links = document.querySelectorAll('a');

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
    const pageResponde = await fetch(url);
    const pagetext = await pageResponde.text();
    replaceContent(pagetext)
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;
    
    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content')

    oldContent.innerHTML = newContent.innerHTML;
}

links.forEach(link => {
    link.addEventListener('click', handleClick)
})
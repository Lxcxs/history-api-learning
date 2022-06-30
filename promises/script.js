//uso do then
// const promesa = new Promise((resolve, reject) => {
//     let condicao = true
//     if (condicao) {
//         setTimeout(() => {
//             console.log({nome: 'Lucas', idade: 20})
//         }, 1000)
//     } else {
//         reject(Error('ocorreu um erro'))
//     }
// })

// promesa.then(resolucao => { console.log(resolucao) }).catch(rejeitada => console.log('reijeitada'))




// uso do promise.all
// const dados = new Promise((resolucao) => {
//     setTimeout(() => {
//         resolucao('dados carregados')
//     }, 1000)
// })

// const login = new Promise((resolucao) => {
//     setTimeout(() => {
//         resolucao('login efetuado')
//     }, 1500)
// })

// const carregaTudo = Promise.all([login, dados]);

// carregaTudo.then((resolucao) => {
//     console.log(resolucao)
// })





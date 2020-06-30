const button = document.querySelector('button#formBtn')
const productId = document.querySelector('input#productId')
const resArea = document.querySelector('code#res')
const form = document.querySelector('form#form')


const responseModel = (response) => {
    const { title, desc, url } = response
    let text = `<h2><strong>${title}</strong></h2>\n<b>Descrição:</b> ${desc} \n<b>URL:</b> <a href="${url}" target="_blank">${url}</a>`
    return text
}

const callApi = async (id = undefined) => {
    resArea.innerHTML = ''
    let index = ""
    if(!id == undefined){
        await fetch(`http://localhost:3001/api/products/${id}`)
        .then(res => {
            res.json()
        })
        .then(res => {
            console.log(res)
            for(value in res){
                if(res[value]['_id'] == id){
                    index = value
                    break
                }
            }
            resArea.innerHTML = responseModel(res[index] || res[0])
        })
    } else {
        await fetch(`http://localhost:3001/api/products/`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            for(value in res){
                if(res[value]['_id'] == id){
                    index = value
                    break
                }
            }
            resArea.innerHTML = responseModel(res[index] || res[0])
        })
    }
}
// alert('funciona')
button.addEventListener('click', () => callApi(productId.value))
form.addEventListener('submit', event => event.preventDefault())
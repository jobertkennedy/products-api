const button = document.querySelector('button#formBtn')
const productId = document.querySelector('input#productId')
const resArea = document.querySelector('code#res')
const form = document.querySelector('form#form')

const callApi = async (id = undefined) => {
    resArea.innerHTML = ''
    if(!id == undefined){
        fetch(`http://localhost:3001/api/products/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            resArea.innerHTML = res['title']
        })
    } else {
        fetch(`http://localhost:3001/api/products/`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            resArea.innerHTML = res
        })
    }
}
// alert('funciona')
button.addEventListener('click', () => callApi(productId.value))
form.addEventListener('submit', event => event.preventDefault())
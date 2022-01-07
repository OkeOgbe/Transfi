const privateSaleBtn =  document.querySelector('.privateSaleBtn')
const formFunc = async ()=>{
    //const type =  document.querySelector('#type').value
    const firstName =  document.querySelector('#firstName').value
    const lastName =  document.querySelector('#lastName').value
    const email =  document.querySelector('#email').value
    document.querySelector('.privateSaleForm').style.display = 'none'
    document.querySelector('.privateSaleLoading').style.display = 'block'

    _scq.push(["identify",{ 
    email: email, 
    firstName: firstName, 
    lastName: lastName,
    tags: ["privateSales"],
    success:()=>{
        document.querySelector('.privateSaleSuccess').innerHTML = "Added to List"
        document.querySelector('.privateSaleLoading').style.display = 'none'
        document.querySelector('.privateSaleSuccess').style.display = 'block'
        setTimeout(()=>{
            document.querySelector('.privateSaleSuccess').style.display = 'none'
            document.querySelector('.privateSaleForm').style.display = 'block'
            document.querySelector('#firstName').value = ""
            document.querySelector('#lastName').value = ""
            document.querySelector('#email').value = ""
        }, 1000)
    },
    failure:()=>{
        document.querySelector('.privateSaleSuccess').innerHTML = "Not Added to List"
        document.querySelector('.privateSaleLoading').style.display = 'none'
        document.querySelector('.privateSaleSuccess').style.display = 'block'
        setTimeout(()=>{
            document.querySelector('.privateSaleSuccess').style.display = 'none'
            document.querySelector('.privateSaleForm').style.display = 'block'
            document.querySelector('#firstName').value = ""
            document.querySelector('#lastName').value = ""
            document.querySelector('#email').value = ""
        }, 1000) 
    }
    }]);
}
privateSaleBtn.onclick = formFunc;

const productBtn =  document.querySelector('.productBtn')
const productFunc = async ()=>{
    const email =  document.querySelector('#productEmail').value
    document.querySelector('.productForm').style.display = 'none'
    document.querySelector('.productLoading').style.display = 'block'
    _scq.push(["identify",{ 
        email: email, 
        tags: ["productsWaitingList"],
        success:()=>{
            document.querySelector('.productSuccess').innerHTML = "added to list"
            document.querySelector('.productLoading').style.display = 'none'
            document.querySelector('.productSuccess').style.display = 'block'
            setTimeout(()=>{
                document.querySelector('.productSuccess').style.display = 'none'
                document.querySelector('.productForm').style.display = 'block'
                document.querySelector('#productEmail').value = ""
            }, 1000)
        },
        failure:()=>{
            document.querySelector('.productSuccess').innerHTML = "Not addded to list"
            document.querySelector('.productLoading').style.display = 'none'
            document.querySelector('.productSuccess').style.display = 'block'
            setTimeout(()=>{
                document.querySelector('.productSuccess').style.display = 'none'
                document.querySelector('.productForm').style.display = 'block'
                document.querySelector('#productEmail').value = ""
            }, 1000)
        }
        }]);
}
productBtn.onclick = productFunc;


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

function handlePhone (event) {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
function phoneMask (value){
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    if (!value) {
        return ""
    } else{
        return value
    }
}

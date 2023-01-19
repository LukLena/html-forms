
const label = document.getElementsByClassName('interest__check')

function change(event){
    console.log(event.target)
    if (label[0].checked  ){
          label[1].checked = true
          label[2].checked = true
         }
 
     else if (label[0].checked == false ){
          label[1].checked =false
          label[2].checked =false
         }
    
}
function change2(event){
    if (label[3].checked  ){
          label[4].checked = true
          label[5].checked = true
         }
 
     else if (label[3].checked == false ){
          label[4].checked = false
          label[5].checked = false
         }
}

label[0].addEventListener('click', change)
label[3].addEventListener('click', change2)


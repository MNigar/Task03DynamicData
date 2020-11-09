var data=[]
 var inputgroup=
`<div class="input-group">
<input type="text" placeholder="Add">
<div class="icons">
    <div class="add-icon" onclick="addItem(this)"><i class="fas fa-plus"></i></div>
<div class="remove-icon" onclick="removeItem(this)"> <i class="fas fa-minus"></i></div>
 </div>
</div>`
var formGroup=document.querySelector(".form-group")

function addItem(el){
    var formGroupData=formGroup.innerHTML;
    formGroupData+=inputgroup;
    formGroup.innerHTML=formGroupData;

}

function removeItem(el){

   var remove=el.parentElement.parentElement;
   formGroup.removeChild(remove);
}
function saveData(e){
e.preventDefault();
var inputs=document.querySelectorAll(".input-group input");
for (var i=0;i<inputs.length;i++){
    data.push(inputs[i].value)
        console.log(data)
        }
       

}
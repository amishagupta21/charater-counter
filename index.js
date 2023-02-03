const textAreaNode=document.querySelector("#textarea");
const totalCharaterNode=document.querySelector("#total-container")
const remainingCharaterNode=document.querySelector("#remaining-container")

textAreaNode.addEventListener("keyup",()=>{
    updateCharater()
})
updateCharater()
function updateCharater(){
    totalCharaterNode.innerHTML=textAreaNode.value.length;
    remainingCharaterNode.innerHTML=textAreaNode.getAttribute("maxlength")-textAreaNode.value.length
}
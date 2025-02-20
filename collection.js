var searchbar=document.querySelector(".search-bar")
var shirtcontainer=document.querySelector(".shirt-container")
var shirts=shirtcontainer.querySelectorAll("div")


searchbar.addEventListener("keyup",function(){
    var entered_text=event.target.value.toUpperCase()
    for(var i=0;i<shirts.length;i=i+1){
        var productname=shirts[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(entered_text)<0){
            shirts[i].style.display="none"
        }
        else{
            shirts[i].style.display="block"
        }
    }
})
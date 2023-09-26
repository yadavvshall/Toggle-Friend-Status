var istatus = document.querySelector("h5")
var add1 = document.querySelector("#add")
var flag = 0;
add1.addEventListener("click",function(){
    if(flag == 0){
        istatus.innerHTML = "friends"
        istatus.style.color = "green"
        add1.innerHTML = "Remove Friend"
        flag=1;
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        add1.innerHTML = "Add friend"
        flag = 0;
    }
});
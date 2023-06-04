function ttsp(x) {
    var y = x.parentElement.parentElement.parentElement;
    localStorage.setItem("img",y.children[0].src);
    localStorage.setItem("heading",y.children[1].children[0].innerHTML);
    localStorage.setItem("text",y.children[1].children[2].innerHTML);
    localStorage.setItem("address",y.children[1].children[3].innerHTML);
    localStorage.setItem("price",y.children[1].children[6].children[0].value);
    localStorage.setItem("dayStart",y.children[1].children[7].innerHTML)
}
function loadsp() {
    document.getElementById("item-img").setAttribute("src",localStorage.getItem("img"));
    document.getElementById("Heading").innerHTML = localStorage.getItem("heading");
    document.getElementById("text").innerHTML = localStorage.getItem("text");
    document.getElementById("address").innerHTML = localStorage.getItem("address");
    document.getElementById("dayStart").innerHTML = localStorage.getItem("dayStart");
    var a = localStorage.getItem("price");
    document.getElementById("price").innerHTML = a.slice(0,7) + "vnđ" +"/khách";
    var tenfile = localStorage.getItem("img");
    var dau = tenfile.substring(0,tenfile.length-5);
    var cuoi =tenfile.substring(tenfile.length-4);
    
    var maghinhcon =document.getElementById("hinhcon").children;
    for(var i=0;  i<maghinhcon.length; i++) {
        maghinhcon[i].setAttribute("src",dau+i+cuoi)
    }
    console.log(maghinhcon)
}
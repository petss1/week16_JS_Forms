const carModels={
    reno:["Sandero","Duster","Logan"],
    opel:["Astra","Corsa","Adam"],
    mazda:["Demio","Axela","Mazda3"],
    jaguar:["XJ-S","XE","X-Type"]
};

function updateCarModels(){
    const brand=document.getElementById("car-brand").value;
    const modelSelect=document.getElementById("car-model");
    
    modelSelect.innerHTML="<option value=''>Выберите модель</option>";
    
    if (brand && carModels[brand]){
        carModels[brand].forEach(function(model){
            const option=document.createElement("option");
            option.value=model.toLowerCase();
            option.textContent=model;
            modelSelect.appendChild(option);
        });
    }
}

function calculatePrice(){
    const brand=document.getElementById("car-brand").value;
    const model=document.getElementById("car-model").value;
    const fuel=document.getElementById("fuel-type").value;
    const engineVolume=parseFloat(document.getElementById("engine-volume").value);
    const condition=document.getElementById("car-condition").value;
    const owners=document.getElementById("ownerCount").value;
    const paymentMethod=document.getElementById("paymentMethod").value;

    let price=1000000;

    if(brand==="reno") price+=100000;
    if(brand==="opel") price+=100000;
    if(brand==="mazda") price+=100000;
    if(brand==="jaguar") price+=500000;
    if(fuel==="diesel") price+=10000;
    if(fuel==="electric") price+=50000;
    if(engineVolume>=2.5) price+=10000;
    if(condition==="used") price-=10000;
    if(owners==="3-and-more") price-=20000;
    if(paymentMethod==="cash") price-=10000;
    document.getElementById("price").textContent=price.toLocaleString();
}
document.getElementById("car-brand").addEventListener("change",function(){
    updateCarModels();
    document.getElementById("car-model").value="";
    document.getElementById("car-brand").classList.add("changed");
});
document.getElementById("car-model").addEventListener("change",function(){
    document.getElementById("car-model").classList.add("changed");
});
document.getElementById("fuel-type").addEventListener("change",function(){
    document.getElementById("fuel-type").classList.add("changed");
});
document.getElementById("engine-volume").addEventListener("input",function(){
    document.getElementById("engine-volume").classList.add("changed");
});
document.getElementById("car-condition").addEventListener("change",function(){
    document.getElementById("car-condition").classList.add("changed");
});
document.getElementById("ownerCount").addEventListener("change",function(){
    document.getElementById("ownerCount").classList.add("changed");
});
document.getElementById("paymentMethod").addEventListener("change",function(){
    document.getElementById("paymentMethod").classList.add("changed");
});
document.getElementById("calculate-btn").addEventListener("click",function(){
    calculatePrice();
});


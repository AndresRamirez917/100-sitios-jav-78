async function getData() {
const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
const coctail = await result.json()
console.log(coctail);
coctail.drinks.forEach(element => {
    const flexbox = document.createRange().createContextualFragment(`
        
        <div class="flexbox-1">
        <img src="${element.strDrinkThumb}" class="user rounded-circle" alt="">
            <h1 class="title">${element.strDrink}</h1>
        </div>
        
        `)
        const about_flex = document.querySelector(".about-flex");
        about_flex.append(flexbox)
});
}
getData()

async function getdata2() {
    const result = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const dessert = await result.json();
    console.log(dessert);
    dessert.meals.forEach(element => {
        const box = document.createRange().createContextualFragment(`
            
             <div class="workflex-1">
                <img src="${element.strMealThumb}" alt="">
             </div>
            
            `)
            const work_flex = document.querySelector(".work-flex");
            work_flex.append(box)
    })
}
getdata2()

const btn_validar = document.getElementById("btn-validar").onclick = (e) => {
    e.preventDefault();
    const namesArr = [
        {id:"name", name:"Nombre"},
        {id:"email", name:"Email"},
        {id:"fecha", name:"Fecha"},
        {id:"hora", name:"Hora"},
        {id:"mensaje", name:"Mensaje"}
    ]
    for (let {id,name} of namesArr) {
        const element = document.getElementById(id);
        if(element.value.trim() === ""){
            return swal({
                title: `El campo ${name} no puede estar vacío`,
                icon: "error",
                 })
        }
        if(id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(element.value)){
            return swal({
                title: `El campo ${name} no tiene el formato correcto`,
                icon: "error",
                 })
        }
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         namesArr.forEach(({id})=>document.getElementById(id).value = "")
}
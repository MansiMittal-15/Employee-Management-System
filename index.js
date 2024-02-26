let btn = document.querySelector("#btn");
let naam = document.querySelector("#name");
let city = document.querySelector("#city");
let salary = document.querySelector("#salary");


let table = document.querySelector("table");

const insertRow = ()=>{

    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    
    td1.innerHTML = naam.value;
    td2.innerHTML = city.value;
    td3.innerHTML = salary.value;
    td4.innerHTML = "Edit";
    td5.innerHTML = "Delete";
    
    
    td4.style.color = "blue";
    td5.style.color = "blue";

    td4.style.cursor = "pointer";
    td5.style.cursor = "pointer";
   
    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4);
    row.append(td5);

    table.append(row);

    td5.addEventListener("click", ()=>{
        row.remove();
    });

    td4.addEventListener("click", ()=>{
        let name = td1.innerHTML;
        let city = td2.innerHTML;
        let salary = td3.innerHTML;
        

        td1.innerHTML = prompt("Wanna change employee name ..?");

        if(td1.innerHTML == "")
        {
            td1.innerHTML = name;
        }

        td2.innerHTML = prompt("Wanna change city of employee..?");

        if(td2.innerHTML == "")
        {
            td2.innerHTML = city;
        }

        td3.innerHTML = prompt("Wanna change employee salary..?");

        if(td3.innerHTML == "")
        {
            td3.innerHTML = salary;
        }

    });
};

btn.addEventListener("click", ()=>{

    if(naam.value != "" && city.value != "" && salary.value != "")
    {
        insertRow();
    }

    
});
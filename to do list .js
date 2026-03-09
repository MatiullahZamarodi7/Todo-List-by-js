let input = document.querySelector("#input");
let count = document.getElementById("countNumber");





// <!-- table parts -->

let table = document.querySelector(".all-table");

let tableTr = document.querySelector("#table-tr");


// <!-- table parts -->



// ch-teyps innnerhtml
let todoMonth = document.getElementById("todoMonth");

let todoTime = document.getElementById("Time");

let addTag = document.getElementById("addTag");


// colors
let Rcolor = document.querySelector("#r-color");
let Gcolor = document.querySelector("#g-color");
let Bcolor = document.querySelector("#b-color");
let Lcolor = document.querySelector("#l-color");
let Ycolor = document.querySelector("#y-color");
let MGcolor = document.querySelector("#mg-color");
let Pcolor = document.querySelector("#p-color");
let PRcolor = document.querySelector("#pr-color");
let GOcolor = document.querySelector("#go-color");
let Ccolor = document.querySelector("#c-color");
// colors

// inputColor

let selectColor = document.querySelector("#select-color");
let colorRang = document.querySelector("#colorRang");

selectColor.addEventListener("click", function() {
    colorRang.style.display = "block"
})

colorRang.addEventListener("input", function() {
    input.style.backgroundColor = this.value;
})

// inputColor



Rcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(130deg ,  black, red, blue )";
})

Gcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(100deg ,   green, rgb(205, 3, 231), gold)";
})

Bcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(160deg ,  blue, pink, rgb(8, 255, 222)";
})

Lcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(130deg ,   lime, rgb(243, 0, 0), blue)";
})

Ycolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(190deg ,  yellow, green, rgb(255, 174, 0))";
})

MGcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(30deg ,   magenta, rgb(9, 255, 0), rgb(245, 2, 164))";
})

Pcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(100deg ,   pink, rgb(255, 0, 149), rgb(101, 206, 41) )";
})

PRcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(170deg ,   purple, rgb(77, 240, 145), rgb(51, 255, 0))";
})

GOcolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(8deg ,   gold, rgb(241, 7, 163), rgb(14, 165, 34))";
})

Ccolor.addEventListener("click", function() {
    input.style.backgroundImage = "linear-gradient(130deg , black, aqua , blue )";
})

// colors






// <!-- plase + remove -->
let addBtn = document.querySelector("#add");
let removeBtn = document.querySelector("#remove-btn")
    // <!-- plase + remove -->

removeBtn.addEventListener("click", function() {
    input.value = " ";
    // input.value.remove();
    input.style.backgroundImage = "linear-gradient(130deg , white , white)";

    dateOP.innerHTML = "free"

    addTag.value = " "
    todoTime.value = "00,00,AM"
    todoMonth.value = "month , day , yers"

    // count.innerHTML = "";
})




addBtn.addEventListener("click", function() {



    count.innerHTML = table.childElementCount + 0;
    // console.log(table.childElementCount);




    let newtrtodo = document.createElement("tr");
    newtrtodo.className = "table-tr";


    // todoid
    let todoid = document.createElement("td");
    todoid.className = "namber-tb";

    let todospan = document.createElement("span");
    todospan.className = "namber-tb-name";
    todospan.innerHTML = table.childElementCount + 0;

    todoid.append(todospan)
        // todoid


    // todotask

    let todotaskname = document.createElement("td");
    todotaskname.className = "task-tb";

    let todotaskbtn = document.createElement("button")
    todotaskbtn.className = "task-tb-name";

    let inputbg = input.style.backgroundImage;
    todotaskbtn.style.backgroundImage = inputbg;


    let inputColorRange = input.style.backgroundColor;
    todotaskbtn.style.backgroundColor = inputColorRange;


    // input append
    todotaskbtn.innerHTML = input.value;



    todotaskname.append(todotaskbtn);
    // todotask


    // day-tb
    let tododay = document.createElement("td");
    tododay.className = "day-tb";

    let tododaybtn = document.createElement("button");
    tododaybtn.className = "day-tb-month";


    // month append
    tododaybtn.innerHTML = todoMonth.value;

    tododay.append(tododaybtn);
    // day-tb


    // time-tb
    let todotime = document.createElement("td");
    todotime.className = "time-tb";

    let todotimebtn = document.createElement("button");
    todotimebtn.className = "time-tb-time";
    todotimebtn.innerHTML = "490"

    // time append
    todotimebtn.innerHTML = todoTime.value;

    todotime.append(todotimebtn);
    // time-tb

    // todo-tag-tb
    let todotagtb = document.createElement("td");
    todotagtb.className = "todo-tag-tb";

    let todotagtbbtn = document.createElement("button");
    todotagtbbtn.className = "todo-tag-tb-name";
    todotagtbbtn.innerHTML = "javascript"


    let inputBg = input.style.backgroundImage;
    todotagtbbtn.style.backgroundImage = inputBg;

    let inputcolorRange = input.style.backgroundColor;
    todotagtbbtn.style.backgroundColor = inputcolorRange;

    // todo tag innerHTML
    todotagtbbtn.innerHTML = addTag.value;


    todotagtb.append(todotagtbbtn);
    // todo-tag-tb

    // todo-statuse-tb
    let todoStatuse = document.createElement("td");
    todoStatuse.className = "todo-statuse-tb";

    let todoStatusebtn = document.createElement("button");
    todoStatusebtn.className = "todo-statuse-tb-name";
    todoStatusebtn.innerHTML = "no Started"

    todoStatuse.append(todoStatusebtn);
    // todo-statuse-tb







    // todo-idet-tb
    let todoIdet = document.createElement("td");
    todoIdet.className = "todo-idet-tb";

    let todoIdetIcon = document.createElement("img");
    todoIdetIcon.className = "todo-idet-tb-icon";
    todoIdetIcon.src = "to do list img/edit.ico";
    todoIdet.append(todoIdetIcon)
        // todo-idet-tb

    // todo-remove-tb
    let todoremove = document.createElement("td");
    todoremove.className = "todo-remove-tb";

    let todoImgRemove = document.createElement("img");
    todoImgRemove.className = "todo-idet-tb-icon";
    todoImgRemove.src = "to do list img/remove.ico";

    todoremove.append(todoImgRemove)


    todoremove.addEventListener("click", function() {
        newtrtodo.remove();
        count.innerHTML = table.childElementCount - 1;
    })




    // todo-remove-tb



    newtrtodo.append(todoid, todotaskname, tododay, todotime, todotagtb, todoStatuse, todoIdet, todoremove)

    // table.append(newtrtodo);
    // console.log(newtrtodo);

    table.append(newtrtodo);

    console.log(table);
    console.log(newtrtodo);


})


// <!-- plase + remove -->
let numberRows = 20;
let numberColumns = 10;
const container = document.querySelector("#container");

function createRows () {
    for (i=0;i<numberRows;i++) {
        const row = document.createElement("div");
        row.classList.add("rows");
        container.appendChild(row);
    }
};

createRows();

function createColumns () {
    let rows = document.querySelectorAll(".rows");
    rows.forEach((row) => {
        for (i=0;i<numberColumns;i++) {
            const column = document.createElement("div");
            column.classList.add("columns");
            row.appendChild(column);
        };
    });
};

createColumns();

function mouseover () {
    let columns = document.querySelectorAll(".columns");
    columns.forEach((column) => {
    column.addEventListener("mouseover", () => {
        column.style.background = "black";
    });
});
};

mouseover();

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let sketchpadSizeRows = prompt("How many rows?");
    let sketchpadSizeColumns = prompt("How many columns?");
    if (sketchpadSizeRows == null || sketchpadSizeRows == "") {
        text = "U cancelled the change";
    } else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        numberRows = sketchpadSizeRows;
        createRows();
        numberColumns = sketchpadSizeColumns;
        createColumns();
        mouseover();
    }
});
const squares = 100;
const container = document.querySelector("#container");

function createRows () {
    for (i=0;i<squares;i++) {
        const row = document.createElement("div");
        row.classList.add("rows");
        container.appendChild(row);
    }
};

createRows();

const rows = document.querySelectorAll(".rows");

function createColumns () {
    rows.forEach((row) => {
        for (i=0;i<squares;i++) {
            const column = document.createElement("div");
            column.classList.add("columns");
            row.appendChild(column);
        };
    });
};

createColumns();

const columns = document.querySelectorAll(".columns");

columns.forEach((column) => {
    column.addEventListener("mouseover", () => {
        column.style.background = "black";
    });
});
const board = document.querySelector(".board");
board.style.height = "550px";
board.style.width = "550px";
const boardWidth = board.clientWidth;
const boardHeight = board.clientHeight;

//function to make grid
function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < num; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${boardWidth / num}px`;
            square.style.height = `${boardHeight / num}px`;
            row.appendChild(square);
        }
        board.appendChild(row);
    }
}

//function to generate light colors
function generateLightColor() {
    const red = Math.floor((1 + Math.random()) * 256 / 2);
    const green = Math.floor((1 + Math.random()) * 256 / 2);
    const blue = Math.floor((1 + Math.random()) * 256 / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//function to generate dark colors
function generateDarkColor() {
    const red = Math.floor(Math.random() * 256 / 2);
    const green = Math.floor(Math.random() * 256 / 2);
    const blue = Math.floor(Math.random() * 256 / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const black = document.querySelector("#black");
sizes.forEach(
    //when size is chosen, make grid
    size => size.addEventListener("click", function () {
        sizes.forEach(size => size.classList.remove("button-chosen"));
        colors.forEach(color => color.classList.remove("button-chosen"));
        size.classList.add("button-chosen");
        board.innerHTML = "";
        makeGrid(size.id);
        const grids = document.querySelectorAll(".square");

        //choose color and change grid color as mouse moves
        colors.forEach(
            color => color.addEventListener("click", function () {
                colors.forEach(color => color.classList.remove("button-chosen"));
                color.classList.add("button-chosen");
                if (color.id == "black") {
                    grids.forEach(grid => grid.addEventListener("mouseover", function () {
                        grid.style.backgroundColor = "#000000";
                    })
                    );
                }

                else if (color.id == "light") {
                    grids.forEach(grid => grid.addEventListener("mouseover", function () {
                        grid.style.backgroundColor = `${generateLightColor()}`;
                    })
                    );
                }

                else if (color.id == "dark") {
                    grids.forEach(grid => grid.addEventListener("mouseover", function () {
                        grid.style.backgroundColor = `${generateDarkColor()}`;
                    })
                    );
                }
            })
        );
    })
);
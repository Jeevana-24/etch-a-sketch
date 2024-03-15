const b=document.querySelector('body')

const para=document.createElement('p')
para.textContent="Draw Here"
para.style.fontSize = "40px"
b.appendChild(para)

const cont=document.createElement("div")
for (let i=0;i<64;i++){
    const grid=document.createElement('div')
    grid.classList.add("row")
    for(let i=0;i<64;i++){
        const grids=document.createElement('button')
        grids.classList.add("col")
        grids.style.backgroundColor="white"
        grid.appendChild(grids)
    }
    cont.appendChild(grid)
}
b.appendChild(cont)
const sel=document.querySelectorAll("button")
for(let i=0;i<64*64;i++){
    sel[i].addEventListener("mouseover", () => {
        sel[i].style.backgroundColor = "black";
    });
    }

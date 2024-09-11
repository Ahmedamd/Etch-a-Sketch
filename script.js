// target buttons

const gridBtn = document.querySelector('.gridBtn');
const resetBtn = document.querySelector('.resetBtn');

const gridBox = document.querySelector('.grid-box');

const grids = document.querySelectorAll('.grid');

let isButtonClicked = false;

// const defaultVal = 16;
var numofGrids = 16;
// let gridvalue = 16;



function createSketch(){
    if(!isButtonClicked  ){
        
    defaultGrid();
 

    }

}

    createSketch();

function createGrids(value){
   
    let maxlength = value*value;
    for( let i = 0 ; i < maxlength; i++){

    let div = document.createElement('DIV');
    div.className = 'grid';
    gridBox.appendChild(div);  
    setWidth(value); 
    setHeight(value);     
    }
        hoverFunction();

}

// default Grid
function defaultGrid(){
     deleteGrids();
        let maxlength = numofGrids*numofGrids;
    
        for (i=0; i<maxlength;i++){
    
    
            let div = document.createElement('DIV');
            div.className = 'grid';
            gridBox.appendChild(div); 
            setWidth(numofGrids); 
            setHeight(numofGrids); 
    
    
        }
        hoverFunction();
     
}
    

function setWidth(value){
    let grids = Array.from(gridBox.children); 
    grids.forEach(grid =>{
    
    
    // grid.style.width = `${((900)/value)}px`;

    grid.style.width = `${(900 / value) - 2}px`;

})
}

function setHeight(value){
    let grids = Array.from(gridBox.children); 
    grids.forEach(grid =>{
    
    
        grid.style.height = `${(500 / value) - 2}px`;

})
}


    // function setHeight()


function gridNum(){
    gridBtn.addEventListener('click', ()=>{
        deleteGrids()
        let value = parseInt(prompt('Please enter grid number , max is 100'));

        numofGrids = value;
        isButtonClicked = true;
        
        createGrids(numofGrids)

        // createSketch();

       


        
    })
}

gridNum();
   

function reset(){
    state = true;
    resetBtn.addEventListener('click', ()=>{
    
      defaultGrid();
      console.log('reset', numofGrids)
        
    })
}


reset();

function deleteGrids(){
    let grids = Array.from(gridBox.children); 
    grids.forEach(grid =>{
    gridBox.removeChild(grid);
    console.log('removing each child');


   })

}

function hoverFunction(){

    
    let grids = Array.from(gridBox.children); 

    grids.forEach(grid =>{
    
    
       grid.addEventListener("mouseover", (e)=>{
        console.log('fired');

        let red = Math.floor((Math.random())*256);
        let green = Math.floor((Math.random())*256);
        let blue = Math.floor((Math.random())*256);
      

        
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

       

       })

})

// gridBox.addEventListener('onmousedown')
   
}

// hoverFunction();






    

const lampOn = "../../assets/lamp-on.svg"; 
const lampOff = "../../assets/lamp-off.svg";

function lamp(){
    return {
        isOn: Math.floor(Math.random() * 2) === 1 ? true : false,
        power: 80,
        name : "open"  
    }
}

function board (rows, columns){
    return Array(rows).fill().map(
        () => Array(columns).fill().map(() => lamp()));  
}

function changeState(img){ 
    console.log(img.id)   
    if(img.id === "false"){
        img.src = lampOn
        img.id = "true"
    } else {
        img.src = lampOff
        img.id = "false"
    }
  
}



const box = board(3, 3)
console.log(box)

box.map((row, RowIndex) => {

    console.log(row);
    
    row.map((lamp, ColumnIndex) => {
        console.log(RowIndex, ColumnIndex);
        let temp = document.querySelector(`[row='${RowIndex}'][column='${ColumnIndex}']`)
      
        if(lamp.isOn){
            temp.src = lampOn;
            temp.id = "true";
        }  
        else {
            temp.src = lampOff;
            temp.id = "false";
        }
                     
        
        temp.onclick = function() { changeState(temp) }
        
    });
    
});

 




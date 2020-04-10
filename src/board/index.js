class Lamp {
    constructor() {
      this.isOn =  Math.floor(Math.random() * 2) === 1 ? true : false;
      this.power = 80; 
      this.name = "abra";     
    }

    changeState(){
        
        this.isOn = !this.isOn;
    }   

    changeName(name){
        this.name = name;
    }

}

class Box {
   
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.matrix = Array(this.rows).fill().map(
            () => Array(this.columns).fill().map(() => new Lamp()));  
        
       
    }

    changeState(row, column){
        this.matrix[row][column].changeState();
    }

    
}


box = new Box(3, 3);

var lampOn = "../../assets/lamp-on.svg"; 

var lampOff = "../../assets/lamp-off.svg";


console.log(box.matrix)

box.matrix.map((row, RowIndex) => {

    console.log(row);
    
    row.map((lamp, ColumnIndex) => {
        console.log(RowIndex, ColumnIndex);
 
        if(lamp.isOn){
           
            document.querySelector(`[row='${RowIndex}'][column='${ColumnIndex}']`).src = lampOn;
            console.log(document.querySelector(`[row='${RowIndex}'][column='${ColumnIndex}']`))
        } else{
           
            document.querySelector(`[row='${RowIndex}'][column='${ColumnIndex}']`).src = lampOff;
            console.log(document.querySelector(`[row='${RowIndex}'][column='${ColumnIndex}']`))
        }
      
        
    });
    
});

 




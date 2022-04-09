
function OnSelectHighlighter(){ 
    var defaultColor; 
    this.HighlightOnSelect = function(event){  
        defaultColor =event.currentTarget.style.color;   
        event.currentTarget.style.color = "white"; 
    }
    this.DeHighlightOnDeselct = function(event){ 
        event.currentTarget.style.color = defaultColor;
    }
}





export default OnSelectHighlighter
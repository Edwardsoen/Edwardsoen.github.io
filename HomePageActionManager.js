
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


function onSelectSetBorderVisible(event){ 
    event.detail.getElementsByClassName("triangle-right")[0].style.visibility = "visible"; 
    event.detail.getElementsByClassName("triangle-left")[0].style.visibility = "visible"; 
}

function onDeselectSetBorderIndvisible(event){ 
    event.detail.getElementsByClassName("triangle-right")[0].style.visibility = "hidden"; 
    event.detail.getElementsByClassName("triangle-left")[0].style.visibility = "hidden"; 
}




export {OnSelectHighlighter, onSelectSetBorderVisible, onDeselectSetBorderIndvisible}; 
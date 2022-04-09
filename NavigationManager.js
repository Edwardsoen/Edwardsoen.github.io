

function NavigationManager (list, selecteditem = 0){
    this.list = list; 
    this.selectedItem = selecteditem; 
    

    this.setSelectedItemByIndex = function(index) { 
        this.selectedItem = list[index]
    }

    this.setSelectedItemByValue = function(value) { 
        if(list.includes(value)) { 
            this.selectedItem = value; 
            return; 
        }
        return "Value Not in List"; 
    }

    this.AddEventlistenerToList = function(eventlistener, action){
        for(var i = 0; i < list.length; i ++){ 
            list[i].addEventListener(eventlistener, action)
            list[i].index = i
        }
    }

    var setSelectedItemOnHover = function(event){ 
        this.selectedItem = list[event.currentTarget.index]
    }

    var SetSelectedOnEachChildElementHover = function(){ 
        for(var i =0; i < list.length; i ++){ 
            list[i].addEventListener("mouseenter", setSelectedItemOnHover)
        }
    }
    SetSelectedOnEachChildElementHover(); 
} 



export default NavigationManager; 




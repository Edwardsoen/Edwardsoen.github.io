

function NavigationManager (list, FirstSelectedItem, SelectoOHover = true){
    this.list = list; 
    var selectedItem = FirstSelectedItem; 

    var InitalizeEvents = function(){ 
        const SelectedEvent = new CustomEvent("Selected", {detail:selectedItem}); 
        selectedItem.dispatchEvent(SelectedEvent);
    }

    var init = function(){ 
        if(SelectoOHover) { 
            SetSelectedOnEachChildElementHover();
        }
    }

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
        InitalizeEvents()
    }

    var setSelectedItemOnHover = function(event){ 
        const SelectedEvent = new CustomEvent("Selected", {detail:event.currentTarget}); 
        const DeSelectedEvent = new CustomEvent("Deselected",{detail:selectedItem})
        selectedItem.dispatchEvent(DeSelectedEvent);
        selectedItem = list[event.currentTarget.index]; 
        event.currentTarget.dispatchEvent(SelectedEvent); 
        
    }

    var SetSelectedOnEachChildElementHover = function(){ 
        for(var i =0; i < list.length; i ++){ 
            list[i].addEventListener("mouseenter", setSelectedItemOnHover)
        }
    }
    
    init(); 
} 



export default NavigationManager; 




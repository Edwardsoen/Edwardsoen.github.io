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
        throw "Value Not in List"; 
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


function setColor(color) {
    document.getElementById('debugger').style.backgroundColor = color
}

function PageNavigator(parentElement, totalPage){ 
    this.parent = parentElement
    this.totalPage = totalPage
  
    var parentHeight = this.parent.scrollHeight; 
    var heightPerPage = parentHeight/this.totalPage; 
    var currentPage = 1; 
    var currentY = 0
  
    var reCalculateHeight = function() { 
        heightPerPage = parentElement.scrollHeight/totalPage; 
    }

    
    var FunctionOnScroll = function(event){
        reCalculateHeight() 
      if(currentY > event.currentTarget.scrollTop) { 
        if(((event.currentTarget.scrollTop / heightPerPage)% 1) < 0.1) { 
            let pageClosedEvent = new CustomEvent("PageClosed", {detail:currentPage})   
            event.currentTarget.dispatchEvent(pageClosedEvent);
            currentPage = Math.round(event.currentTarget.scrollTop / heightPerPage) + 1
            let pageOpenEvent = new CustomEvent("PageOpened", {detail:currentPage})   
            event.currentTarget.dispatchEvent(pageOpenEvent);        
        }
      }else { 
            if(currentPage != (Math.round(event.currentTarget.scrollTop / heightPerPage) + 1)) {
            let pageClosedEvent = new CustomEvent("PageClosed", {detail:currentPage})   
            event.currentTarget.dispatchEvent(pageClosedEvent); 
            currentPage = Math.round(event.currentTarget.scrollTop / heightPerPage) + 1
            let pageOpenEvent = new CustomEvent("PageOpened", {detail:currentPage})   
            event.currentTarget.dispatchEvent(pageOpenEvent); 
        }
      }
      currentY = event.currentTarget.scrollTop; 
    }
    this.parent.addEventListener("scroll", FunctionOnScroll)
}
    




export {NavigationManager, PageNavigator}; 




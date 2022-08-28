import { DiscreteInterpolant } from "three";

function OnSelectHighlighter(){ 
    var defaultColor; 
    var targetColor = "white"; 
    this.HighlightOnSelect = function(event){  
        defaultColor =event.currentTarget.style.color;   
        event.currentTarget.style.color = targetColor; 
    }
    this.DeHighlightOnDeselct = function(event){ 
        event.currentTarget.style.color = defaultColor;
    }
}

function ProjectListManager() { 
    var projectdata = {} // {project title (str): project object (object)}, 
    //project object MUST contain 1. title, 2. description 3. link + link Name 4. Tags 
    //Project title must be the same with button text 
    //eg. {"Project title":"title", "desc":desc, "link1": {"likTitle":linktitle, link:"link"} , "link2":link2, "tags":[tags]}
    // TODO: Make project button dynamic...


    function addLink(title, link) { 
        let descriptionPanel = document.getElementsByClassName("rightbox")[0];
        let linkBox = descriptionPanel.getElementsByClassName('contentlink')[0]
        let h2Element = document.createElement("h2");
        let aElement = document.createElement("a");
        aElement.href = link
        aElement.innerHTML = title;  
        h2Element.appendChild(aElement); 
        linkBox.appendChild(h2Element)
    }

    function clearLink(){ 
        let descriptionPanel = document.getElementsByClassName("rightbox")[0];
        let linkBox = descriptionPanel.getElementsByClassName('contentlink')[0]
        while (linkBox.childElementCount >0) { 
            linkBox.removeChild(linkBox.firstChild)
        }
    }

    function ProjectItemObject(title, description, links) { 
        this.title = title; 
        this.description = description; 
        this.links = links
    }
    
    
    function LinkObject(title, link){ 
        this.link = link; 
        this.title = title; 
    }



    function AddProjectItem(projectName, projectData)
    { 
        projectdata[projectName] = projectData
    }

    

    this.OnClickChangeDescriptionPanel = function(event){ 
        clearLink()
        var descriptionPanel = document.getElementsByClassName("rightbox")[0];
        var projecttitle = event.currentTarget.getElementsByTagName("h2")[0].innerHTML; 
        var data = projectdata[projecttitle]; 
        var links = data.links
        descriptionPanel.getElementsByTagName("h3")[0].innerHTML = data.description
        for(let i =0; i < links.length; i ++ ) { 
            addLink(links[i].title, links[i].link)
        }
    }
    
    
    AddProjectItem("Planes",new ProjectItemObject(
        "Planes", 
        "Collaborated with 3 other developers to create plane shooter game in Unity C#. Implemented AI behaviour, Analytics with GameAnalytics and create Android port", 
        [new LinkObject("Website", "https://itervision.com/planes")]
    ))

    AddProjectItem("Respark",new ProjectItemObject(
        "Respark", 
        "Worked with 6 other developers to create open world 3rd person MMO with Unity and Mirror Networking library", 
        [new LinkObject("Website", "https://playrespark.com/")]
    ))
}








function OnBorderSelectAction() { 

    function getElementToBeChanged(targetElem) { 
        if(targetElem.getElementsByClassName("triangle-right") == undefined 
        || targetElem.getElementsByClassName("triangle-left") == undefined) return; 
        var Elementlist = []
        Elementlist.push(targetElem.getElementsByClassName("triangle-right")[0]); 
        Elementlist.push(targetElem.getElementsByClassName("triangle-left")[0]); 
        return Elementlist; 
    }

    this.onSelectSetBorderVisible = function (event){ 
        var ElementList = getElementToBeChanged(event.detail)
        for(let i = 0; i <ElementList.length; i ++) { 
            ElementList[i].style.visibility = "visible"; 
        }
    }
    
    this.onDeselectSetBorderIndvisible = function(event){ 
        var ElementList = getElementToBeChanged(event.detail)
        for(let i = 0; i <ElementList.length; i ++) { 
            ElementList[i].style.visibility = "hidden"; 
        }
    }
}

function onSelectIncreaseSize(event){
    event.currentTarget.style.transform = "scale(1.1) translateZ(10px)"
}

function onDeSelectDecreaseSize(event){
    event.currentTarget.style.transform = "initial"
}

function setCloseButtonAction(){ 
    function closeModal(){ 
        document.getElementById("myModal").style.display = "none"
    }
    document.getElementsByClassName("close")[0].addEventListener("click", closeModal)
}

function onImageSelected(event) { 
    var modal = document.getElementById("myModal"); 
    var imgpath = event.currentTarget.getElementsByTagName("img")[0].src
    modal.style.display = "initial"; 
    modal.getElementsByTagName("img")[0].src = imgpath; 
    var fileName = String(imgpath).split("/")[String(imgpath).split("/").length -1].split(".")[0] //image file name as caption
    modal.getElementsByTagName("div")[0].innerHTML = fileName
}

function createPlayAudioFunction(path) { 
    return () => {
        new Audio(path).play()
    }
}

function MainMenuClickActionManager(){ 
    var parent = document.getElementsByClassName("parent")[0]
    var data = { 
        "Hobby": 3,
        "Project":2,
        "Contact":4
    }

    this.OnClickNavigate = function(event){ 
        var scrollTarget = data[event.currentTarget.children[0].textContent];
        OnClickScrollParentTo((scrollTarget-1)*parent.clientHeight);  
    }

    function OnClickScrollParentTo(y) { 
        parent.scroll({
            top: y,
            left: 0,
            behavior: 'smooth'
          });
    }
}

var FirstPage = function() { 
    this.pageIndex = 1; 
    this.OnOpened = function() { 
        document.getElementsByTagName("h1")[0].style.animation = "Rotate 2s forwards"
        document.getElementById("projectbutton").style.animation = "FadeIn 1.5s ease-in-out forwards"
        document.getElementById("contactbutton").style.animation = "FadeIn 1.5s ease-in-out forwards"
        document.getElementById("hobbybutton").style.animation =    "FadeIn 1.5s ease-in-out forwards"
    }
    this.OnClosed = function() { 
        document.getElementsByTagName("h1")[0].style.animation = ""
        document.getElementsByTagName("h1")[0].style.transform = "rotateX(90deg)"
        document.getElementById("projectbutton").style.animation = ""
        document.getElementById("contactbutton").style.animation = ""
        document.getElementById("hobbybutton").style.animation =    ""
    }
} 

var SecondPage = function() { 
    this.pageIndex = 2; 
    this.OnOpened = function() { 
        // document.getElementsByClassName("titlebox")[0].style.animation = "Rotate 2s forwards"
        let projecttitle = document.getElementsByClassName("projecttitlebox")
        let interval = 0.75; 
        for(let i =0; i < projecttitle.length; i ++ ){    
            projecttitle[i].style.animation = `SlideColor ease-in-out 0.75s forwards ${interval * (i)}s`    
        }
        document.getElementsByClassName("rightbox")[0].style.animation = `Enlarge ease-in-out 1.2s forwards`    
    }
    this.OnClosed = function() { 
        document.getElementsByClassName("titlebox")[0].style.animation = ""
        let projecttitle = document.getElementsByClassName("projecttitlebox")
        for(let i =0; i < projecttitle.length; i ++ ){    
            projecttitle[i].style.animation = ``    
        }
        document.getElementsByClassName("rightbox")[0].style.animation = ``
    }
} 

var ThirdPage = function() { 
    this.pageIndex = 3; 
    this.OnOpened = function() { 
        // document.getElementsByClassName("titlebox")[1].style.animation = "Rotate 2s forwards"
        var imageItems = document.getElementsByClassName("imageitem")
        let interval = 0.1
        for(let i =0; i < imageItems.length; i ++ ){    
            imageItems[i].style.animation = `FadeIn 1.5s forwards ${interval*(i+1)}s`    
        }
    }
    this.OnClosed = function() { 
        document.getElementsByClassName("titlebox")[1].style.animation = ""
        var imageItems = document.getElementsByClassName("imageitem")
        for(let i =0; i < imageItems.length; i ++ ){    
            imageItems[i].style.animation = ``    
        }
    }
} 

var FourthPage = function() { 
    this.pageIndex = 4; 
    this.OnOpened = function() { 
        document.getElementsByTagName("h1")[3].style.animation = "Rotate 1s forwards"
        document.getElementsByTagName("h2")[5].style.animation = "FadeIn 1s forwards 0.5s"
        document.getElementsByTagName("h3")[1].style.animation = "FadeIn 1s forwards 0.5s"
    }
    this.OnClosed = function() { 
        document.getElementsByTagName("h1")[3].style.animation = ""
        document.getElementsByTagName("h2")[5].style.animation = ""
        document.getElementsByTagName("h3")[1].style.animation = ""
    }
} 

function PageChangeActionManager () {     
    var OpenedAction  = { }
    var ClosedAction = { }
    function AddPageObject(PageObject){ 
        if(PageObject == null ||PageObject.pageIndex == null ) return; 
        
        if(PageObject.OnOpened == null) { PageObject.OnOpened = () => { }}
        if(PageObject.OnClosed == null) { PageObject.OnClosed = () => { }}
        OpenedAction[PageObject.pageIndex] = PageObject.OnOpened; 
        ClosedAction[PageObject.pageIndex] = PageObject.OnClosed; 
    }

    this.onPageClosed = function(event){
        if(typeof(ClosedAction[event.detail]) != 'function') return; 
        ClosedAction[event.detail]()
    }  

    this.onPageOpened = function(event) { 
        if(typeof(OpenedAction[event.detail]) != 'function') return; 
        OpenedAction[event.detail](); 
    }

    AddPageObject(new FirstPage())
    AddPageObject(new SecondPage())
    AddPageObject(new ThirdPage())
    AddPageObject(new FourthPage())
    new FirstPage().OnOpened()
}

export {createPlayAudioFunction,
    PageChangeActionManager,
    MainMenuClickActionManager, 
    OnSelectHighlighter, 
    OnBorderSelectAction,
    onSelectIncreaseSize,
    onDeSelectDecreaseSize, 
    ProjectListManager, 
    setCloseButtonAction,
    onImageSelected}; 
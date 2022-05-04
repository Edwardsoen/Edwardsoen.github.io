
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
    var projectdata = {}
    var styleString = `style = "height:100%; width:100%; border-radius:15px"`

    function AddProjectItem(projectName, Description = "", link = "", platform = "",  htmlString = "" )
    { 
        var projectObject = { 
            description:Description, 
            link:link, 
            platform:platform,
            htmlString: htmlString
        }
        if(projectdata[projectName] != undefined) return; 
        projectdata[projectName] = projectObject;  
    }

    function insertToImageBox(htmlString = "") { 
        var imagebox = document.getElementsByClassName("imagebox")[0]
        if(imagebox.children[0] != undefined) { 
            imagebox.children[0].remove()
        }
        document.getElementsByClassName("imagebox")[0].insertAdjacentHTML("afterbegin", htmlString)
    }

    this.OnClickChangeDescriptionPanel = function(event){ 
        var descriptionPanel = document.getElementsByClassName("rightbox")[0];
        var projecttitle = event.currentTarget.getElementsByTagName("h2")[0].innerHTML; 
        var data = projectdata[projecttitle]; 
        descriptionPanel.getElementsByTagName("h3")[0].innerHTML = data.description;
        descriptionPanel.getElementsByTagName("a")[0].innerHTML = data.platform; 
        descriptionPanel.getElementsByTagName("a")[0].href = data.link; 
        insertToImageBox(data.htmlString)
    }
    

    AddProjectItem("Planes",
     "Collaborated with 3 other people to create web-based shooter game. In this project i handled the programming for AI behaviour and Analytics with GameAnalytics", 
     "https://itervision.com/planes",
     "Website",  
     `<video autoplay="" loop="" src="assets/Project-plane.mp4"${styleString} ></video>`)

    
    AddProjectItem("Pastebin Clone",
     "Created Pastebin Clone with Python Flask with syntax highlighting, account system, downloads and  access frequency restriction", 
     "https://scenic-great-sand-dunes-90208.herokuapp.com/",
     "Website",  
     `<img src = "assets/pastebin.png" ${styleString}>`)
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
        document.getElementsByClassName("titlebox")[0].style.animation = "Rotate 2s forwards"
        let projecttitle = document.getElementsByClassName("projecttitlebox")
        let interval = 0.75; 
        for(let i =0; i < projecttitle.length; i ++ ){    
            projecttitle[i].style.animation = `SlideColor ease-in-out 0.75s forwards ${interval * (i)}s`    
        }
        document.getElementsByClassName("rightbox")[0].style.animation = `Rotate 2s forwards`    
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
        document.getElementsByClassName("titlebox")[1].style.animation = "Rotate 2s forwards"
        var imageItems = document.getElementsByClassName("imageitem")
        let interval = 0.25
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
        document.getElementsByTagName("h3")[5].style.animation = "FadeIn 1s forwards 0.5s"
    }
    this.OnClosed = function() { 
        document.getElementsByTagName("h1")[3].style.animation = ""
        document.getElementsByTagName("h2")[5].style.animation = ""
        document.getElementsByTagName("h3")[5].style.animation = ""
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

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

function ProjectListManager() { 
    var projectdata = {}
    var styleString = `style = "height:100%; width:100%; border-radius:15px"`

    function AddProjectData(projectName, Description, link, platform,  path )
    { 
        var projectObject = { 
            "description":Description, 
            "link":link, 
            "platform":platform,
            "path": path
        }
        projectdata[projectName] = projectObject;  
    }

    function insertToImageBox(htmlString) { 
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
        insertToImageBox(data.path)
    }


    

    AddProjectData("Planes",
     "Collaborated with 3 other people to create web-based shooter game. In this project i handled the programming for AI behaviour and Analytics with GameAnalytics", 
     "https://itervision.com/planes",
     "Website",  
     `<video autoplay="" loop="" src="assets/Project-plane.mp4"${styleString} ></video>`)

    
     AddProjectData("Pastebin Clone",
     "Created Pastebin Clone with Python Flask with syntax highlighting, account system, downloads and  access frequency restriction", 
     "https://scenic-great-sand-dunes-90208.herokuapp.com/",
     "Website",  
     `<img src = "assets/pastebin.png" ${styleString}>`)

     
}

function onSelectSetBorderVisible(event){ 
    event.detail.getElementsByClassName("triangle-right")[0].style.visibility = "visible"; 
    event.detail.getElementsByClassName("triangle-left")[0].style.visibility = "visible"; 
}

function onDeselectSetBorderIndvisible(event){ 
    event.detail.getElementsByClassName("triangle-right")[0].style.visibility = "hidden"; 
    event.detail.getElementsByClassName("triangle-left")[0].style.visibility = "hidden"; 
}

function onSelectIncreaseSize(event){
    event.currentTarget.style.transform = "scale(1.1) translateZ(10px)"
}

function onDeSelectDecreaseSize(event){
    event.currentTarget.style.transform = "initial"
}

function closeModal(){ 
    document.getElementById("myModal").style.display = "none"
}

function setCloseButtonAction(){ 
    document.getElementsByClassName("close")[0].addEventListener("click", closeModal)
}

function onImageSelected(event) { 
    var modal = document.getElementById("myModal"); 
    var imgpath = event.currentTarget.getElementsByTagName("img")[0].src
    modal.style.display = "initial"; 
    modal.getElementsByTagName("img")[0].src = imgpath; 
    var fileName = String(imgpath).split("/")[String(imgpath).split("/").length -1].split(".")[0]
    modal.getElementsByTagName("div")[0].innerHTML = fileName
}

function onHoverAudio() {
    var hoverAudio = new Audio("./assets/sound kit/Button 2.m4a")
    hoverAudio.play()
}
  
function onClickAudio(){ 
    var ClickSound = new Audio("./assets/sound kit/Tab 1.m4a")
    ClickSound.play()
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


function PageChangeActionManager () {     
    var OpenedAction  = { 
        1: addAnimationFirstPage, 
        2: addAnimationSecondPage, 
        3: addAnimationThirdPage, 
        4: addAnimationFourthPage
    }

    var ClosedAction = { 
        1: removeAnimationFirstPage, 
        2: removeAnimationSecondPage, 
        3: removeAnimationThirdPage, 
        4: removeAnimationFourthPage
    }


    function addAnimationFirstPage() { 
        document.getElementsByTagName("h1")[0].style.animation = "Rotate 2s"
        document.getElementById("projectbutton").style.animation = "FromRight 1.5s ease-in-out"
        document.getElementById("contactbutton").style.animation = "FromRight 1.5s ease-in-out"
        document.getElementById("hobbybutton").style.animation =    "FromLeft 1.5s ease-in-out"
    }

    function removeAnimationFirstPage(){ 
        document.getElementsByTagName("h1")[0].style.animation = ""
        document.getElementById("projectbutton").style.animation = ""
        document.getElementById("contactbutton").style.animation = ""
        document.getElementById("hobbybutton").style.animation =    ""
    }

    function addAnimationSecondPage() { 
        document.getElementsByClassName("titlebox")[0].style.animation = "Rotate 2s"
    }

    function removeAnimationSecondPage() { 
        document.getElementsByClassName("titlebox")[0].style.animation = ""
    } 

    function addAnimationThirdPage() { 
        document.getElementsByClassName("titlebox")[1].style.animation = "Rotate 2s"
    }

    function removeAnimationThirdPage() { 
        document.getElementsByClassName("titlebox")[1].style.animation = ""
    } 

    function addAnimationFourthPage() { 
        document.getElementsByTagName("h1")[3].style.animation = "Rotate 2s"
    }

    function removeAnimationFourthPage() { 
        document.getElementsByTagName("h1")[3].style.animation = ""
    } 



    this.onPageClosed = function(event){
        ClosedAction[event.detail]()
    }  

    this.onPageOpened = function(event) { 
        OpenedAction[event.detail](); 
    }
}

























































export {PageChangeActionManager, MainMenuClickActionManager, OnSelectHighlighter,onClickAudio, onHoverAudio, onSelectSetBorderVisible, onDeselectSetBorderIndvisible, onSelectIncreaseSize,onDeSelectDecreaseSize, ProjectListManager, setCloseButtonAction, onImageSelected}; 
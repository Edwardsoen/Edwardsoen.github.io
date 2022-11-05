function OnSelectHighlighter() {
  var defaultColor;
  var targetColor = "white";
  this.HighlightOnSelect = function (event) {
    defaultColor = event.currentTarget.style.color;
    event.currentTarget.style.color = targetColor;
  };
  this.DeHighlightOnDeselct = function (event) {
    event.currentTarget.style.color = defaultColor;
  };
}

function PlaneProject() {
  this.setPage = function (parentDiv) {
    let mainDescription =
      "Single player plane shooting game made in Unity with C#";
    let description1 =
      "Collaborated with 2 other developers to design and implement feature based on game design specifications";
    let description2 =
      "Designed and implemented AI's targetting and path-finding algorithms";
    let description3 = "Added Gameanalytics to track game's metrics";
    let description4 = "Worked on the android version of the game";

    let mainDescriptionElement = document.createElement("h2");
    let description1Element = document.createElement("h3");
    let description2Element = document.createElement("h3");
    let description3Element = document.createElement("h3");
    let description4Element = document.createElement("h3");

    mainDescriptionElement.innerHTML = mainDescription;
    description1Element.innerHTML = description1;
    description2Element.innerHTML = description2;
    description3Element.innerHTML = description3;
    description4Element.innerHTML = description4;

    parentDiv.appendChild(mainDescriptionElement);
    parentDiv.appendChild(description1Element);
    parentDiv.appendChild(description2Element);
    parentDiv.appendChild(description3Element);
    parentDiv.appendChild(description4Element);
  };

  this.setRedirects = function (hrefElements) {
    let websiteParent = document.createElement("h2");
    let websiteLink = document.createElement("a");
    websiteLink.href = "https://itervision.com/planes";
    websiteLink.innerHTML = "Rogue Plane";
    websiteParent.appendChild(websiteLink);
    hrefElements.appendChild(websiteParent);
  };

  function getImage() {
    return null;
  }

  this.getTitle = function () {
    return "Plane";
  };
}

function ResparkProject() {
  this.setPage = function (parentDiv) {
    let mainDescription =
      "Multiplayer 3rd person open-world game made in Unity with Mirror networking library";
    let description1 =
      "Worked with 2 other developer and 3 game designers to implement gameplay feature according to the game design documents";
    let description2 =
      "build responsive in game UI with Unity UI builder & Do code reviews";

    let mainDescriptionElement = document.createElement("h2");
    let description1Element = document.createElement("h3");
    let description2Element = document.createElement("h3");

    mainDescriptionElement.innerHTML = mainDescription;
    description1Element.innerHTML = description1;
    description2Element.innerHTML = description2;

    parentDiv.appendChild(mainDescriptionElement);
    parentDiv.appendChild(description1Element);
    parentDiv.appendChild(description2Element);
  };

  this.setRedirects = function (hrefElements) {
    let websiteParent = document.createElement("h2");
    let websiteLink = document.createElement("a");
    websiteLink.href = "https://playrespark.com/";
    websiteLink.innerHTML = "Respark";
    websiteParent.appendChild(websiteLink);
    hrefElements.appendChild(websiteParent);
  };

  function getImage() {
    return null;
  }

  this.getTitle = function () {
    return "Respark";
  };
}

function ProjectListManager() {
  let isInitialized = false;
  let descriptionContainer = document.getElementsByClassName(
    "descriptioncontainer"
  )[0];
  let contentLink = document.getElementById("contentlinkbox");
  let buttonContainer = document.getElementsByClassName("leftbox")[0];
  let data = {};

  this.initialize = function () {
    let projects = [];
    projects.push(new PlaneProject());
    projects.push(new ResparkProject());

    for (let i = 0; i <= projects.length - 1; i++) {
      let projectButton = generateButton(projects[i].getTitle());
      buttonContainer.appendChild(projectButton);
      data[projects[i].getTitle()] = projects[i];
    }
  };

  function generateButton(name) {
    let titlebox = document.createElement("div");
    let projectTitle = document.createElement("h2");
    projectTitle.innerHTML = name;
    titlebox.appendChild(projectTitle);
    titlebox.classList.add("projecttitlebox");
    return titlebox;
  }

  function clearComponent() {
    while (contentLink.childElementCount > 0) {
      contentLink.removeChild(contentLink.firstChild);
    }
    while (descriptionContainer.childElementCount > 0) {
      descriptionContainer.removeChild(descriptionContainer.firstChild);
    }
  }

  this.OnClickChangeDescriptionPanel = function (event) {
    clearComponent();
    if (isInitialized) {
      document.getElementsByClassName("rightbox")[0].style.animation = ``;
      setTimeout(() => {
        document.getElementsByClassName(
          "rightbox"
        )[0].style.animation = `SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1.2s forwards`;
      }, 200);
    } else {
      isInitialized = true;
    }
    let projectSelected = data[event.target.textContent];
    projectSelected.setPage(descriptionContainer);
    projectSelected.setRedirects(contentLink);
  };

  this.initialize();
}

function OnBorderSelectAction() {
  function getElementToBeChanged(targetElem) {
    if (
      targetElem.getElementsByClassName("triangle-right") == undefined ||
      targetElem.getElementsByClassName("triangle-left") == undefined
    )
      return;
    var Elementlist = [];
    Elementlist.push(targetElem.getElementsByClassName("triangle-right")[0]);
    Elementlist.push(targetElem.getElementsByClassName("triangle-left")[0]);
    return Elementlist;
  }

  this.onSelectSetBorderVisible = function (event) {
    var ElementList = getElementToBeChanged(event.detail);
    for (let i = 0; i < ElementList.length; i++) {
      ElementList[i].style.visibility = "visible";
    }
  };

  this.onDeselectSetBorderIndvisible = function (event) {
    var ElementList = getElementToBeChanged(event.detail);
    for (let i = 0; i < ElementList.length; i++) {
      ElementList[i].style.visibility = "hidden";
    }
  };
}

function onDeSelectDecreaseSize(event) {
  event.currentTarget.style.transform = "initial";
}

function setCloseButtonAction() {
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", closeModal);
}

function onImageSelected(event) {
  var modal = document.getElementById("myModal");
  var imgpath = event.currentTarget.getElementsByTagName("img")[0].src;
  modal.style.display = "initial";
  modal.getElementsByTagName("img")[0].src = imgpath;
  var fileName = String(imgpath)
    .split("/")
    [String(imgpath).split("/").length - 1].split(".")[0]; //image file name as caption
  modal.getElementsByTagName("div")[0].innerHTML = fileName;
}

function createPlayAudioFunction(path) {
  return () => {
    new Audio(path).play();
  };
}

function MainMenuClickActionManager() {
  var parent = document.getElementsByClassName("parent")[0];
  var data = {
    Hobby: 3,
    Project: 2,
    Contact: 4,
  };

  this.OnClickNavigate = function (event) {
    var scrollTarget = data[event.currentTarget.children[0].textContent];
    OnClickScrollParentTo((scrollTarget - 1) * parent.clientHeight);
  };

  function OnClickScrollParentTo(y) {
    parent.scroll({
      top: y,
      left: 0,
      behavior: "smooth",
    });
  }
}

var FirstPage = function () {
  this.pageIndex = 1;
  let Page1CharacterContainer = document.getElementById("page1titlecontainer");
  let characters = Page1CharacterContainer.getElementsByClassName("character");

  this.OnOpened = function () {
    let interval = 0.1;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        interval * i
      }s`;
    }
    document.getElementById(
      "page1subtitle"
    ).style.animation = `FadeIn 1.5s ease-in-out forwards ${interval * 1}s`;
    document.getElementById(
      "projectbutton"
    ).style.animation = `FadeIn 1.5s ease-in-out forwards ${interval * 1}s`;
    document.getElementById(
      "contactbutton"
    ).style.animation = `FadeIn 1.5s ease-in-out forwards ${interval * 2}s`;
    document.getElementById(
      "hobbybutton"
    ).style.animation = `FadeIn 1.5s ease-in-out forwards ${interval * 3}s`;
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    document.getElementById("page1subtitle").style.animation = ``;
    document.getElementById("projectbutton").style.animation = "";
    document.getElementById("contactbutton").style.animation = "";
    document.getElementById("hobbybutton").style.animation = "";
  };
};

var SecondPage = function () {
  this.pageIndex = 2;
  let Page2CharacterContainer = document.getElementById("page2titlecontainer");
  let characters = Page2CharacterContainer.getElementsByClassName("character");
  let projectTitle = document.getElementsByClassName("leftbox");

  this.OnOpened = function () {
    let interval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        interval * i
      }s`;
    }
    let titleInterval = 0.25;
    for (let i = 0; i <= projectTitle.length - 1; i++) {
      projectTitle[i].style.animation = `SlideUp ease-in-out 1s forwards ${
        1 + titleInterval * i
      }s`;
    }

    document.getElementsByClassName(
      "rightbox"
    )[0].style.animation = `SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1.2s forwards`;
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    for (let i = 0; i <= projectTitle.length - 1; i++) {
      projectTitle[i].style.animation = ``;
    }

    document.getElementsByClassName("rightbox")[0].style.animation = ``;
  };
};

var ThirdPage = function () {
  this.pageIndex = 3;
  let Page3CharacterContainer = document.getElementById("page3titlecontainer");
  let characters = Page3CharacterContainer.getElementsByClassName("character");

  this.OnOpened = function () {
    let CharInterval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        CharInterval * i
      }s`;
    }

    var imageItems = document.getElementsByClassName("imageitem");
    let interval = 0.15;
    for (let i = 0; i < imageItems.length; i++) {
      imageItems[i].style.animation = `FadeIn 1.5s forwards ${
        interval * (i + 1)
      }s`;
    }
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    document.getElementsByClassName("titlebox")[1].style.animation = "";
    var imageItems = document.getElementsByClassName("imageitem");
    for (let i = 0; i < imageItems.length; i++) {
      imageItems[i].style.animation = ``;
    }
  };
};

var FourthPage = function () {
  this.pageIndex = 4;
  let Page4CharacterContainer = document.getElementById("page4titlecontainer");
  let characters = Page4CharacterContainer.getElementsByClassName("character");

  this.OnOpened = function () {
    let CharInterval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        CharInterval * i
      }s`;
    }
    document.getElementsByTagName("h2")[6].style.animation =
      "FadeIn 1s forwards 0.5s";
    document.getElementsByTagName("h3")[1].style.animation =
      "FadeIn 1s forwards 1s";
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    document.getElementsByTagName("h2")[6].style.animation = "";
    document.getElementsByTagName("h3")[1].style.animation = "";
  };
};

function imageLoader() {
  let testFolder = "./assets/HobbyImages/";
  fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
  let imageContainer = document.getElementsByClassName("imagecontainer")[0];
  for (let i = 0; i <= files.length; i++) {
    let imageItem = document.createElement("div");
    imageItem.className = "imageitem";
    let imageElement = document.createElement("img");
    imageItem.appendChild(imageElement);
    console.log(files[i]);
  }
}

function PageChangeActionManager() {
  var OpenedAction = {};
  var ClosedAction = {};
  function AddPageObject(PageObject) {
    if (PageObject == null || PageObject.pageIndex == null) return;
    if (PageObject.OnOpened == null) {
      PageObject.OnOpened = () => {};
    }
    if (PageObject.OnClosed == null) {
      PageObject.OnClosed = () => {};
    }
    OpenedAction[PageObject.pageIndex] = PageObject.OnOpened;
    ClosedAction[PageObject.pageIndex] = PageObject.OnClosed;
  }

  this.onPageClosed = function (event) {
    if (typeof ClosedAction[event.detail] != "function") return;
    ClosedAction[event.detail]();
  };

  this.onPageOpened = function (event) {
    if (typeof OpenedAction[event.detail] != "function") return;
    OpenedAction[event.detail]();
  };

  AddPageObject(new FirstPage());
  AddPageObject(new SecondPage());
  AddPageObject(new ThirdPage());
  AddPageObject(new FourthPage());
  new FirstPage().OnOpened();
}

export {
  createPlayAudioFunction,
  PageChangeActionManager,
  MainMenuClickActionManager,
  OnSelectHighlighter,
  OnBorderSelectAction,
  onDeSelectDecreaseSize,
  ProjectListManager,
  setCloseButtonAction,
  onImageSelected,
  imageLoader,
};

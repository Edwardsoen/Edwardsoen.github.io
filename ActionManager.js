import { HorizontalPageNavigator } from "./NavigationManager";

function getYoutubeLink(videoId) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&showinfo=0&controls=0`;
}

function NewpipeSyncProject() {
  this.setPage = function (parentDiv) {
    let mainHeading =
      "An extension of an open source Youtube client with added functionality";
    let description1 = "Used AppAuth library to do oauth authentication ";
    let description2 =
      "Used RxJava to do asynchronous call to Youtube API to fetch data";

    let mainDescriptionElement = document.createElement("h2");
    let description1Element = document.createElement("h3");
    let description2Element = document.createElement("h3");

    mainDescriptionElement.innerHTML = mainHeading;
    description1Element.innerHTML = description1;
    description2Element.innerHTML = description2;

    parentDiv.appendChild(mainDescriptionElement);
    parentDiv.appendChild(description1Element);
    parentDiv.appendChild(description2Element);
  };

  this.setRedirects = function (hrefElements) {
    let websiteParent = document.createElement("h2");
    let websiteLink = document.createElement("a");
    websiteLink.href = "https://github.com/Edwardsoen/NewPipe";
    websiteLink.innerHTML = "Github";
    websiteParent.appendChild(websiteLink);
    hrefElements.appendChild(websiteParent);
  };

  this.setMedia = function (mediaBox) {
    let imgElement = document.createElement("img");
    imgElement.style = `width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `;
    imgElement.src = "ProjectImages/newpipe-sync.jpg";
    mediaBox.appendChild(imgElement);
  };

  this.getTitle = function () {
    return "Newpipe Sync";
  };

  this.setVideoPreviewComponent = function (parent) {
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
    let description3 =
      "Added Gameanalytics to track game's metrics & Worked on the android version of the game";

    let mainDescriptionElement = document.createElement("h2");
    let description1Element = document.createElement("h3");
    let description2Element = document.createElement("h3");
    let description3Element = document.createElement("h3");

    mainDescriptionElement.innerHTML = mainDescription;
    description1Element.innerHTML = description1;
    description2Element.innerHTML = description2;
    description3Element.innerHTML = description3;

    parentDiv.appendChild(mainDescriptionElement);
    parentDiv.appendChild(description1Element);
    parentDiv.appendChild(description2Element);
    parentDiv.appendChild(description3Element);
  };

  this.setRedirects = function (hrefElements) {
    let websiteParent = document.createElement("h2");
    let websiteLink = document.createElement("a");
    websiteLink.href = "https://itervision.com/planes";
    websiteLink.innerHTML = "Play here";
    websiteParent.appendChild(websiteLink);
    hrefElements.appendChild(websiteParent);
  };

  this.setMedia = function (mediaBox) {
    let imgElement = document.createElement("img");
    imgElement.style = `width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `;
    imgElement.src = "ProjectImages/planes.png";
    mediaBox.appendChild(imgElement);
  };

  this.getTitle = function () {
    return "Rogue Plane";
  };
  this.setVideoPreviewComponent = function (parent) {
    let videoId = "MbId3aPHaE0" //REPLACE THIS
    let src = getYoutubeLink(videoId);
    let iframe = document.createElement('iframe')
    iframe.setAttribute("src", src)
    iframe.setAttribute("frameborder", 0)
    iframe.setAttribute("allow", "autoplay")
    iframe.setAttribute("mozallowfullscreen", "mozallowfullscreen")
    iframe.setAttribute("allowfullscreen", "allowfullscreen")
    iframe.setAttribute("autoplay", "autoplay")
    iframe.setAttribute("webkitallowfullscreen", "webkitallowfullscreen")
    iframe.style.width = "100vw"
    iframe.style.height = "100vh"
    parent.appendChild(iframe)
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
    websiteLink.innerHTML = "Learn more here";
    websiteParent.appendChild(websiteLink);
    hrefElements.appendChild(websiteParent);
  };

  this.setMedia = function (mediaBox) {
    let imgElement = document.createElement("img");
    imgElement.style = `width: auto;
    height: auto;
    max-height: 30vh;
    max-width: 80vw;
    `;
    imgElement.src = "ProjectImages/respark.png";
    mediaBox.appendChild(imgElement);
  };
  this.getTitle = function () {
    return "Respark";
  };

  this.setVideoPreviewComponent = function (parent) {
    let videoId = "MbId3aPHaE0" //REPLACE THIS
    let src = getYoutubeLink(videoId);
    let iframe = document.createElement('iframe')
    iframe.setAttribute("src", src)
    iframe.setAttribute("frameborder", 0)
    iframe.setAttribute("allow", "autoplay")
    iframe.setAttribute("mozallowfullscreen", "mozallowfullscreen")
    iframe.setAttribute("allowfullscreen", "allowfullscreen")
    iframe.setAttribute("autoplay", "autoplay")
    iframe.setAttribute("webkitallowfullscreen", "webkitallowfullscreen")
    iframe.style.width = "100vw"
    iframe.style.height = "100vh"
    parent.appendChild(iframe)
  };
}

function ProjectListManager() {
  let indicatorBox = document.getElementById("scroll-indicator-box");
  let indicatorClassName = "indicator";
  let indicatorActiveClassName = "indicator-active";
  let leftArrowClassName = "left";
  let rightArrowClassName = "right";
  let section = document.getElementsByClassName("project-section")[0];
  let videoBox = document.getElementById("video-box");
  let sectionParent = section.parentElement;
  let data = {};
  let projects = []

  this.initialize = function () {
    projects.push(new PlaneProject());
    projects.push(new ResparkProject());
    projects.push(new NewpipeSyncProject());

    let sections = document.getElementsByClassName("project-section");

    for (let i = 0; i <= projects.length - sections.length; i++) {
      let newSection = section.cloneNode(true);
      sectionParent.appendChild(newSection);
    }
    sections = document.getElementsByClassName("project-section");
    let leftArrow = generateArrowButton(leftArrowClassName);
    leftArrow.addEventListener("click", onArrowClickNavigate);

    for (let i = 0; i <= sections.length - 1; i++) {
      projects[i].setMedia(
        sections[i].getElementsByClassName("project-media-box")[0]
      );
      projects[i].setRedirects(
        sections[i].getElementsByClassName("links-box")[0]
      );
      projects[i].setPage(
        sections[i].getElementsByClassName(
          "second-page-description-container"
        )[0]
      );
      let div = addToIndicatorBar(indicatorClassName);
      div.addEventListener("click", OnClickNavigate);
      data[i + 1] = div;
    }

    let rightArrow = generateArrowButton(rightArrowClassName);
    rightArrow.addEventListener("click", onArrowClickNavigate);

    data[1].classList.add(indicatorActiveClassName);

    var parent = document.getElementsByClassName(
      "second-page-description-box"
    )[0];
    var horizontalPageNavigator = new HorizontalPageNavigator(
      sectionParent,
      projects.length
    );
    sectionParent.addEventListener("PageOpened", onPageOpened);
    sectionParent.addEventListener("PageClosed", onPageClosed);
    projects[0].setVideoPreviewComponent(videoBox)
  };

  function onPageClosed(event) {
    data[event.detail].classList.remove(indicatorActiveClassName);
  }

  function onPageOpened(event) {
    removeChildComponent(videoBox); 
    projects[event.detail-1].setVideoPreviewComponent(videoBox)

    data[event.detail].classList.add(indicatorActiveClassName);
  }

  function removeChildComponent(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
    }
  }

  function addToIndicatorBar(className) {
    let div = document.createElement("div");
    div.classList.add(className);
    indicatorBox.appendChild(div);
    return div;
  }

  function generateArrowButton(arrowClassName) {
    let parentDiv = document.createElement("div");
    let arrow = document.createElement("div");
    arrow.classList.add("arrow");
    arrow.classList.add(arrowClassName);
    parentDiv.appendChild(arrow);
    indicatorBox.appendChild(parentDiv);
    return arrow;
  }

  function OnClickNavigate(event) {
    Object.keys(data).forEach(function (key) {
      if (data[key] == event.currentTarget) {
        OnClickScrollParentTo((key - 1) * sectionParent.clientWidth);
      }
    });
  }

  function onArrowClickNavigate(event) {
    let isLeft = event.currentTarget.classList.contains("left");
    let activePage = getCurrentActivePage();
    switch (isLeft) {
      case true:
        OnClickScrollParentTo((activePage - 2) * sectionParent.clientWidth);
        break;
      case false:
        OnClickScrollParentTo(activePage * sectionParent.clientWidth);
        break;
    }
  }

  function getCurrentActivePage() {
    var returnKey;
    Object.keys(data).forEach(function (key) {
      if (data[key].classList.contains(indicatorActiveClassName)) {
        returnKey = key;
      }
    });
    return returnKey;
  }

  function OnClickScrollParentTo(x) {
    sectionParent.scroll({
      top: 0,
      left: x,
      behavior: "smooth",
    });
  }

  this.initialize();
}

function setCloseButtonAction() {
  function closeModal() {
    document.getElementById("hobby-modal").style.display = "none";
  }
  let closeButton = document.getElementsByClassName("close")[0];

  closeButton.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      closeModal();
    }
  });
}

function onImageSelected(event) {
  var modal = document.getElementById("hobby-modal");
  var imgpath = event.currentTarget.getElementsByTagName("img")[0].src;
  modal.style.display = "initial";
  modal.getElementsByTagName("img")[0].src = imgpath;
  var fileName = String(imgpath)
    .split("/")
    [String(imgpath).split("/").length - 1].split(".")[0]; //image file name as caption
  modal.getElementsByTagName("div")[0].innerHTML = fileName;
}



function NavbarManager(navbarButton) {
  let activeClassStyleName = "active";
  let data = {};
  function init() {
    for (let i = 0; i <= navbarButton.length - 1; i++) {
      data[i + 1] = navbarButton[i].getElementsByTagName("a")[0];
    }
  }
  this.onPageOpened = function (event) {
    data[event.detail].classList.add(activeClassStyleName);
  };
  this.onPageClosed = function (event) {
    data[event.detail].classList.remove(activeClassStyleName);
  };
  init();
  data[1].classList.add(activeClassStyleName);
}

function MainMenuClickActionManager() {
  var parent = document.getElementsByClassName("parent")[0];
  var data = {
    Home: 1,
    Hobby: 3,
    Projects: 2,
    Contact: 4,
  };

  this.OnClickNavigate = function (event) {
    var scrollTarget = data[event.currentTarget.textContent.trim()];
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
  let Page1CharacterContainer = document.getElementById(
    "first-page-heading-container"
  );
  let characters = Page1CharacterContainer.getElementsByClassName("character");
  let subHeading = document.getElementById("first-page-sub-heading");

  this.OnOpened = function () {
    let interval = 0.1;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        interval * i
      }s`;
    }
    subHeading.style.animation = `FadeIn 1.5s ease-in-out forwards ${
      interval * 1
    }s`;
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    subHeading.style.animation = ``;
  };
};

var SecondPage = function () {
  this.pageIndex = 2;
  let Page2CharacterContainer = document.getElementById(
    "second-page-heading-container"
  );
  let characters = Page2CharacterContainer.getElementsByClassName("character");
  let descriptionBox = document.getElementsByClassName(
    "second-page-description-box"
  )[0];

  this.OnOpened = function () {
    let interval = 0.05;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.2s forwards ${
        interval * i
      }s`;
    }
    descriptionBox.style.animation = `SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1s forwards ${
      interval * characters.length + 0.2
    }s`;
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    descriptionBox.style.animation = ``;
  };
};

var ThirdPage = function () {
  setCloseButtonAction();
  this.pageIndex = 3;
  let Page3CharacterContainer = document.getElementById(
    "third-page-heading-container"
  );
  let characters = Page3CharacterContainer.getElementsByClassName("character");
  let imageItems = document.getElementsByClassName("image-item");

  this.OnOpened = function () {
    let CharInterval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        CharInterval * i
      }s`;
    }

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

    for (let i = 0; i < imageItems.length; i++) {
      imageItems[i].style.animation = ``;
    }
  };
};

var FourthPage = function () {
  this.pageIndex = 4;
  let Page4CharacterContainer = document.getElementById(
    "fourth-page-heading-container"
  );
  let characters = Page4CharacterContainer.getElementsByClassName("character");
  let subHeading = document.getElementById("fourth-page-sub-heading");
  let subSubHeading = document.getElementById("fourth-page-sub-sub-heading");
  this.OnOpened = function () {
    let CharInterval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.55s forwards ${
        CharInterval * i
      }s`;
    }
    subHeading.style.animation = "FadeIn 1s forwards 1s";
    subSubHeading.style.animation = "FadeIn 1s forwards 1.5s";
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    subHeading.style.animation = "";
    subSubHeading.style.animation = "";
  };
};

function imageLoader() {
  let testFolder = "./assets/HobbyImages/";
  fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
  let imageContainer = document.getElementsByClassName("image-container")[0];
  for (let i = 0; i <= files.length; i++) {
    let imageItem = document.createElement("div");
    imageItem.className = "image-item";
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
  NavbarManager,
  PageChangeActionManager,
  MainMenuClickActionManager,
  ProjectListManager,
  setCloseButtonAction,
  onImageSelected,
  imageLoader,
};

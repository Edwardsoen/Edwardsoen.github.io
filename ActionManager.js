import { HorizontalPageNavigator } from "./NavigationManager";

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
}

function ProjectListManager() {
  let indicatorBox = document.getElementById("scroll-indicator-box");
  let indicatorClassName = "indicator";
  let indicatorActiveClassName = "indicator-active";
  let section = document.getElementsByClassName("project-section")[0];
  let sectionParent = section.parentElement;
  let data = {};

  this.initialize = function () {
    let projects = [];
    projects.push(new PlaneProject());
    projects.push(new ResparkProject());
    projects.push(new NewpipeSyncProject());

    let sections = document.getElementsByClassName("project-section");

    for (let i = 0; i <= projects.length - sections.length; i++) {
      let newSection = section.cloneNode(true);
      sectionParent.appendChild(newSection);
    }
    sections = document.getElementsByClassName("project-section");

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
      let div = generateIndicator();
      div.addEventListener("click", OnClickNavigate);
      data[i + 1] = div;
    }

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
  };

  function onPageClosed(event) {
    data[event.detail].classList.remove(indicatorActiveClassName);
  }

  function onPageOpened(event) {
    data[event.detail].classList.add(indicatorActiveClassName);
  }

  function generateIndicator() {
    let div = document.createElement("div");
    div.classList.add(indicatorClassName);
    indicatorBox.appendChild(div);
    return div;
  }

  function OnClickNavigate(event) {
    var scrollTarget = data[event.currentTarget];
    Object.keys(data).forEach(function (key) {
      if (data[key] == event.currentTarget) {
        OnClickScrollParentTo((key - 1) * sectionParent.clientWidth);
      }
    });
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

  this.OnOpened = function () {
    let interval = 0.1;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        interval * i
      }s`;
    }
    document.getElementById(
      "first-page-sub-heading"
    ).style.animation = `FadeIn 1.5s ease-in-out forwards ${interval * 1}s`;
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    document.getElementById("first-page-sub-heading").style.animation = ``;
  };
};

var SecondPage = function () {
  this.pageIndex = 2;
  let Page2CharacterContainer = document.getElementById(
    "second-page-heading-container"
  );
  let characters = Page2CharacterContainer.getElementsByClassName("character");
  let projectTitle = document.getElementsByClassName(
    "second-page-projects-box"
  );

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
      "second-page-description-box"
    )[0].style.animation = `SlideDown cubic-bezier(0.36, 0.04, 0, 1) 1.2s forwards`;
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    for (let i = 0; i <= projectTitle.length - 1; i++) {
      projectTitle[i].style.animation = ``;
    }

    document.getElementsByClassName(
      "second-page-description-box"
    )[0].style.animation = ``;
  };
};

var ThirdPage = function () {
  setCloseButtonAction();
  this.pageIndex = 3;
  let Page3CharacterContainer = document.getElementById(
    "third-page-heading-container"
  );
  let characters = Page3CharacterContainer.getElementsByClassName("character");

  this.OnOpened = function () {
    let CharInterval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        CharInterval * i
      }s`;
    }

    var imageItems = document.getElementsByClassName("image-item");
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
    document.getElementsByClassName("heading-box")[1].style.animation = "";
    var imageItems = document.getElementsByClassName("image-item");
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

  this.OnOpened = function () {
    let CharInterval = 0.15;
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = `Rotate ease-in-out 0.75s forwards ${
        CharInterval * i
      }s`;
    }
    document.getElementById("fourth-page-sub-heading").style.animation =
      "FadeIn 1s forwards 0.5s";
    document.getElementById("fourth-page-sub-sub-heading").style.animation =
      "FadeIn 1s forwards 1s";
  };
  this.OnClosed = function () {
    for (let i = 1; i <= characters.length; i++) {
      characters[i - 1].style.animation = ``;
    }
    document.getElementById("fourth-page-sub-heading").style.animation = "";
    document.getElementById("fourth-page-sub-sub-heading").style.animation = "";
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
  PageChangeActionManager,
  MainMenuClickActionManager,
  ProjectListManager,
  setCloseButtonAction,
  onImageSelected,
  imageLoader,
};

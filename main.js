import "./style.scss";
import "./animation.scss";
import { PageNavigator, NavigationManager } from "./NavigationManager.js";

import {
  OnBorderSelectAction,
  PageChangeActionManager,
  MainMenuClickActionManager,
  setCloseButtonAction,
  onImageSelected,
  ProjectListManager,
  onDeSelectDecreaseSize,
} from "./ActionManager.js";

function generateIndividualCharacters(GrandParent, string) {
  parent = document.createElement("h1");
  for (let i = 0; i <= string.length - 1; i++) {
    let char = document.createElement("span");
    let letter = document.createElement("h1");
    letter.textContent = string[i];
    char.innerHTML = string[i];
    char.classList.add("character");
    parent.appendChild(char);
  }
  GrandParent.appendChild(parent);
}

function main() {
  var ProjectTitleContainer = document.getElementById("second-page-heading-container");
  var HobbyTitleContainer = document.getElementById("third-page-heading-container");
  var ContactTitleContainer = document.getElementById("fourth-page-heading-container");

  generateIndividualCharacters(ProjectTitleContainer, "Projects");
  generateIndividualCharacters(HobbyTitleContainer, "Hobby");
  generateIndividualCharacters(ContactTitleContainer, "Contact");

  var MainMenuClickAction = new MainMenuClickActionManager();
  var MainMenuList = [];
  MainMenuList.push(document.getElementById("main-menu-project-item"))
  MainMenuList.push(document.getElementById("main-menu-hobby-item"))
  MainMenuList.push(document.getElementById("main-menu-contact-item"))

  var MainMenuNavigator = new NavigationManager(
    MainMenuList,
    MainMenuList[0]
  );
  // var Highlighter = new OnSelectHighlighter();

  var BorderAction = new OnBorderSelectAction();
  MainMenuNavigator.AddEventlistenerToList(
    "click",
    MainMenuClickAction.OnClickNavigate
  );

  var ProjectList = new ProjectListManager();
  var ProjectLists = document.getElementsByClassName("project-item");
  var ProjectListNavigator = new NavigationManager(
    ProjectLists,
    ProjectLists[0],
    false
  );

  ProjectListNavigator.AddEventlistenerToList(
    "click",
    ProjectList.OnClickChangeDescriptionPanel
  );
  ProjectListNavigator.AddEventlistenerToList(
    "Selected",
    ProjectList.OnClickChangeDescriptionPanel
  );

  setCloseButtonAction();

  var ImageList = document.getElementsByClassName("image-item");
  var ImageListNavigator = new NavigationManager(ImageList, ImageList[0]);
  ImageListNavigator.AddEventlistenerToList(
    "mouseleave",
    onDeSelectDecreaseSize
  );
  ImageListNavigator.AddEventlistenerToList("click", onImageSelected);

  var PageAction = new PageChangeActionManager();
  var parentPage = document.getElementsByClassName("parent")[0];
  var pagenavigator = new PageNavigator(parentPage, 4);
  parentPage.addEventListener("PageOpened", PageAction.onPageOpened);
  parentPage.addEventListener("PageClosed", PageAction.onPageClosed);
}

main();


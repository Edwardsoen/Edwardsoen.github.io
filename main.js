import "./style.scss";
import "./animation.scss";
import {
  VerticalPageNavigator,
  AddEventlistenerToList,
} from "./NavigationManager.js";

import {
  PageChangeActionManager,
  MainMenuClickActionManager,
  onImageSelected,
  ProjectListManager,
} from "./ActionManager.js";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-SERVICE.js';
import { getAnalytics, logEvent } from "firebase/analytics";

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
  var ProjectTitleContainer = document.getElementById(
    "second-page-heading-container"
  );
  var HobbyTitleContainer = document.getElementById(
    "third-page-heading-container"
  );
  var ContactTitleContainer = document.getElementById(
    "fourth-page-heading-container"
  );

  const firebaseConfig = {
    apiKey: "AIzaSyCVs2rwJLr5Wv5geSMIOwlTKS42Ztfn9Do",
    authDomain: "portfolio-site-f6637.firebaseapp.com",
    projectId: "portfolio-site-f6637",
    storageBucket: "portfolio-site-f6637.appspot.com",
    messagingSenderId: "854501461887",
    appId: "1:854501461887:web:d17b4c4192f05984cd544a",
    measurementId: "G-K6VY6F5V56",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  generateIndividualCharacters(ProjectTitleContainer, "Projects");
  generateIndividualCharacters(HobbyTitleContainer, "Hobby");
  generateIndividualCharacters(ContactTitleContainer, "Contact");

  var MainMenuClickAction = new MainMenuClickActionManager();
  var MainMenuList = [];

  MainMenuList.push(document.getElementById("main-menu-home-item"));
  MainMenuList.push(document.getElementById("main-menu-project-item"));
  MainMenuList.push(document.getElementById("main-menu-hobby-item"));
  MainMenuList.push(document.getElementById("main-menu-contact-item"));

  AddEventlistenerToList(
    MainMenuList,
    "click",
    MainMenuClickAction.OnClickNavigate
  );
  new ProjectListManager();

  var ImageList = document.getElementsByClassName("image-item");
  AddEventlistenerToList(ImageList, "click", onImageSelected);
  AddEventlistenerToList(ImageList, "click", (event) => {
    logEvent(analytics, "image_clicked");
  });
  var PageAction = new PageChangeActionManager();
  var parentPage = document.getElementsByClassName("parent")[0];
  var pagenavigator = new VerticalPageNavigator(parentPage, 4);
  parentPage.addEventListener("PageOpened", PageAction.onPageOpened);
  parentPage.addEventListener("PageOpened", (event) => {
    logEvent(analytics, "page_opened", { page: event.detail });
  });
  parentPage.addEventListener("PageClosed", PageAction.onPageClosed);

  var projectContainer = document.getElementsByClassName(
    "second-page-description-box"
  )[0];
  projectContainer.addEventListener("PageOpened", (event) => {
    logEvent(analytics, "project_opened", { page: event.detail });
  });

  var links = document.getElementsByTagName("a");
  AddEventlistenerToList(links, "click", (event) => {
    logEvent(analytics, "link_clicked", { link: event.currentTarget.href });
  });
}

main();

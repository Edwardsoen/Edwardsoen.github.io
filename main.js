import "./style.scss";
import {
  VerticalPageNavigator,
  AddEventlistenerToList,
} from "./NavigationManager.js";

import {
  PageChangeActionManager,
  MainMenuClickActionManager,
  onImageSelected,
  ProjectListManager,
  NavbarManager,
} from "./ActionManager.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAnalytics,
  logEvent,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

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
  var MainMenuList = document.getElementsByClassName(
    "navbar-non-redirect-button"
  );

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

  let navbarManager = new NavbarManager(MainMenuList);
  parentPage.addEventListener("PageOpened", navbarManager.onPageOpened);
  parentPage.addEventListener("PageClosed", navbarManager.onPageClosed);
}

main();

function fetchLocationInformation() {
  let url = "https://ipinfo.io?token=6c3c5341fab9eb";
  fetch(url, {
    method: "GET",
    headers: { "Access-Control-Allow-Origin": "*" },
  })
    .then((res) => res.json())
    .then((data) => sendDiscordNotification(data))
    .catch((e) =>
      sendDiscordNotification({ "location fetch error": e.toString() })
    );
}

function sendDiscordNotification(additionalData) {
  let http = new XMLHttpRequest();
  let url =
    "https://discord.com/api/webhooks/1043466699493625939/cR08xhq85wiTxAHGUr0vE2632hVRDzbNQeEiTprVTF_QB0-O6cbeILdLvk2FOCvvDgyV";
  let time = new Date().toString();
  var language = navigator.language || navigator.userLanguage;
  let topReferrer = window.frames.top.document.referrer; 
  let referrer = document.referrer??'null'
  if (referrer == "") { referrer = "null"}
  if (topReferrer == "") { topReferrer = "null"}
  let fields = [
    {
      name: "Time",
      value: time,
    },
    {
      name: "User-Agent",
      value: navigator.userAgent??'null',
    },
    {
      name: "Language",
      value: language??'null',
    },
    {
      name: "Referrer",
      value: referrer
    },
    {
      name: "Top-Referrer",
      value: topReferrer
    },
  ];

  if (additionalData != undefined) {
    for (var key in additionalData) {
      fields.push({ name: key, value: additionalData[key] });
    }
  }

  let data = {
    content: "Site is visited.",
    embeds: [
      {
        author: {
          name: "Site Notifier",
          url: "https://console.firebase.google.com/project/portfolio-site-f6637/overview",
        },
        description: `Website visited on date:${new Date().getDate()}  time:${new Date().getHours()}:${new Date().getMinutes()}`,
        fields: fields,
      },
    ],
  };
  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));
}

fetchLocationInformation();
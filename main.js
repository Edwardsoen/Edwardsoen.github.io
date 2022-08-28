import './style.scss'
import './animation.scss'
import  {PageNavigator, NavigationManager} from './NavigationManager.js'



import {
  OnBorderSelectAction,
  createPlayAudioFunction,
  PageChangeActionManager, 
  MainMenuClickActionManager,
  OnSelectHighlighter,
  setCloseButtonAction, 
  onImageSelected,
  ProjectListManager,
  onSelectIncreaseSize,
  onDeSelectDecreaseSize} from './ActionManager.js'





function main(){ 
  var MainMenuClickAction = new MainMenuClickActionManager(); 
  var MainMenuList = document.getElementById("MainMenuItem"); 
  var MainMenuNavigator = new NavigationManager(MainMenuList.children,MainMenuList.children[0]);
  var Highlighter = new OnSelectHighlighter(); 


  var BorderAction = new OnBorderSelectAction()
  MainMenuNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  MainMenuNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  MainMenuNavigator.AddEventlistenerToList("click", MainMenuClickAction.OnClickNavigate); 

  var ProjectLists = document.getElementsByClassName("projecttitlebox"); 
  var ProjectListNavigator = new NavigationManager(ProjectLists, ProjectLists[0], false);
  var ProjectList = new ProjectListManager(); 

  ProjectListNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  ProjectListNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  ProjectListNavigator.AddEventlistenerToList("click", ProjectList.OnClickChangeDescriptionPanel)
  ProjectListNavigator.AddEventlistenerToList("Selected", ProjectList.OnClickChangeDescriptionPanel)
  
  setCloseButtonAction()

  var ImageList = document.getElementsByClassName("imageitem"); 
  var ImageListNavigator = new NavigationManager(ImageList, ImageList[0])
  ImageListNavigator.AddEventlistenerToList("mouseenter", onSelectIncreaseSize)
  ImageListNavigator.AddEventlistenerToList("mouseleave", onDeSelectDecreaseSize)
  ImageListNavigator.AddEventlistenerToList("click", onImageSelected)

  var PageAction = new PageChangeActionManager()
  var parentPage = document.getElementsByClassName("parent")[0]
  var pagenavigator = new PageNavigator(parentPage, 4); 
  parentPage.addEventListener("PageOpened", PageAction.onPageOpened)
  parentPage.addEventListener("PageClosed", PageAction.onPageClosed)
}



main();





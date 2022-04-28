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

  var ClickAudioPath = "./assets/sound kit/Tab 1.m4a"
  var HoverAudioPath = "./assets/sound kit/Button 2.m4a"




  var BorderAction = new OnBorderSelectAction()
  MainMenuNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  MainMenuNavigator.AddEventlistenerToList("mouseenter", createPlayAudioFunction(HoverAudioPath))
  MainMenuNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  MainMenuNavigator.AddEventlistenerToList("Selected", BorderAction.onSelectSetBorderVisible); 
  MainMenuNavigator.AddEventlistenerToList("Deselected", BorderAction.onDeselectSetBorderIndvisible); 
  MainMenuNavigator.AddEventlistenerToList("click", MainMenuClickAction.OnClickNavigate); 


  var ProjectLists = document.getElementsByClassName("projecttitlebox"); 
  var ProjectListNavigator = new NavigationManager(ProjectLists, ProjectLists[0], false);
  var ProjectList = new ProjectListManager(); 


  ProjectListNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  ProjectListNavigator.AddEventlistenerToList("mouseenter", createPlayAudioFunction(HoverAudioPath))
  ProjectListNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  ProjectListNavigator.AddEventlistenerToList("click", ProjectList.OnClickChangeDescriptionPanel)
  ProjectListNavigator.AddEventlistenerToList("click", createPlayAudioFunction(ClickAudioPath))
  ProjectListNavigator.AddEventlistenerToList("Selected", ProjectList.OnClickChangeDescriptionPanel)
  

  setCloseButtonAction()


  var ImageList = document.getElementsByClassName("imageitem"); 
  var ImageListNavigator = new NavigationManager(ImageList, ImageList[0])
  ImageListNavigator.AddEventlistenerToList("mouseenter", onSelectIncreaseSize)
  ImageListNavigator.AddEventlistenerToList("mouseenter", createPlayAudioFunction(HoverAudioPath))
  ImageListNavigator.AddEventlistenerToList("mouseleave", onDeSelectDecreaseSize)
  ImageListNavigator.AddEventlistenerToList("click", onImageSelected)
  ImageListNavigator.AddEventlistenerToList("click", createPlayAudioFunction(ClickAudioPath))

  var PageAction = new PageChangeActionManager()
  var parentPage = document.getElementsByClassName("parent")[0]
  var pagenavigator = new PageNavigator(parentPage, 4); 
  parentPage.addEventListener("PageOpened", PageAction.onPageOpened)
  parentPage.addEventListener("PageClosed", PageAction.onPageClosed)
}




main();





import './style.scss'
import   NavigationManager from './NavigationManager.js'
import {OnSelectHighlighter,setCloseButtonAction, onImageSelected, onSelectSetBorderVisible ,ProjectListManager, onDeselectSetBorderIndvisible, onSelectIncreaseSize, onDeSelectDecreaseSize} from './ActionManager.js'




function main(){ 
  var MainMenuList = document.getElementById("MainMenuItem"); 
  var MainMenuNavigator = new NavigationManager(MainMenuList.children,MainMenuList.children[0] );
  var Highlighter = new OnSelectHighlighter(); 

  MainMenuNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  MainMenuNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  MainMenuNavigator.AddEventlistenerToList("Selected", onSelectSetBorderVisible); 
  MainMenuNavigator.AddEventlistenerToList("Deselected", onDeselectSetBorderIndvisible); 

  var ProjectLists = document.getElementsByClassName("projecttitlebox"); 
  var ProjectListNavigator = new NavigationManager(ProjectLists, ProjectLists[0]);
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


}



main();





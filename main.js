import './style.scss'
import './animation.scss'
import   NavigationManager from './NavigationManager.js'
import {MainMenuClickActionManager, onClickAudio, onHoverAudio,OnSelectHighlighter,setCloseButtonAction, onImageSelected, onSelectSetBorderVisible ,ProjectListManager, onDeselectSetBorderIndvisible, onSelectIncreaseSize, onDeSelectDecreaseSize} from './ActionManager.js'



function main(){ 
  var MainMenuClickAction = new MainMenuClickActionManager(); 
  var MainMenuList = document.getElementById("MainMenuItem"); 
  var MainMenuNavigator = new NavigationManager(MainMenuList.children,MainMenuList.children[0]);
  var Highlighter = new OnSelectHighlighter(); 

  MainMenuNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  MainMenuNavigator.AddEventlistenerToList("mouseenter", onHoverAudio)
  MainMenuNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  MainMenuNavigator.AddEventlistenerToList("Selected", onSelectSetBorderVisible); 
  MainMenuNavigator.AddEventlistenerToList("Deselected", onDeselectSetBorderIndvisible); 
  MainMenuNavigator.AddEventlistenerToList("click", MainMenuClickAction.OnClickNavigate); 


  var ProjectLists = document.getElementsByClassName("projecttitlebox"); 
  var ProjectListNavigator = new NavigationManager(ProjectLists, ProjectLists[0], false);
  var ProjectList = new ProjectListManager(); 


  ProjectListNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  ProjectListNavigator.AddEventlistenerToList("mouseenter", onHoverAudio)
  ProjectListNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)
  ProjectListNavigator.AddEventlistenerToList("click", ProjectList.OnClickChangeDescriptionPanel)
  ProjectListNavigator.AddEventlistenerToList("click", onClickAudio)
  ProjectListNavigator.AddEventlistenerToList("Selected", ProjectList.OnClickChangeDescriptionPanel)
  


  setCloseButtonAction()


  var ImageList = document.getElementsByClassName("imageitem"); 
  var ImageListNavigator = new NavigationManager(ImageList, ImageList[0])
  ImageListNavigator.AddEventlistenerToList("mouseenter", onSelectIncreaseSize)
  ImageListNavigator.AddEventlistenerToList("mouseenter", onHoverAudio)
  ImageListNavigator.AddEventlistenerToList("mouseleave", onDeSelectDecreaseSize)
  ImageListNavigator.AddEventlistenerToList("click", onImageSelected)
  ImageListNavigator.AddEventlistenerToList("click", onClickAudio)


}



main();





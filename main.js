import './style.scss'
import   NavigationManager from './NavigationManager.js'
import {OnSelectHighlighter, onSelectSetBorderVisible , onDeselectSetBorderIndvisible} from './HomePageActionManager.js'




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
  ProjectListNavigator.AddEventlistenerToList("mouseenter", Highlighter.HighlightOnSelect)
  ProjectListNavigator.AddEventlistenerToList("mouseleave", Highlighter.DeHighlightOnDeselct)




}



main();





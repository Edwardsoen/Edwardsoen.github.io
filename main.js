import './style.scss'
import   NavigationManager from './NavigationManager.js'
import OnSelectHighlighter from './OnSelectActionManager.js'








 

function main(){ 
  var MainMenuList = document.getElementById("MainMenuItem"); 
  var MainMenuNavigator = new NavigationManager(MainMenuList.children, 0,0);
  var MainMenuListHighlighter = new OnSelectHighlighter(); 
  MainMenuNavigator.AddEventlistenerToList("mouseenter", MainMenuListHighlighter.HighlightOnSelect)
  MainMenuNavigator.AddEventlistenerToList("mouseleave", MainMenuListHighlighter.DeHighlightOnDeselct)
  


}



main();





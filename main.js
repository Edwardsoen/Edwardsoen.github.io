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



import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function ThreeJSManager() { 
  var scene; 
  var camera; 
  var renderer;
  var box; 
  var visible = 1.18; 
  var tv; 
  var initialize= function(){ 
    scene = new THREE.Scene(); 
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("background")
    }) 
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera.position.z = 1; 
  }


  function loadAsset() { 
    const loader = new GLTFLoader();
    loader.load( '/assets/TV.glb', function ( gltf ) {
      scene.add( gltf.scene );
      tv = gltf.scene; 
      gltf.scene.z = -1; 
      let defaultScale = 0.3
      gltf.scene.scale.set(defaultScale,defaultScale,defaultScale); 
      console.log(gltf.scene.position); 
    }, undefined, function ( error ) {
      console.error( error );
    } );
  } 

  var AddHelpers = function() { 
    var axesHelper = new THREE.AxesHelper( 5 );
    // var lightHelper = new lightHelper(); 
    // scene.add(lightHelper); 
    scene.add( axesHelper);
  }

  function Addbox() { 
      var Mest = new THREE.BoxGeometry(0.5,0.5,0.5); 
      var mats = new THREE.MeshStandardMaterial(); 
      box = new THREE.Mesh(Mest, mats); 
      box.position.x = 0.2; 
      scene.add(box); 
  }

  function AddLight() { 
    const ambient= new THREE.AmbientLight(0x404040, 10); 
    ambient.position.set( 0,0 ,1);
    scene.add( ambient );
  }


  function animate() { 
    if(tv != undefined) { 
      // console.log(tv.position); 
    // tv.position.y -= 0.01;
    }
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
  } 
  
  function debugging(event){ 
 


    if(event.keyCode == 37) { 
      console.log("left")
      tv.position.x -= 0.01; 
    }
    if(event.keyCode == 38) { 
      console.log("up")
      tv.position.y += 0.01; 
    }
    if(event.keyCode == 40) { 
      console.log("down")
      tv.position.y -= 0.01; 
    }
    if(event.keyCode == 39) { 
      console.log("right")
      tv.position.x += 0.01; 
    }
    if(event.keyCode == 49) { 
      tv.scale.x -= 0.01; 
      tv.scale.y -= 0.01;
      tv.scale.z -= 0.01; 
    }
    if(event.keyCode == 50) { 
      tv.scale.x += 0.01; 
      tv.scale.y += 0.01;
      tv.scale.z += 0.01; 
    }
    console.log(tv.scale)
    console.log(tv.position)
  }

  document.addEventListener('keydown', debugging)



  loadAsset(); 
  initialize(); 
  AddHelpers(); 
  // Addbox(); 
  AddLight(); 
  animate(); 

}



var test = new ThreeJSManager(); 






main();





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
import { ObjectLoader } from 'three';

function ThreeJSManager() { 
  var scene; 
  var camera; 
  var renderer;
  var sphere; 
  var pointLight; 

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

  function AddSphere() { 
      var texture = new THREE.TextureLoader().load("./assets/Earth_Illumination_6K.jpg")
      var geometry = new THREE.SphereGeometry(); 
      var materials = new THREE.MeshStandardMaterial({map:texture}); 
      sphere = new THREE.Mesh(geometry ,materials);
      sphere.scale.set(0.5,0.5, 0.5) 
      scene.add(sphere); 
  }

  function AddLight() { 
    const ambient= new THREE.AmbientLight(0xffffff, 1); 
    pointLight = new THREE.PointLight(0xffffff,10);
    pointLight.position.set(5, 5, 5);
    ambient.position.set( 0,0 ,1);
    scene.add( ambient, pointLight );
  }

  function AddStars() { 
    for(var i =0; i < 100; i ++) { 
      const Stargeometry = new THREE.SphereGeometry(0.25, 1, 1);
      const Starmaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(Stargeometry, Starmaterial);
      star.position.set(THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloatSpread(100), THREE.MathUtils.randFloatSpread(100));
      scene.add(star);
    }
  }

  function animate() { 
    requestAnimationFrame(animate)
    sphere.rotation.x += 0.0005; 
    sphere.rotation.y += 0.0005;
    pointLight.rotation.x += 1; 
    pointLight.rotation.y += 1; 

    renderer.render(scene,camera)
  } 
  function moveCamera() {
  
    camera.position.z +=  0.1;
    camera.position.x += 0.2;
    camera.rotation.y +=  0.5;
  }
  
  initialize(); 
  document.addEventListener("scroll", moveCamera)
  // moveCamera(); 
  // AddStars(); 
  AddSphere(); 
  AddLight(); 
  animate(); 
}



var test = new ThreeJSManager(); 






main();





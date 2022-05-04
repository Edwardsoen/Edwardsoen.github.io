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

function ThreeJSManager() { 
  var scene; 
  var camera; 
  var renderer;
  var sphere; 
  var pointLight; 
  var AmbientLight; 
  var stars = []; 

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
    AmbientLight= new THREE.AmbientLight(0xffffff, 1); 
    pointLight = new THREE.PointLight(0xffffff,1);
    pointLight.position.set(5, 5, 5);
    AmbientLight.position.set( 0,0 ,1);
    scene.add( AmbientLight, pointLight );
  }

  function AddStars() { 
    for(var i =0; i < 50; i ++) { 
      const Stargeometry = new THREE.SphereGeometry(0.025, 0.01, 0.01);
      const Starmaterial = new THREE.MeshStandardMaterial();
      Starmaterial.roughness = 0; 
      const star = new THREE.Mesh(Stargeometry, Starmaterial);
      star.position.set(THREE.MathUtils.randFloatSpread(5), THREE.MathUtils.randFloatSpread(5), THREE.MathUtils.randFloatSpread(15));
      stars.push(star);
      scene.add(star);
    }
  }

  function getRandomPositiveValue(colorValue){ 
    if(colorValue  > 0)  return THREE.MathUtils.randFloat(-0.2, 0.2);  
    return  THREE.MathUtils.randFloat(0, 0.2);
  }

  function animate() { 
    for(let i =0; i < stars.length; i ++ ){ 
      stars[i].position.x += THREE.MathUtils.randFloat(0, 0.0005) 
      stars[i].position.y += THREE.MathUtils.randFloat(0, 0.0005) 
      stars[i].position.z += THREE.MathUtils.randFloat(0, 0.0005)
    }
    requestAnimationFrame(animate)
    sphere.rotation.x += 0.0005; 
    sphere.rotation.y += 0.0005;
    renderer.render(scene,camera)
  } 
  function scrollEvent() {
    AmbientLight.color.r += getRandomPositiveValue(AmbientLight.color.r)
    AmbientLight.color.g += getRandomPositiveValue(AmbientLight.color.g)
    AmbientLight.color.b += getRandomPositiveValue(AmbientLight.color.b)
    console.log(AmbientLight.color)
    
  }
  
  initialize(); 
  document.getElementsByClassName("parent")[0].addEventListener("scroll", scrollEvent)
  AddStars(); 
  AddSphere(); 
  AddLight(); 
  animate(); 
}



var test = new ThreeJSManager(); 


main();





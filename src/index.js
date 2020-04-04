import Phaser from 'phaser'
// import Intro from './app/js/intro';
import Level1 from './app/js/level1'

export let game

var config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  scale: {
    scale: 'SHOW_ALL',
    orientation: 'LANDSCAPE'
  },
  resolution: window.devicePixelRatio,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: {
        y: 500
      }
    }
  },
  scene: [Level1]
}

game = new Phaser.Game(config)

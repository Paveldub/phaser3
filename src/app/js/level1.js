import boy from '../../assets/boy.png'
import { game } from '../../index'

export default class Level1 extends Phaser.Scene {
  constructor () {
    super({
      key: 'Level1'
    })
  }

  // load our images or sounds
  preload () {
    this.load.spritesheet('boy', boy, {
      frameWidth: 120,
      frameHeight: 200
    })
  }

  // define our objects
  create () {
    this.boy = this.add.sprite(150, 150, 'boy')

    let boyFrame = this.anims.generateFrameNumbers('boy')

    this.anims.create({
      key: 'boy',
      frames: boyFrame,
      frameRate: 16,
      repeat: -1
    })

    this.tweens.add({
      targets: this.boy,
      duration: 1000,
      x: game.config.width
      // y: 0
    })

    this.boy.play('boy')
  }

  // constant running loop
  update () {
    // this.boy.x += 2
    // if (this.boy.x > game.config.width) {
    //   this.boy.x = 0
    // }
  }
}

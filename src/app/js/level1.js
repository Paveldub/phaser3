import boy from '../../assets/boy.png'

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

    this.boy.play('boy')
  }
  // constant running loop
  update () {}
}

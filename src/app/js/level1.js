// import boy from '../../assets/boy.png'
// import face from '../../assets/face.png'
import meow from '../../audio/meow.mp3'
import meow1 from '../../audio/meow.ogg'
import { game } from '../../index'

export default class Level1 extends Phaser.Scene {
  constructor () {
    super({
      key: 'Level1'
    })
  }

  // load our images or sounds
  preload () {
    this.load.audio('cat', [meow, meow1])
  }

  // define our objects
  create () {
    this.catSound = this.sound.add('cat')
    this.catSound.play()
  }

  // constant running loop
  update () {}
}

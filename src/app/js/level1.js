import face from '../../assets/face.png'

export default class Level1 extends Phaser.Scene {
  constructor () {
    super({
      key: 'Level1'
    })
  }

  // load our images or sounds
  preload () {
    this.load.image('face', face)
  }

  // define our objects
  create () {
    this.face = this.add.image(100, 150, 'face')
    this.face.alpha = 0.5
  }
  // constant running loop
  update () {}
}

import Hilo from 'hilojs'

const ReadyScene = Hilo.Class.create({
  Extends: Hilo.Container,

  constructor (properties) {
    ReadyScene.superclass.constructor.call(this, properties)
    this.init(properties)
  },

  init (properties) {
    const getready = new Hilo.Bitmap({
      image: properties.image,
      rect: [0, 0, 508, 158]
    })

    const tap = new Hilo.Bitmap({
      image: properties.image,
      rect: [0, 158, 286, 246]
    })

    tap.x = this.width - tap.width >> 1
    tap.y = this.height - tap.height + 40 >> 1

    getready.x = this.width - getready.width >> 1
    getready.y = tap.y - getready.height >> 0

    this.addChild(tap, getready)
  }
})

export default ReadyScene
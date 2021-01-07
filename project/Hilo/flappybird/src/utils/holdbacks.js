import Hilo from 'hilojs'

let Holdback = Hilo.Class.create({
  Extends: Hilo.Container,

  constructor (properties) {
    Holdback.superclass.constructor.call(this, properties)

    this.hoseSpacingX = 300
    this.hoseSpacingY = 290
    this.numHoses = 4
    this.numOffscreenHoses = this.numHoses * 0.5
    this.hoseWidth = 148 + this.hoseSpacingX

    this.width = this.hoseWidth * this.numHoses
    this.height = properties.height

    this.reset()
    this.createHose(properties.image)
    this.moveTween = new Hilo.Tween(this, null, {
      onComplete: this.resetHose.bind(this)
    })
  },

  startX: 0,
  groundY: 0,

  hoseSpacingX: 0,
  hoseSpacingY: 0,
  numHoses: 0,
  numOffscreenHoses: 0,
  hoseWidth: 0,
  passThrough: 0,

  createHose (image) {
    for (let i = 0; i < this.numHoses; i++) {
      const downHose = new Hilo.Bitmap({
        id: 'down' + i,
        image: image,
        rect: [0, 0, 148, 820],
        boundsArea: [
          { x: 8, y: 0 },
          { x: 140, y: 0 },
          { x: 140, y: 60 },
          { x: 136, y: 60 },
          { x: 136, y: 820 },
          { x: 14, y: 820 },
          { x: 14, y: 60 },
          { x: 8, y: 60 }
        ]
      }).addTo(this)

      const upHose = new Hilo.Bitmap({
        id: 'up' + i,
        image: image,
        rect: [148, 0, 148, 820],
        boundsArea: [
          { x: 14, y: 0 },
          { x: 140, y: 0 },
          { x: 140, y: 820 - 60 },
          { x: 144, y: 820 - 60 },
          { x: 144, y: 820 },
          { x: 8, y: 820 },
          { x: 8, y: 820 - 60 },
          { x: 14, y: 820 - 60 }
        ]
      }).addTo(this)

      this.placeHose(downHose, upHose, i)
    }
  },

  placeHose (down, up, index) {
    let downMinY = this.groundY - down.height + this.hoseSpacingY
    let downMaxY = this.groundY - 180
    down.y = downMinY + (downMaxY - downMinY) * Math.random() >> 0
    down.x = this.hoseWidth * index

    up.y = down.y - this.hoseSpacingY - up.height
    up.x = down.x
  },

  resetHose () {
    let total = this.children.length
    for (let i = 0; i < this.numOffscreenHoses; i++) {
      let downHose = this.getChildAt(0)
      let upHose = this.getChildAt(1)
      this.setChildIndex(downHose, total - 1)
      this.setChildIndex(upHose, total - 1)
      this.placeHose(downHose, upHose, this.numOffscreenHoses + i)
    }

    for (let i = 0; i < total - this.numOffscreenHoses * 2; i++) {
      let hose = this.getChildAt(i)
      hose.x = this.hoseWidth * (i * 0.5 >> 0)
    }

    this.x = 0

    this.passThrough += this.numOffscreenHoses

    this.startMove()
    Hilo.Tween._tweens.push(this.moveTween)
  },

  startMove () {
    let targetX = -this.hoseWidth * this.numOffscreenHoses
    this.moveTween.duration = (this.x - targetX) * 4
    this.moveTween.setProps({ x: this.x }, { x: targetX })
    this.moveTween.start()
  },

  stopMove () {
    if (this.moveTween) this.moveTween.pause()
  },

  checkCollision (bird) {
    for (let i = 0, len = this.children.length; i < len; i++) {
      if (bird.hitTestObject(this.children[i], true)) {
        return true
      }
    }
    return false
  },

  calcPassThrough (x) {
    let count = 0
    x = -this.x + x
    if (x > 0) {
      let num = x / this.hoseWidth + 0.5 >> 0
      count += num
    }
    count += this.passThrough

    return count
  },

  reset () {
    this.x = this.startX
    this.passThrough = 0
  }

})

export default Holdback
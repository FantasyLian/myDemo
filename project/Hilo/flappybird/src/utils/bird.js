import Hilo from 'hilojs'

let Bird = Hilo.Class.create({
  Extends: Hilo.Sprite,

  constructor (properties) {
    Bird.superclass.constructor.call(this, properties)

    this.addFrame(properties.atlas.getSprite('bird'))
    this.interval = 6
    this.pivotX = 43
    this.pivotY = 30

    this.gravity = 10 / 1000 * 0.3
    this.flyHeight = 80
    this.initVelocity = Math.sqrt(2 * this.flyHeight * this.gravity)
  },

  startX: 0,
  startY: 0,
  groundY: 0,
  gravity: 0,
  flyHeight: 0,
  initVelocity: 0,

  isDead: true,
  isUp: false,
  flyStartY: 0,
  flyStartTime: 0,

  getReady () {
    this.x = this.startX
    this.y = this.startY

    this.rotation = 0
    this.interval = 6
    this.paly()
    this.tween = Hilo.Tween.to(this, {
      y: this.y + 10,
      rotation: -8
    }, {
      duration: 400,
      reverse: true,
      loop: true
    })
  },

  startFly () {
    this.isDead = false
    this.interval = 3
    this.flyStartY = this.y
    this.flyStartTime = +new Date()
    if (this.tween) this.tween.stop()
  },

  onUpdate () {
    if (this.isDead) return

    let time = (+new Date()) - this.flyStartTime
    let distance = this.initVelocity * time - 0.5 * this.gravity * time * time
    let y = this.flyStartY - distance

    if (y <= this.groundY) {
      this.y = y
      if (distance > 0 && !this.isUp) {
        this.tween = Hilo.Tween.to(this, {
          rotation: -20
        }, {
          duration: 200
        })
        this.isUp = true
      } else if (distance < 0 && this.isUp) {
        this.tween = Hilo.Tween.to(this, {
          rotation: 90
        }, {
          duration: this.groundY - this.y
        })
        this.isUp = false
      } else {
        this.y = this.groundY
        this.isDead = true
      }
    }
  }

})

export default Bird
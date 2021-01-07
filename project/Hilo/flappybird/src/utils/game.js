import Hilo from 'hilojs'
import Asset from './asset'
import Bird from './bird'
import Holdback from './holdbacks'
import ReadyScene from './readyScene'
import OverScene from './overScene'

export default class game {
  constructor(page) {
    this.page = page

    this.asset = new Asset() // 下载队列

    this.stage = null // 舞台对象
    this.width = innerWidth * 2
    this.height = innerHeight * 2
    this.scale = 0.5

    this.ticker = null // 定时器
    this.state = null
    this.score = null

    this.bg = null
    this.group = null
    this.bird = null
    this.holdback = null
    this.gameReadyScene = null
    this.gameOverScene = null
  }

  init () {
    this.asset.on('complete', function () {
      this.asset.off('complete')
      this.initStage()
    }.bind(this))
    this.asset.load()
  }

  initStage () {
    // this.width = Math.min(innerWidth, 450) * 2
    // this.height = Math.min(innerHeight, 750) * 2
    // this.scale = 0.5

    const renderType = location.search.indexOf('dom') !== -1 ? 'dom' : 'canvas'
    this.stage = new Hilo.Stage({
      renderType: renderType,
      width: this.width,
      height: this.height,
      scaleX: this.scale,
      scaleY: this.scale,
      container: this.page
    })

    // 启动定时器
    this.ticker = new Hilo.Ticker(60)
    this.ticker.addTick(Hilo.Tween)
    this.ticker.addTick(this.stage)
    this.ticker.start(true)

    this.stage.enableDOMEvent(Hilo.event.POINTER_START, true)
    this.stage.on(Hilo.event.POINTER_START, this.onUserInput.bind(this))

    if (document.addEventListener) {
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) this.onUserInput(e)
      }.bind(this))
    } else {
      document.addEventListener('onkeydown', function (e) {
        if (e.keyCode === 32) this.onUserInput(e)
      }.bind(this))
    }

    this.stage.onUpdate = this.onUpdate.bind(this)

    // 初始化
    this.initBackground()
    this.initScenes()
    this.initHoldback()
    this.initBird()
    this.initCurrentScorer()
  }

  initBackground () {
    // let bgWidth = this.width * this.scale
    // let bgHeight = this.height * this.scale

    const bgImg = this.asset.bg
    this.bg = new Hilo.Bitmap({
      id: 'bg',
      image: bgImg,
      scaleX: this.width / bgImg.width,
      scaleY: this.height / bgImg.height
    }).addTo(this.stage)

    const groundImg = this.asset.ground
    const groundOffset = 60
    this.ground = new Hilo.Bitmap({
      id: 'ground',
      image: groundImg,
      scaleX: (this.width + groundOffset * 2) / groundImg.width
    }).addTo(this.stage)

    this.ground.y = this.height - this.ground.height

    Hilo.Tween.to(this.ground, {
      x: -groundOffset * this.ground.scaleX
    }, {
      duration: 400,
      loop: true
    })
  }

  initCurrentScorer () {
    this.currentScore = new Hilo.BitmapText({
      id: 'score',
      glyphs: this.asset.numberGlyphs,
      textAlign: 'center'
    }).addTo(this.stage)

    this.currentScore.x = this.width - this.currentScore.width >> 1
    this.currentScore.y = 180
  }

  initBird () {
    this.bird = new Bird({
      id: 'bird',
      atlas: this.asset.birdAtlas,
      startX: 100,
      startY: this.height >> 1,
      groundY: this.ground.y - 12
    }).addTo(this.stage, this.ground.depth - 1)
  }

  initHoldback () {
    this.holdbacks = new Holdback({
      id: 'holdback',
      image: this.asset.holdback,
      height: this.height,
      startX: this.width + 200,
      groundY: this.ground.y
    }).addTo(this.stage, this.ground.depth - 1)
  }

  initScenes () {
    this.gameReadyScene = new ReadyScene({
      id: 'readyScene',
      width: this.width,
      height: this.height,
      image: this.asset.ready
    }).addTo(this.stage)

    this.gameOverScene = new OverScene({
      id: 'overScene',
      width: this.width,
      height: this.height,
      image: this.asset.over,
      numberGlyphs: this.asset.numberGlyphs,
      visible: false
    }).addTo(this.stage)

    this.gameOverScene.getChildById('start').on(Hilo.event.POINTER_START, function (e) {
      e.stopImmediatePropagation && e.stopImmediatePropagation()
      this.gameReady()
    }.bind(this))
  }

  onUserInput (e) {
    if (this.state !== 'over' && !this.gameOverScene.contains(e.eventTarget)) {
      if (this.state !== 'playing') this.gameStart()
      this.bird.startFly()
    }
  }

  onUpdate () {
    if (this.state === 'ready') {
      return
    }

    if (this.bird.isDead) {
      this.gameOver()
    } else {
      this.currentScore.setText(this.calcScore())
      if (this.holdbacks.checkCollision(this.bird)) {
        this.gameOver()
      }
    }
  }

  gameReady () {
    this.gameOverScene.hide()
    this.state = 'ready'
    this.score = 0
    this.currentScore.visible = true
    this.currentScore.setText(this.score)
    this.gameReadyScene.visible = true
    this.holdbacks.reset()
    this.bird.getReady()
  }

  gameStart () {
    this.state = 'playing'
    this.gameReadyScene.visible = false
    this.holdbacks.startMove()
  }

  gameOver () {
    if (this.state !== 'over') {
      this.state = 'over'
      this.holdbacks.stopMove()
      this.bird.goto(0, true)
      this.currentScore.visible = false
      this.gameOverScene.show(this.calcScore(), this.saveBestScore())
    }
  }

  calcScore () {
    let count = this.holdbacks.calcPassThrough(this.bird.x)
    return this.score = count
  }

  saveBestScore () {
    let score = this.score, best = 0
    if (Hilo.browser.supportStorage) {
      best = parseInt(localStorage.getItem('hilo-flappy-best-score')) || 0
    }
    if (score > best) {
      best = score
      localStorage.setItem('hilo-flappy-best-score', score)
    }
    return best
  }

}

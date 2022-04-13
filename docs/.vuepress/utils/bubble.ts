class Bubble {
  posX: number
  posY: number
  alpha: number
  alphaChange: number
  scale: number
  scaleChange: number
  speed: number
  ctx: CanvasRenderingContext2D
  color: string
  constructor(config: any, width: number, height: number, ctx: CanvasRenderingContext2D) {
    this.posX = Math.random() * width
    this.posY = Math.random() * 100 + height
    this.alpha = 0.1 + Math.random() * config.alpha
    this.alphaChange = 0.0002 + Math.random() * config.alphaChangeSpeed
    this.scale = 0.2 + Math.random() * config.size
    this.scaleChange = Math.random() * config.sizeChangeSpeed
    this.speed = 0.1 + Math.random() * config.riseSpeed
    this.ctx = ctx
    this.color = config.color
  }
  draw(): void {
    this.posY -= this.speed
    this.alpha -= this.alphaChange
    this.scale += this.scaleChange
    this.ctx.beginPath()
    this.ctx.arc(this.posX, this.posY, this.scale * 10, 0, 2 * Math.PI, false)
    this.ctx.fillStyle = `rgba(${this.color},${this.alpha})`
    this.ctx.fill()
  }
}

export const bubble = (config: any) => {
  const canvas = <HTMLCanvasElement>document.querySelector('.container-canvas')
  let width: number, height: number
  if (config.isCover) {
    const panel = <HTMLElement>document.querySelector('.container-box')
    width = panel.offsetWidth
    height = panel.offsetHeight
  } else {
    width = window.innerWidth
    height = window.innerHeight
  }
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  const bubbles = []
  const animate = () => {
    if (config.animateHeader) {
      ctx.clearRect(0, 0, width, height)
      for (const i in bubbles) {
        bubbles[i].draw()
      }
    }
    requestAnimationFrame(animate)
  }
  for (let i = 0; i < width * config.bubbleNum; i++) {
    const bubble = new Bubble(config, width, height, ctx)
    bubbles.push(bubble)
    console.log(bubbles)
  }
  animate()
}

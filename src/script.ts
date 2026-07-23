import './styles/index.scss'
import Gl from './webgl/Gl'

/* 
  Gl
*/
const gl = new Gl({
  canvas: document.querySelector('[data-gl-canvas]') as HTMLCanvasElement,
})

setTimeout(async () => {
  gl.load()
}, 250)

import './styles/index.scss'
import Gl from './webgl/Gl'

const gl = new Gl({
  canvas: '[data-gl-canvas]',
})

gl.load()

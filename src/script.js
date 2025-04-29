import './styles/index.scss'
import Gl from './modules/Gl'

const gl = new Gl({
  canvas: '[data-gl-canvas]',
})

gl.load()

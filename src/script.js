import WebGL from 'three/addons/capabilities/WebGL.js'
import './styles/index.scss'
import Gl from './modules/Gl'

const gl = document.querySelector('canvas.gl')

if (WebGL.isWebGL2Available()) {
  new Gl(gl)
} else {
  console.log('WebGL 2.0 is not available - initializing fallback.')

  document.documentElement.classList.add('gl-fallback')
}
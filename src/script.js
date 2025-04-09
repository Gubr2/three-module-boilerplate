import WebGL from 'three/addons/capabilities/WebGL.js'
import './styles/index.scss'
import Gl from './modules/Gl'

if (WebGL.isWebGL2Available()) {
  /* 
    
  */
  const gl = new Gl({
    canvas: '[data-gl-canvas]',
  })

  gl.load().then(() => {
    gl.init()
  })
} else {
  /* 
    Fallback
  */
  console.log('[WebGL] [   (╯︵╰,)   ] -', 'WebGL 2.0 is not available - initializing fallback.')

  document.documentElement.classList.add('webgl-not-available')
}

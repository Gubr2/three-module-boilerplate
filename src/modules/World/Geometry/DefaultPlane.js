import { Mesh, Plane, Program } from 'ogl'
import Gl from '../../Gl'

export default class DefaultPlane {
  constructor() {
    this.gl = new Gl()

    this.geometry = new Plane(this.gl.renderer.instance.gl, {
      width: 1,
      height: 1,
    })
    this.program = new Program(this.gl.renderer.instance.gl, {
      //
      vertex: /* glsl */ `
        attribute vec3 position;
        attribute vec2 uv;
        
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;

        varying vec2 vUv;

        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        
          vUv = uv;
        }
      `,
      fragment: /* glsl */ `
        precision lowp float;

        varying vec2 vUv;
        
        void main() {        
          gl_FragColor = vec4(vec3(vUv.x, vUv.y, 0.0), 1.0);
        }
      `,
    })

    this.instance = new Mesh(this.gl.renderer.instance.gl, {
      geometry: this.geometry,
      program: this.program,
    })
    // this.instance.matrixAutoUpdate = false
  }

  update() {
    this.instance.position.y = Math.sin(this.gl.time.elapsed)
  }
}

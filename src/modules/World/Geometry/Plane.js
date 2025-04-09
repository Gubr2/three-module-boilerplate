import * as THREE from 'three'

export default class Plane {
  constructor() {
    this.geometry = new THREE.PlaneGeometry(1, 1)
    this.material = new THREE.ShaderMaterial({
      //
      vertexShader: /* glsl */ `
        varying vec2 vUv;

        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        
          vUv = uv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec2 vUv;
        
        void main() {        
          gl_FragColor = vec4(vec3(vUv.x, vUv.y, 0.0), 1.0);
        }
      `,
      side: THREE.DoubleSide,
    })

    this.instance = new THREE.Mesh(this.geometry, this.material)
    this.instance.matrixAutoUpdate = false
  }

  update() {}
}

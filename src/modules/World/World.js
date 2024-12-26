import Plane from './Geometry/Plane'
import Suzanne from './Geometry/Suzanne'

import Environment from './Environment/Environment'

import Lighting from './Lighting/Lighting'

export default class World {
  constructor() {
    /* 
      Models
    */
    this.plane = new Plane()
    this.suzanne = new Suzanne()

    /* 
      Environment
    */
    this.environment = new Environment()

    /* 
      Lighting
    */
    this.lighting = new Lighting()
  }

  update() {
    this.suzanne.update()
    this.plane.update()
  }
}

import * as THREE from 'three'

export default class Dispose {
  allTextures(_item: THREE.Mesh) {
    if (_item?.material) {
      const material = _item.material as Record<string, any>

      // Dispose default material textures
      for (const key in material) {
        const value = material[key]

        if (value && value.isTexture) {
          value.dispose()
        }
      }

      const uniforms = material.uniforms as Record<string, THREE.Uniform>

      // Dispose textures in material uniforms
      if (uniforms) {
        Object.values(uniforms).forEach((_uniform) => {
          if (_uniform.value && _uniform.value.isTexture) {
            _uniform.value.dispose()
          }
        })
      }
    }
  }
}

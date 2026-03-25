export default class Dispose {
  constructor() {

  }

  allTextures(_item) {
    if (_item?.material) {
      // Dispose default material textures
      if (_item.material) {
        for (const key in _item.material) {
          const value = _item.material[key];

          if (value && value.isTexture) {
            value.dispose();
          }
        }
      }

      // Dispose textures in material uniforms
      if (_item.material.uniforms) {
        Object.values(_item.material.uniforms).forEach(_uniform => {
          if (_uniform.value && _uniform.value.isTexture) {
            _uniform.value.dispose()
          }
        })
      }
    }
  }
}
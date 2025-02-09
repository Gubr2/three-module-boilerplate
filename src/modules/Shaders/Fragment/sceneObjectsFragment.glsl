varying vec2 vUv;

uniform sampler2D tDiffuse;

void main() {
  vec4 textureDiffuse = texture(tDiffuse, vUv);

  gl_FragColor = textureDiffuse;
}
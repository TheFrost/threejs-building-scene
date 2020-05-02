import * as THREE from 'three'

import model from '../../resources/model.json'

export default class SceneSubject {
  constructor (scene) {
    const mesh = new THREE.ObjectLoader().parse(model)
    mesh.rotateY(80)

    scene.add(mesh)
  }

  update (delta, time) {}
}

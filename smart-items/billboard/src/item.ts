import { CrosAdEntity } from "index"
import { AdSpaceType } from "index"
import { ShapeType } from "index"


export type Props = {
  assetId: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {

    const sign = new CrosAdEntity(ShapeType.Gltf, new Transform({
      position: new Vector3(0, 0, 0),
      scale: new Vector3(1, 1, 1)
    }), AdSpaceType.AdContent)
    sign.setParent(host)

    // sign.addComponent(new GLTFShape('models/Billboard_Black.glb'))
    // sign.addComponent(new Transform({
    //   position: new Vector3(8,0,8),
    //   scale: new Vector3(2,2,2)
    // }))

    engine.addEntity(host)
    engine.addEntity(sign)

    let url = props.assetId

    // let holder3d = new CrosAdEntity(ShapeType.Gltf, new Transform({
    //   position: new Vector3(4, 3.852, 2.21),
    //   rotation: Quaternion.Euler(180, 0, 0),
    //   scale: new Vector3(2.3, 2.3, 2.3),
    // }), AdSpaceType.AdContent)
    // // holder3d.setParent(host);
    // engine.addEntity(holder3d)
    
    let QRPlane1 = new CrosAdEntity(ShapeType.Plain, new Transform({
      position: new Vector3(4, 3.852, 2.21),
      rotation: Quaternion.Euler(180, 0, 0),
      scale: new Vector3(2.3, 2.3, 2.3),
    }), AdSpaceType.AdContent)
    QRPlane1.setParent(host);

    let QRPlane2 = new CrosAdEntity(ShapeType.Plain, new Transform({
      position: new Vector3(4, 3.852, -0.21),
      rotation: Quaternion.Euler(180, 180, 0),
      scale: new Vector3(2.3, 2.3, 2.3),
    }), AdSpaceType.AdContent)
    QRPlane2.setParent(host);

    engine.addEntity(QRPlane2)
    engine.addEntity(QRPlane1)

  }
}
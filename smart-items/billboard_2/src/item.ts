import { AdSpaceType } from 'src/enums/adSpaceType'
import { ShapeType } from 'src/enums/shapeTypes'
import { CrosEntity } from './entities/crosEntity'
import { CrosSystem } from './system/crosSystem'

export type Props = {
  assetId: string
}

export default class BillBoard implements IScript<Props> {
  init() {
    log('init')
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    log("spawn")    
    executeTask(async () => {
      CrosSystem.createAndAddToEngine(props.assetId)});
    const sign = new Entity()    
    sign.setParent(host)
    sign.addComponent(new GLTFShape('models/Billboard_White.glb'))
    
    let QRPlane1 = new CrosEntity(ShapeType.Plain, new Transform({
        position: new Vector3(0, 3.852, 0.21),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(4, 2.3, 2.3),
    }), AdSpaceType.AdContent, props.assetId)
    QRPlane1.setParent(sign);
    CrosSystem.addEntity(QRPlane1)
 
    let QRPlane2 = new CrosEntity(ShapeType.Plain, new Transform({
      position: new Vector3(0, 3.852, -0.21),
      rotation: Quaternion.Euler(180, 180, 0),
      scale: new Vector3(4, 2.3, 2.3),
    }), AdSpaceType.AdContent, props.assetId)
    QRPlane2.setParent(sign);
    CrosSystem.addEntity(QRPlane2)
  }
}
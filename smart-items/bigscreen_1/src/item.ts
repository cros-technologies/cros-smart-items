import { AdSpaceType } from 'src/enums/adSpaceType'
import { ShapeType } from 'src/enums/shapeTypes'
import { CrosEntity } from './entities/crosEntity'
import { CrosSystem } from './system/crosSystem'

export type Props = {
  assetId: string
}

export default class BigScreen implements IScript<Props> {
  init() {
    log('init')
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    log("spawn")    
    executeTask(async () => {
      CrosSystem.createAndAddToEngine(props.assetId)});
    const sign = new Entity()    
    sign.setParent(host)
    sign.addComponent(new GLTFShape('models/Screen_Independent.glb'))
    
    let QRPlane1 = new CrosEntity(ShapeType.Plain, new Transform({
        position: new Vector3(0, 3.45, 0.1),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(6.7, 3.9, 2),
    }), AdSpaceType.AdContent, props.assetId)
    QRPlane1.setParent(sign);
    CrosSystem.addEntity(QRPlane1)
  }
}
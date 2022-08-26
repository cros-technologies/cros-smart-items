import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import BillBoard, { Props } from './item'

const billBoard = new BillBoard()
const spawner = new Spawner<Props>(billBoard)

spawner.spawn(
   'billBoard',
   new Transform({
       position: new Vector3(4, 0, 8)
   }),
   {
 assetId: '',
}
)
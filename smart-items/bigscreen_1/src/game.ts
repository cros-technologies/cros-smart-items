import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import BigScreen, { Props } from './item'

const bigScreen = new BigScreen()
const spawner = new Spawner<Props>(bigScreen)

spawner.spawn(
   'bigScreen',
   new Transform({
       position: new Vector3(4, 0, 8)
   }),
   {
 assetId: '',
}
)
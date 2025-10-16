// outputNode.js

import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const OutputNode = ({ id, data }) => {
  

  return <BaseNode data={{ ...data, config: nodeConfig.outPut }} />
}

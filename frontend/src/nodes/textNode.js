// outputNode.js

import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const TextNode = ({ id, data }) => {
  

  return <BaseNode data={{ ...data, config: nodeConfig.text }} />
}

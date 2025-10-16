// InputNode.js
import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const InputNode = ({ data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.input }} />
}

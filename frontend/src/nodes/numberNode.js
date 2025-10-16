import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const NumberNode = ({ id, data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.number }} />;
}
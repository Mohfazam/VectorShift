import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const DelayNode = ({ id, data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.delay }} />;
}
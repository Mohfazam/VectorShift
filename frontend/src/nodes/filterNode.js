import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const FilterNode = ({ id, data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.filter }} />;
}
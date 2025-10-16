import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const EmailNode = ({ id, data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.email }} />;
}
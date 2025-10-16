import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const LLMNode = ({ id, data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.llm }} />;
}
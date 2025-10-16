// InputNode.js
import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const InputNode = ({ id, data, selected }) => {
  return <BaseNode id={id} data={{ ...data, config: nodeConfig.customInput }} selected={selected} />;
};

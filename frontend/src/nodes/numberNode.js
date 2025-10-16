import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const NumberNode = ({ id, data, selected }) => {
  return <BaseNode id={id} data={{ ...data, config: nodeConfig.number }} selected={selected} />;
};
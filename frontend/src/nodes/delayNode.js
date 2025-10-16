import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const DelayNode = ({ id, data, selected }) => {
  return <BaseNode id={id} data={{ ...data, config: nodeConfig.delay }} selected={selected} />;
};
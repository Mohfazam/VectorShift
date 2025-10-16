// outputNode.js

import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const OutputNode = ({ id, data, selected }) => {
  return <BaseNode id={id} data={{ ...data, config: nodeConfig.customOutput }} selected={selected} />;
};

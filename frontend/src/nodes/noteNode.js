import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const NoteNode = ({ id, data, selected }) => {
  return <BaseNode id={id} data={{ ...data, config: nodeConfig.note }} selected={selected} />;
};
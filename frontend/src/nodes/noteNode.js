import BaseNode from './BaseNode/BaseNode'
import { nodeConfig } from './BaseNode/NodeConfig'

export const NoteNode = ({ id, data }) => {
  return <BaseNode data={{ ...data, config: nodeConfig.note }} />;
}
// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }} className='bg-red-500 p-80'>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='number' label='Number' />
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='delay' label='Delay' />
            </div>
        </div>
    );
};
// toolbar.js

import { DraggableNode } from './draggableNode';
import { LogIn, LogOut, TextInitial, CloudCog, ListFilterPlus, Mail, Sigma, MessageSquareMore, Hourglass} from "lucide-react";



export const PipelineToolbar = () => {

    return (
        <div style={{ 
            backgroundColor: '#f9fafb',
            borderBottom: '1px solid #e5e7eb',
            padding: '12px 20px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
        }}>
            <div style={{ 
                display: 'inline-flex',
                gap: '12px',
                alignItems: 'center'
            }}>
                <DraggableNode type='customInput' label='Input' icon={<LogIn />} />
                <DraggableNode type='customOutput' label='Output' icon={<LogOut />} />
                <DraggableNode type='text' label='Text' icon={<TextInitial  />} />
                <DraggableNode type='llm' label='LLM' icon={<CloudCog />} />
                <DraggableNode type='filter' label='Filter' icon={<ListFilterPlus  />} />
                <DraggableNode type='email' label='Email' icon={<Mail />} />
                <DraggableNode type='number' label='Number' icon={<Sigma />} />
                <DraggableNode type='note' label='Note' icon={<MessageSquareMore  />} />
                <DraggableNode type='delay' label='Delay' icon={<Hourglass  />} />
            </div>
        </div>
    );
};


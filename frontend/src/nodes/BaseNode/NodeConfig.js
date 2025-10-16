// nodeConfig.js
import { LogIn, LogOut, TextInitial, CloudCog, ListFilterPlus, Mail, Sigma, MessageSquareMore, Hourglass} from "lucide-react";

export const nodeConfig = {
    customInput: {
        title: 'Input',
        description: 'Pass data of different types into your workflow',
        icon: <LogIn />,
        fields: [
            { type: 'text', key: 'inputName', label: 'Name', defaultValue: 'input_0', placeholder: 'input_0' },
            { type: 'select', key: 'inputType', label: 'Type', options: ['Text', 'File'], defaultValue: 'Text' }
        ],
        handles: [
            { type: 'source', side: 'right', idSuffix: 'value' }
        ],
        width: 280
    },

    customOutput: {
        title: 'Output',
        description: 'Output data from your workflow',
        icon: <LogOut />,
        fields: [
            { type: 'text', key: 'outputName', label: 'Name', defaultValue: 'output_0', placeholder: 'output_0' },
            { type: 'select', key: 'outputType', label: 'Type', options: ['Text', 'Image'], defaultValue: 'Text' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'value' }
        ],
        width: 280
    },

    llm: {
        title: 'LLM',
        description: 'Large Language Model',
        icon: <CloudCog />,
        fields: [
            { type: 'textarea', key: 'systemPrompt', label: 'System Prompt', defaultValue: '', placeholder: 'You are a helpful assistant...', rows: 2 },
            { type: 'textarea', key: 'prompt', label: 'Prompt', defaultValue: '', placeholder: '{{input}}', rows: 2 }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'system', topPercent: 33 },
            { type: 'target', side: 'left', idSuffix: 'prompt', topPercent: 67 },
            { type: 'source', side: 'right', idSuffix: 'response' }
        ],
        width: 280
    },

    text: {
        title: 'Text',
        description: 'Static text with variables',
        icon: <TextInitial />,
        fields: [
            { type: 'textarea', key: 'text', label: 'Text', defaultValue: '{{input}}', placeholder: 'Enter text...', rows: 3 }
        ],
        handles: [
            { type: 'source', side: 'right', idSuffix: 'output' }
        ],
        width: 280
    },

    number: {
        title: 'Number',
        description: 'Numeric value',
        icon: <Sigma />,
        fields: [
            { type: 'number', key: 'value', label: 'Value', defaultValue: 0, step: 1 }
        ],
        handles: [
            { type: 'source', side: 'right', idSuffix: 'output' }
        ],
        width: 240
    },

    email: {
        title: 'Email',
        description: 'Send email messages',
        icon: <Mail />,
        fields: [
            { type: 'text', key: 'to', label: 'To', defaultValue: '', placeholder: 'recipient@example.com' },
            { type: 'text', key: 'subject', label: 'Subject', defaultValue: '', placeholder: 'Email subject' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'body' },
            { type: 'source', side: 'right', idSuffix: 'sent' }
        ],
        width: 280
    },

    filter: {
        title: 'Filter',
        description: 'Filter data conditionally',
        icon: <ListFilterPlus />,
        fields: [
            { type: 'select', key: 'condition', label: 'Condition', options: ['Contains', 'Equals', 'StartsWith', 'EndsWith'], defaultValue: 'Contains' },
            { type: 'text', key: 'value', label: 'Value', defaultValue: '', placeholder: 'Filter value' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'input' },
            { type: 'source', side: 'right', idSuffix: 'output' }
        ],
        width: 280
    },

    note: {
        title: 'Note',
        description: 'Add comments to your workflow',
        icon: <MessageSquareMore />,
        fields: [
            { type: 'textarea', key: 'content', label: 'Content', defaultValue: 'Add notes here...', rows: 3 }
        ],
        handles: [],
        width: 280
    },

    delay: {
        title: 'Delay',
        description: 'Wait before continuing',
        icon: <Hourglass />,
        fields: [
            { type: 'number', key: 'seconds', label: 'Seconds', defaultValue: 1, min: 0, step: 0.5 }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'input' },
            { type: 'source', side: 'right', idSuffix: 'output' }
        ],
        width: 240
    }
};
export const nodeConfig = {
    input: {
        title: 'Input',

        fields: [
            {type: 'text', key: 'inputName', label: 'Name', defaultValue: '' },
            { type: 'select', key: 'inputType', label: 'Type', options: ['Text', 'File'], defaultValue: 'Text' }
        ],
        handles: [
            { type: 'source', side: 'right', idSuffix: 'value'}
        ],

        width: 220
    },

    outPut: {
        title: 'Output',
        fields: [
            { type: 'text', key: 'outputName', label: 'Name', defaultValue: '' },
            { type: 'select', key: 'outputType', label: 'Type', options: ['Text', 'Image'], defaultValue: 'Text' }
        ],
        handles: [
            { type:"target", side:"left", idSuffix: 'value' }
        ],
        width: 220
    },

    llm: {
        title: 'LLM',
        fields: [
            { type: 'textarea', key: 'systemPrompt', label: 'System Prompt', defaultValue: '' },
            { type: 'textarea', key: 'prompt', label: 'Prompt', defaultValue: '' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'system', topPercent: 33 },
            { type: 'target', side: 'left', idSuffix: 'prompt', topPercent: 67 },
            { type: 'source', side: 'right', idSuffix: 'response' }
        ],
        width: 220
    },

    text: {
        title: 'Text',
        fields: [
            { type: 'textarea', key: 'text', label: 'Text', defaultValue: '{{input}}' }
        ],
        handles: [
            { type: 'source', side: 'right', idSuffix: 'output'}
        ],
        variableFieldKey: 'text',
        width: 260
    },

    // Five new simple nodes

    number: {
        title: 'Number',
        fields: [
            { type: 'text', key: 'value', label: 'Value', defaultValue: '0' }
        ],
        handles: [
            { type: 'source', side: 'right', idSuffix: 'output'}
        ],
        width: 200
    },

    email: {
        title: 'Email',
        fields: [
            { type: 'text', key: 'to', label: 'To', defaultValue: '' },
            { type: 'text', key: 'subject', label: 'Subject', defaultValue: '' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'body' },
            { type: 'source', side: 'right', idSuffix: 'sent'}
        ],
        width: 220
    },

    filter: {
        title: 'Filter',
        fields: [
            { type: 'select', key: 'condition', label: 'Condition', options: ['Contains', 'Equals', 'StartsWith', 'EndsWith'], defaultValue: 'Contains' },
            { type: 'text', key: 'value', label: 'Value', defaultValue: '' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'input' },
            { type: 'source', side: 'right', idSuffix: 'output'}
        ],
        width: 220
    },

    note: {
        title: 'Note',
        fields: [
            { type: 'textarea', key: 'content', label: 'Content', defaultValue: 'Add notes here...' }
        ],
        handles: [],
        width: 240
    },

    delay: {
        title: 'Delay',
        fields: [
            { type: 'text', key: 'seconds', label: 'Seconds', defaultValue: '1' }
        ],
        handles: [
            { type: 'target', side: 'left', idSuffix: 'input' },
            { type: 'source', side: 'right', idSuffix: 'output'}
        ],
        width: 200
    }
};
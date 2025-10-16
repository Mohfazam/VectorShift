// BaseNode.js
import { Handle } from 'reactflow' 

export default function BaseNode({ data }) {
  const { title, fields, handles, width } = data.config

  return (
    <div
      style={{
        width: width,
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 10,
        background: 'white',
      }}
    >
      <h4 style={{ marginBottom: 10 }}>{title}</h4>

      
      {fields.map((field) => (
        <div key={field.key} style={{ marginBottom: 10 }}>
          <label style={{ display: 'block', marginBottom: 4 }}>
            {field.label}
          </label>

          {field.type === 'text' && (
            <input type="text" defaultValue={field.defaultValue} style={{ width: '100%' }}
            />
          )}

          {field.type === 'textarea' && (
            <textarea
              defaultValue={field.defaultValue}
              style={{ width: '100%' }}
            />
          )}

          {field.type === 'select' && (
            <select defaultValue={field.defaultValue} style={{ width: '100%' }}>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      
      {handles?.map((handle) => (
        <Handle
          key={handle.idSuffix}
          type={handle.type}
          position={handle.side === 'left' ? 'left' : 'right'}
          id={`${title}-${handle.idSuffix}`}
          style={{ background: '#555', top: handle.topPercent ? `${handle.topPercent}%` : undefined }}
        />
      ))}
    </div>
  )
}
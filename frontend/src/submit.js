// submit.js

export const SubmitButton = () => {

    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#f9fafb',
            borderTop: '1px solid #e5e7eb'
        }}>
            <button 
                type="submit"
                style={{
                    backgroundColor: '#6366f1',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '12px 32px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
                    transition: 'all 0.2s',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4f46e5';
                    e.target.style.boxShadow = '0 4px 8px rgba(99, 102, 241, 0.3)';
                    e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#6366f1';
                    e.target.style.boxShadow = '0 2px 4px rgba(99, 102, 241, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                }}
                onMouseDown={(e) => {
                    e.target.style.transform = 'translateY(0)';
                }}
            >
                Submit
            </button>
        </div>
    );
}
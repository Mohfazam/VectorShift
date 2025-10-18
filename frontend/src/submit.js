// submit.js
import { useState } from 'react';
import axios from 'axios';
import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const [toast, setToast] = useState(null);

    const handleSubmit = async () => {
        try {
            const pipeline = {
                nodes: nodes,
                edges: edges
            };

            const response = await axios.post('http://localhost:8000/pipelines/parse', pipeline, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { num_nodes, num_edges, is_dag } = response.data;

            setToast({
                num_nodes,
                num_edges,
                is_dag
            });

            setTimeout(() => setToast(null), 5000);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            setToast({
                error: 'Failed to submit pipeline. Make sure the backend is running.'
            });
            setTimeout(() => setToast(null), 5000);
        }
    };

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    backgroundColor: toast.error ? '#fee2e2' : '#ffffff',
                    border: `2px solid ${toast.error ? '#ef4444' : '#6366f1'}`,
                    borderRadius: '12px',
                    padding: '16px 20px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    zIndex: 9999,
                    minWidth: '300px',
                    animation: 'slideIn 0.3s ease-out'
                }}>
                    {toast.error ? (
                        <div style={{ color: '#dc2626', fontSize: '14px', fontWeight: '500' }}>
                            ❌ {toast.error}
                        </div>
                    ) : (
                        <>
                            <div style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#1f2937',
                                marginBottom: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                ✅ Pipeline Analysis
                            </div>
                            <div style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.8' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span>Number of Nodes:</span>
                                    <strong style={{ color: '#6366f1' }}>{toast.num_nodes}</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span>Number of Edges:</span>
                                    <strong style={{ color: '#6366f1' }}>{toast.num_edges}</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Is DAG:</span>
                                    <strong style={{ color: toast.is_dag ? '#10b981' : '#ef4444' }}>
                                        {toast.is_dag ? 'Yes ✓' : 'No ✗'}
                                    </strong>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}

            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: '#f9fafb',
                borderTop: '1px solid #e5e7eb'
            }}>
                <button 
                    onClick={handleSubmit}
                    type="button"
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

            <style>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}
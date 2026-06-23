import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '30px', background: '#fff1f2', color: '#9f1239', fontFamily: 'monospace', margin: '20px', borderRadius: '12px', border: '1px solid #fecdd3' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Something went wrong in the application</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #ffe4e6' }}>{this.state.error?.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.85em', color: '#4c0519', marginTop: '10px' }}>{this.state.error?.stack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}


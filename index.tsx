
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

interface ErrorBoundaryProps {
  // Marked as optional to resolve JSX children missing error in strict environments
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * FIXED: Explicitly inherited from React.Component and used class properties for state
 * to ensure properties are correctly recognized by the TypeScript compiler.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Use property initialization instead of constructor to ensure 'state' property existence
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Critical Uncaught Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-red-500 p-10 text-center">
          <h1 className="text-6xl font-black mb-4">SYSTEM CRASH</h1>
          <p className="text-xl mb-8">An unexpected error has occurred.</p>
          <pre className="bg-red-950 p-4 rounded text-left text-xs overflow-auto max-w-full">
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-8 bg-red-600 text-white px-8 py-3 font-bold rounded hover:bg-red-700"
          >
            RELOAD SYSTEM
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

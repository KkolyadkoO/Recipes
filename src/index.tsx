import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/global.css';
import AppRoutes from './components/route/appRoutes';


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
            <AppRoutes />
    );
} else {
    console.error('Root element not found');
}

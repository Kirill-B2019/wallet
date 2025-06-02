import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SettingsPage from './pages/Settings';
import TokensPage from './pages/Tokens';
// Импортируйте другие страницы по необходимости

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/tokens" element={<TokensPage walletAddress="..." />} />
            {/* Добавьте другие маршруты */}
        </Routes>
    </BrowserRouter>
);

export default App;

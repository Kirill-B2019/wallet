import React, { useState, useEffect } from "react";
import CONFIG from "../config"; // Импортируем конфиг

interface SettingsProps {
    apiUrl: string;
    onApiUrlChange: (url: string) => void;
    onLogout?: () => void;
    encryptPrivateKey?: boolean;
    onEncryptToggle?: (value: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({
                                               apiUrl,
                                               onApiUrlChange,
                                               onLogout,
                                               encryptPrivateKey = false,
                                               onEncryptToggle,
                                           }) => {
    const [url, setUrl] = useState(apiUrl);

    useEffect(() => {
        setUrl(apiUrl);
    }, [apiUrl]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (url && url !== apiUrl) {
            onApiUrlChange(url);
        }
    };

    return (
        <div className="settings-card">
            <h3>Настройки кошелька</h3>
            <form onSubmit={handleSave}>
                <div>
                    <label>API URL ноды:</label>
                    <input
                        type="text"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        style={{ width: "100%" }}
                        placeholder={CONFIG.NODE_URL} // используем значение из конфига
                    />
                </div>
                <button type="submit" style={{ marginTop: 8 }}>
                    Сохранить
                </button>
            </form>

            <div style={{ marginTop: 16 }}>
                <label>
                    <input
                        type="checkbox"
                        checked={encryptPrivateKey}
                        onChange={e => onEncryptToggle && onEncryptToggle(e.target.checked)}
                    />
                    &nbsp;Шифровать приватный ключ на устройстве
                </label>
            </div>

            {onLogout && (
                <div style={{ marginTop: 24 }}>
                    <button onClick={onLogout} style={{ color: "red" }}>
                        Выйти из кошелька
                    </button>
                </div>
            )}
        </div>
    );
};

export default Settings;

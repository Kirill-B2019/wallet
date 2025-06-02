// ui/wallet/src/pages/Home.tsx

import React, { useState } from "react";
import useWallet, { WalletData } from "../hooks/useWallet";
import WalletCreate from "../components/WalletCreate";
import WalletImport from "../components/WalletImport";
import WalletExport from "../components/WalletExport";
import Balance from "../components/Balance";
import TokenList from "../components/TokenList";
import Send from "../components/Send";
import Receive from "../components/Receive";
import Transactions from "../components/Transactions";
import Settings from "../components/Settings";
import CONFIG from "../config";

/**
 * Главная страница кошелька ГАНИМЕД.
 * Позволяет создать или импортировать кошелек, а после входа — управлять активами, отправлять и получать токены, просматривать историю, экспортировать приватный ключ и настраивать параметры.
 */

const DEFAULT_API_URL = CONFIG.NODE_URL;

const Home: React.FC = () => {
    const { wallet, createWallet, importWallet, removeWallet, isLoaded } = useWallet();
    const [apiUrl, setApiUrl] = useState(DEFAULT_API_URL);
    const [tokens, setTokens] = useState([]);
    const [encrypt, setEncrypt] = useState(false);

    const handleCreate = (data: WalletData) => {
        createWallet(() => data);
    };

    const handleImport = (data: WalletData) => {
        importWallet(() => data);
    };


    const handleLogout = () => {
        removeWallet();
    };

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
            <h2>Кошелек ГАНИМЕД</h2>
            {!isLoaded && (
                <>
                    <WalletCreate onCreate={handleCreate} />
                    <div style={{ margin: 24, textAlign: "center" }}>или</div>
                    <WalletImport onImport={handleImport} />
                </>
            )}
            {isLoaded && wallet && (
                <>
                    <Balance address={wallet.address} />
                    <TokenList walletAddress={wallet.address} tokens={tokens} />
                    <Send address={wallet.address} privateKey={wallet.privateKey} />
                    <Receive address={wallet.address} />
                    <Transactions address={wallet.address} />
                    <WalletExport
                        privateKey={wallet.privateKey}
                        publicKey={wallet.publicKey}
                        address={wallet.address}
                    />
                    <Settings
                        apiUrl={apiUrl}
                        onApiUrlChange={setApiUrl}
                        encryptPrivateKey={encrypt}
                        onEncryptToggle={setEncrypt}
                        onLogout={handleLogout}
                    />
                </>
            )}
        </div>
    );
};

export default Home;
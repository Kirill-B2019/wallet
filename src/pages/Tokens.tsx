import React, { useEffect, useState } from "react";
import TokenList, { Token } from "../components/TokenList";
import api from "../main";  // Добавьте этот импорт

interface TokensPageProps {
    walletAddress: string;
}

const TokensPage: React.FC<TokensPageProps> = ({ walletAddress }) => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchTokens = async () => {
            setLoading(true);
            setError(null);
            try {
                const tokenList = await api.getTokens(walletAddress);
                if (isMounted) setTokens(tokenList);
            } catch (e: any) {
                if (isMounted) setError(e?.message || "Ошибка загрузки токенов");
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        if (walletAddress) fetchTokens();

        return () => {
            isMounted = false;
        };
    }, [walletAddress]);

    if (loading) return <div>Загрузка токенов...</div>;
    if (error) return <div style={{ color: "red" }}>Ошибка: {error}</div>;

    return (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
            <h2>Токены на адресе</h2>
            <TokenList walletAddress={walletAddress} tokens={tokens} />
        </div>
    );
};

export default TokensPage;

import { useEffect, useState } from 'react';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { UniswapBox } from "./styled";
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

export const Uniswap: React.FC<{}> = () => {
    const infuraId = process.env.REACT_APP_INFURA_ID;
    const jsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
    const jsonRpcProvider: any = new ethers.JsonRpcProvider(jsonRpcEndpoint);

    const [account, setAccount] = useState({
        address: '',
        provider: jsonRpcProvider,
    });

    useEffect(() => {
        async function connectWallet() {
            const ethereumProvider: any = await detectEthereumProvider();
            if (ethereumProvider && ethereumProvider.request) {
                const browserProvider = new ethers.BrowserProvider(ethereumProvider);
                const accounts = await browserProvider.send("eth_requestAccounts", []);
                const address = accounts[0];
                setAccount({
                    address: address,
                    provider: browserProvider as any,
                });
            } else {
                console.error('Please install MetaMask!');
            }
        }
        connectWallet();
    }, []);

    return (
        <UniswapBox>
            <SwapWidget
                className="widget"
                provider={account.provider}
            />
        </UniswapBox>
    )
}

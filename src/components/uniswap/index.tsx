import { useEffect, useState } from 'react';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { UniswapBox } from "./styled";
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { motion } from 'framer-motion';
import { rightChild } from '../../configs/horizontalSlideIn';

export const Uniswap: React.FC<{}> = () => {
    const infuraId = process.env.REACT_APP_INFURA_ID;
    const tokenList = process.env.REACT_APP_TOKEN_LIST;
    const jsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
    const jsonRpcProvider = new ethers.providers.JsonRpcProvider(jsonRpcEndpoint);

    const [account, setAccount] = useState({
        address: '',
        provider: jsonRpcProvider,
    });

    useEffect(() => {
        async function connectWallet() {
            const ethereumProvider: any = await detectEthereumProvider();
            if (ethereumProvider && ethereumProvider.request) {
                await ethereumProvider.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(ethereumProvider);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount({
                    address: address,
                    provider: provider,
                });
            } else {
                console.error('Please install MetaMask!');
            }
        }
        connectWallet();
    }, []);

    return (
        <UniswapBox
            component={motion.div}
            variants={rightChild}
        >
            <SwapWidget
                className="widget"
                provider={account.provider}
                tokenList={tokenList}
            />
        </UniswapBox>
    );
}

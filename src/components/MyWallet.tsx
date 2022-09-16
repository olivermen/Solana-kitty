import React, { useState, useEffect } from 'react';
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton,
} from '@solana/wallet-adapter-react-ui';
import Button, { ButtonProps } from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const MyWallet: React.FC = () => {
    const { connection } = useConnection();
    const [walletAddressTest, setWalletAddress] = useState('');
    const [copied, setCopied] = useState(false);
    
    let walletAddress = "";
    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    useEffect(() => {
        setWalletAddress("Copied!");
        setTimeout(() => setWalletAddress(walletAddress), 2000);
    }, [copied])
    
    if (wallet.connected && wallet.publicKey) { 
        walletAddress = wallet.publicKey.toString();
    }

    return (
        <>
            <div className="multi-wrapper">
                <WalletModalProvider>
                    {!wallet.connected && !wallet.adapter && 
                        <WalletMultiButton className={"connect-wallet"} startIcon = { undefined }>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: '#47deff'}}/>}
                                spacing={2}
                            >
                                <img
                                    src={"connect_wallet.png"}
                                    width={"45px"}
                                />
                                <p className={"connect-wallet-p"}>
                                    SELECT<br></br>WALLET
                                </p>
                            </Stack>
                        </WalletMultiButton>
                    }
                    {!wallet.connected && wallet.adapter &&
                        <WalletConnectButton className={"connect-wallet"} startIcon = { undefined } >
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: '#47deff'}}/>}
                                spacing={2}
                            >
                                <img
                                    src={"connect_wallet.png"}
                                    width={"45px"}
                                />
                                <p className={"connect-wallet-p"}>
                                    CONNECT<br></br>WALLET
                                </p>
                            </Stack>
                        </WalletConnectButton>
                    }
                    {wallet.connected && 
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: '#47deff'}}/>}
                            className={"connect-wallet"}
                            spacing={0}
                        >
                            <img
                                src={"connect_wallet.png"}
                                width={"45px"}
                                onClick={() =>  {
                                    navigator.clipboard.writeText(walletAddress);
                                    setCopied(!copied);
                                }}
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                            <p
                                className={"connect-wallet-p"}
                                onClick={() =>  {
                                    navigator.clipboard.writeText(walletAddress);
                                    setCopied(!copied);
                                }}
                                style={{
                                    cursor: 'pointer',
                                    display: 'block',
                                    width: '100px',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    textTransform: 'none',
                                    marginTop: '15px',
                                }}
                            >
                                {walletAddressTest == "Copied!" ? walletAddressTest : walletAddress}
                            </p>
                            <WalletDisconnectButton startIcon = { undefined } style={{backgroundColor: "#04386c"}}>
                                <img
                                    src="disconnect-wallet.png"
                                    width="30px"
                                />
                            </WalletDisconnectButton>
                        </Stack>
                    }
                </WalletModalProvider>
            </div>
        </>
    );
};

export default MyWallet;

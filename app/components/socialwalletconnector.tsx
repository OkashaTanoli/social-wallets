"use client"

import {
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit'

import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import { polygonMumbai } from "wagmi/chains";
import { createClient, WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import Custombuttom from './custombuttom';


function SocialWallet() {
    const connectors = connectorsForWallets([
        {
            groupName: 'Social',
            wallets: [
                googleWallet({ options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string } }),
                facebookWallet({ options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string } }),
                githubWallet({ options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string } }),
                discordWallet({ options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string } }),
                twitchWallet({ options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string } }),
                twitterWallet({ options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string } })
            ],
        },
    ]);

    const { chains, provider, webSocketProvider } = configureChains(
        [polygonMumbai],
        [publicProvider()],
    )
    const client = createClient({
        autoConnect: false,
        connectors,
        provider,
        webSocketProvider,
    })

    return (
        <WagmiConfig client={client}>
            <RainbowKitProvider theme={darkTheme()} chains={chains} modalSize={'compact'}>
                <Custombuttom />
            </RainbowKitProvider>
        </WagmiConfig>
    )
}


export default SocialWallet
import { Fragment, useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface menuOptions {
    label: string;
    childOptions: Array<menuChildOptions>
}

interface menuChildOptions {
    firstItem?: boolean,
    label: string,
    url?: string,
    isNew?: boolean
}


const initialHeaderMenuLeft: menuOptions[] = [
    {
        label: 'Cryptocurrencies',
        childOptions: [
            { label: 'By Market Cap' },
            { label: 'New Cryptocurrencies' },
            { firstItem: true, label: 'Categories', isNew: true },
            { label: 'Watchlists' },
            { label: 'Gainers & Losers' },
            { label: 'High Volume' },
            { firstItem: true, label: 'All Coins' },
            { label: 'Compare Coins', isNew: true },
            { label: 'Global Chart' }
        ]
    },
    {
        label: 'Exchanges',
        childOptions: [
            { label: 'Crypto Exchanges' },
            { label: 'Decentralized Exchanges' },
            { label: 'Derivatives' }
        ]
    },
    {
        label: 'NFT',
        childOptions: [
            { label: 'NFT Floor Price', isNew: true },
            { label: 'NFT Related Coins' },
        ]
    }, {
        label: 'Learn Crypto',
        childOptions: [
            { label: 'All Crypto Articles' },
            { label: 'Analysis' },
            { label: 'Guides' },
            { firstItem: true, label: 'Glossary' },
            { label: 'Methodology' },
            { firstItem: true, label: 'Videos' },
            { label: 'Postcast' },
            { label: 'Newsletter' },
            { label: 'Research Reports' }
        ]
    },
    {
        label: 'Products',
        childOptions: [
            { label: 'GeckoTerminal', isNew: true },
            { label: 'CoinGecko Premium' },
            { label: 'CoinGecko App' },
            { label: 'Crypto Portfolio' },
            { label: 'Crypto API' },
            { label: 'Crypto Widget' },
            { firstItem: true, label: 'GeckoCon 2022' },
            { label: 'CoinGecko Store' },
        ]
    }
]

const Header = ({ props }: any) => {
    const [headerMenuLeft, setHeaderMenuLeft] = useState(initialHeaderMenuLeft)


    const renderMenuList = () => {
        return headerMenuLeft.map((item, idx) => {
            return (
                <div className="menu-left-options" key={idx}>
                    <a href="/#" className="label">{item.label}</a>
                    <div className="menu-child-options flex flex-col justify-center items-center">
                        {item.childOptions.map((childItem, childIdx) => {
                            return (
                                childItem.firstItem ?
                                    <Fragment key={childIdx}><div className="slash"></div>
                                        <a className="child-option py-1" href="dasdas">
                                            {childItem.label} <span className="new-label">New</span>
                                        </a></Fragment> : <a className="child-option py-1" href="dasdas" key={childIdx}>{childItem.label}</a>
                            )
                        })}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="header-container-fluid">
            <div className="header-container mx-auto flex justify-between">
                <div className="header-left flex justify-between items-center">
                    <img
                        className="header-logo"
                        src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
                        alt="coin-gecko-logo"
                    />
                    {renderMenuList()}
                </div>
                <div className="header-right flex justify-between items-center">
                    <a className="anchor-option" href="##">Portfolio</a>
                    <a className="anchor-option" href="##">Login</a>
                    <a className="header-signup" href="##">Sign Up</a>
                    <div className="header-right-input">
                        <input type="text" placeholder="Search" />
                        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                    </div>
                    <div className="suggest-">
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { AccountItem } from '~/components/AccountItems';
import { CloseIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as TippyWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([1, 2]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    if (false) {
        setSearchResult();
    }

    const hideResult = () => setShowResult(false);

    return (
        <TippyHeadless
            interactive
            placement="bottom"
            visible={searchResult.length > 0 && showResult}
            onClickOutside={hideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <TippyWrapper>
                        <div className={cx('accounts')}>
                            <span>Accounts</span>
                        </div>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </TippyWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and video"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={(e) => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <CloseIcon />
                    </button>
                )}
                {/* <span className={cx('loading')}>
                    <LoadingIcon />
                </span> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;

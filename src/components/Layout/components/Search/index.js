import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { AccountItem } from '~/components/AccountItems';
import { CloseIcon, SearchIcon, LoadingIcon } from '~/components/Icons';
import { Wrapper as TippyWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

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
                        {searchResult.map((item) => (
                            <AccountItem data={item} key={item.id} />
                        ))}
                    </TippyWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and video"
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={(e) => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <CloseIcon />
                    </button>
                )}
                {loading && (
                    <span className={cx('loading')}>
                        <LoadingIcon />
                    </span>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;

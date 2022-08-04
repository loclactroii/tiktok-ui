import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { AccountItem } from '~/components/AccountItems';
import { CloseIcon, SearchIcon, LoadingIcon } from '~/components/Icons';
import { Wrapper as TippyWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useRef } from 'react';
import useDebounce from '~/hooks/useDebounce';
import * as apiServices from '~/services/searchSevice';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const data = await apiServices.search(debounced);
            setSearchResult(data);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const hideResult = () => setShowResult(false);

    const hanleChage = (e) => {
        const valueInput = e.target.value;
        if (!valueInput.startsWith(' ')) {
            setSearchValue(valueInput);
        }
    };

    return (
        <TippyHeadless
            appendTo={document.body}
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
                    placeholder="Search accounts and videos"
                    onChange={hanleChage}
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
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;

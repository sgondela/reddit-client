import React, { useState, /*useEffect*/ } from 'react';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import { Layout, Input } from 'antd';
import { FaRedditAlien } from 'react-icons/fa';
//
import './Header.css';
import { 
  setSearchTerm,
  // selectSearchTerm
} from '../../api/redditSlice';


const Header = () => {
  const UiHeader = Layout.Header;
  const { Search } = Input;
  const [searchTermLocal, setSearchTermLocal] = useState('');
  // const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  // useEffect(() => {
  //   setSearchTermLocal(searchTerm);
  // }, [dispatch, searchTerm]);

  const onSearchTermSubmit = (e) => {
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <UiHeader>
      <div className='logo'>
        <FaRedditAlien 
          className='logo-icon'
        />
        <h1>Reddux</h1>
      </div>
      <Search 
      placeholder="search posts" 
      allowClear 
      value={searchTermLocal}
      onChange={onSearchTermChange}
      onSearch={onSearchTermSubmit} 
      style={{ width: 200 }} 
      />
    </UiHeader>
  );
};

export default Header;
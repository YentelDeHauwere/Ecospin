import { default as React } from 'react';
import { FiSearch } from "react-icons/fi";
import { BsFilterRight } from "react-icons/bs";

import './Searchbar.scss'

const Searchbar = () => {
	
  return (
		<div className="searchbar">
			<div className="searchbar-search">
				<FiSearch className="searchbar-icon search"/>
				<input className="searchbar-input" placeholder='Search by adress' type='search'></input>
			</div>
			<BsFilterRight className="searchbar-icon filter" id="searchbar_filter"/>
		</div>
  );

};

export default Searchbar;
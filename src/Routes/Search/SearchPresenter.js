import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading }) => null;

SearchPresenter.propTypes = {
	movieResults: propTypes.array,
	tvResults: propTypes.array,
	searchTerm: propTypes.string,
	error: propTypes.string,
	loading: propTypes.bool.isRequired,
	handleSubmit: propTypes.func.isrequiredß
};
export default SearchPresenter;

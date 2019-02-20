import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';

const Container = styled.div`padding: 10px;`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{topRated &&
			topRated.length && (
				<Section title={'Top Rated Show'}>
					{topRated.map((show) => <span key={show.id}>{show.name}</span>)}
				</Section>
			)}
			{popular &&
			popular.length && (
				<Section title="Popular Show">{popular.map((show) => <span key={show.id}>{show.name}</span>)}</Section>
			)}
			{airingToday &&
			airingToday.length && (
				<Section title={'Airing Today Show'}>
					{airingToday.map((show) => <span key={show.id}>{show.name}</span>)}
				</Section>
			)}
			{error && <Message text={error} color={'#e74c3c'} />}
		</Container>
	);

TVPresenter.prototype = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default TVPresenter;

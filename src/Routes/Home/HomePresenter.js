import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';

const Container = styled.div``;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{nowPlaying &&
			nowPlaying.length > 0 && (
				<Section title={'Now Playing Movie'}>
					{nowPlaying.map((movie) => <span id={movie.id}>{movie.title}</span>)}
				</Section>
			)}
			{upcoming &&
			upcoming.length > 0 && (
				<Section title={'Upcoming Movies'}>
					{upcoming.map((movie) => <span id={movie.id}>{movie.title}</span>)}
				</Section>
			)}
			{popular &&
			popular.length > 0 && (
				<Section title={'Popular Movie'}>
					{popular.map((movie) => <span id={movie.id}>{movie.title}</span>)}
				</Section>
			)}
		</Container>
	);

HomePresenter.propTypes = {
	nowPlaying: propTypes.array,
	upcoming: propTypes.array,
	popular: propTypes.array,
	error: propTypes.string,
	loading: propTypes.bool.isRequired
};
export default HomePresenter;

import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Section from 'Components/Section';
import Poster from 'Components/Poster';

const Container = styled.div`padding: 20px;`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{nowPlaying &&
			nowPlaying.length > 0 && (
				<Section title={'Now Playing Movie'}>
					{nowPlaying.map((movie) => {
						const {
							id,
							poster_path: imageUrl,
							original_title: title,
							vote_average: rating,
							release_date: year
						} = movie;
						return (
							<Poster
								key={id}
								id={id}
								imageUrl={imageUrl}
								title={title}
								rating={rating}
								year={year && year.substring(0, 4)}
								isMovie={true}
							/>
						);
					})}
				</Section>
			)}
			{upcoming &&
			upcoming.length > 0 && (
				<Section title={'Upcoming Movies'}>
					{upcoming.map((movie) => {
						const {
							id,
							poster_path: imageUrl,
							original_title: title,
							vote_average: rating,
							release_date: year
						} = movie;
						return (
							<Poster
								key={id}
								id={id}
								imageUrl={imageUrl}
								title={title}
								rating={rating}
								year={year && year.substring(0, 4)}
								isMovie={true}
							/>
						);
					})}
				</Section>
			)}
			{popular &&
			popular.length > 0 && (
				<Section title={'Popular Movie'}>
					{popular.map((movie) => {
						const {
							id,
							poster_path: imageUrl,
							original_title: title,
							vote_average: rating,
							release_date: year
						} = movie;
						return (
							<Poster
								key={id}
								id={id}
								imageUrl={imageUrl}
								title={title}
								rating={rating}
								year={year && year.substring(0, 4)}
								isMovie={true}
							/>
						);
					})}
				</Section>
			)}
			{error && <Message text={error} color={'#e74c3c'} />}
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

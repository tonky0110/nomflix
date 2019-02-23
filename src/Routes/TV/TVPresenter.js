import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`padding: 20px;`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
	<>
		<Helmet>
			<title>TV Shows | Nomflix</title>
		</Helmet>
		{
			loading ? (
				<Loader />
			) : (
				<Container>
					{topRated &&
					topRated.length && (
						<Section title={'Top Rated Show'}>
							{topRated.map((show) => {
								const {
									id,
									original_name: title,
									poster_path: imageUrl,
									vote_average: rating,
									first_air_date: year,
									isMovie = false
								} = show;
								return (
									<Poster
										key={id}
										id={id}
										title={title}
										imageUrl={imageUrl}
										rating={rating}
										year={year && year.substring(0, 4)}
										isMovie={isMovie}
									/>
								);
							})}
						</Section>
					)}
					{popular &&
					popular.length && (
						<Section title="Popular Show">
							{popular.map((show) => {
								const {
									id,
									original_name: title,
									poster_path: imageUrl,
									vote_average: rating,
									first_air_date: year,
									isMovie = false
								} = show;
								return (
									<Poster
										key={id}
										id={id}
										title={title}
										imageUrl={imageUrl}
										rating={rating}
										year={year && year.substring(0, 4)}
										isMovie={isMovie}
									/>
								);
							})}
						</Section>
					)}
					{airingToday &&
					airingToday.length && (
						<Section title={'Airing Today Show'}>
							{airingToday.map((show) => {
								const {
									id,
									original_name: title,
									poster_path: imageUrl,
									vote_average: rating,
									first_air_date: year,
									isMovie = false
								} = show;
								return (
									<Poster
										key={id}
										id={id}
										title={title}
										imageUrl={imageUrl}
										rating={rating}
										year={year && year.substring(0, 4)}
										isMovie={isMovie}
									/>
								);
							})}
						</Section>
					)}
					{error && <Message text={error} color={'#e74c3c'} />}
				</Container>
			)
		}
	</>
);

TVPresenter.prototype = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default TVPresenter;

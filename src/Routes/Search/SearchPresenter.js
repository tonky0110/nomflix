import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`padding: 20px;`;

const Form = styled.form`
	margin-bottom: 50px;
	width: 100%;
`;

const Input = styled.input`
	all: unset;
	font-size: 28px;
	width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, handleSubmit, updateTerm, loading }) => (
	<>
		<Helmet>
			<title>Search | Nomflix</title>
		</Helmet>
		{
			<Container>
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder={'Search Movies or TV Shows...'}
					name="searchTerm"
					value={searchTerm}
					onChange={updateTerm}
				/>
			</Form>
			{loading ? (
				<Loader />
			) : <>
			{movieResults &&
				movieResults.length > 0 && (
					<Section title={'Movie Results'}>
						{movieResults.map((movie) => {
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
			{tvResults &&
				tvResults.length > 0 && (
					<Section title={'TV Show Results'}>
						{tvResults.map((show) => {
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
							)
						})}
					</Section>
				)}
			{error && <Message text={error} color={'#e74c3c'} />}
			{
				tvResults && 
				movieResults && 
				tvResults.length === 0 && 
				movieResults.length === 0 && 
				<Message text={'Nothing Found.'} color={'#95a5a6'} />
			}
			</>}
		</Container>
		}
	</>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired
};
export default SearchPresenter;

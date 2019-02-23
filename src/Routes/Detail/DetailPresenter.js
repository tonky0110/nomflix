import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';

const Container = styled.div`
	height: calc(100vh - 80px);
	width: 100%;
	position: relative;
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	height: 100%;
	border-radius: 5px;
`;

const Content = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 100%;
`;

const Cover = styled.div`
	width: 30%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 5px;
`;

const DetailPresenter = ({ result, error, loading }) => {
	console.log(result, error, loading);
	return loading ? (
		<Loader />
	) : (
		<Container>
			<Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
			<Content>
				<Cover
					bgImage={
						result.poster_path ? (
							`https://image.tmdb.org/t/p/original${result.poster_path}`
						) : (
							require('../../assets/noPosterSmall.png')
						)
					}
				/>
			</Content>
		</Container>
	);
};

DetailPresenter.propTypes = {
	result: propTypes.object,
	error: propTypes.string,
	loading: propTypes.bool.isRequired
};

export default DetailPresenter;

import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class SearchContainer extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: '',
		error: null,
		loading: false // default로 아무것도 로딩을 하지 않기 때문에 false로 설정.
	};
	render() {
		const { movieResults, tvResults, searchTerm, error, loading } = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				error={error}
				loading={loading}
			/>
		);
	}
}

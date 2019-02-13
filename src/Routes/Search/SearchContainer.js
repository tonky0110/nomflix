import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from 'api';

export default class SearchContainer extends React.Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: '',
		error: null,
		loading: false // default로 아무것도 로딩을 하지 않기 때문에 false로 설정.
	};

	componentDidMount = () => {
	}

	_handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== ""){
			this.searchByTerm();
		}
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({loading: true});
		try{
			const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
			const {data: {results: tvResults}} = await tvApi.search(searchTerm);
			this.setState({
				movieResults,
				tvResults
			});
		}catch{
			this.setState({ error: "Can't find result." });
		}finally{
			this.setState({ loading: false});
		}
	}
	render() {
		const { movieResults, tvResults, searchTerm, error, loading } = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				error={error}
				loading={loading}
				handleSubmit={this._handleSubmit}
			/>
		);
	}
}

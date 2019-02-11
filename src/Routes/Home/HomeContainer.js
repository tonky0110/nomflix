import React from 'react';
import HomePresenter from './HomePresenter';

export default class HomeContainer extends React.Component {
	// constructor
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		error: null,
		loading: false
	};
	// logic

	// render
	render() {
		const { nowPlaying, upcoming, popular, error, loading } = this.state;
		return (
			<HomePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				error={error}
				loading={loading}
			/>
		);
	}
}

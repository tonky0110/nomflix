import React from 'react';
import TVPresenter from './TVPresenter';

export default class TVContainer extends React.Component {
	state = {
		topRate: null,
		popular: null,
		airingToday: null,
		error: null,
		loading: false
	};

	render() {
		const { topRate, popular, airingToday, error, loading } = this.state;

		return (
			<TVPresenter
				topRate={topRate}
				popular={popular}
				airingToday={airingToday}
				error={error}
				loading={loading}
			/>
		);
	}
}

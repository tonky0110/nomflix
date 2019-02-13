import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class DetailContainer extends React.Component {
	state = {
		result: null,
		error: null,
		loading: false
	};
	componentDidMount = async () => {
		const { match: { params: { id } }, history: { push } } = this.props;
		const parsedId = parseInt(id);

		if (isNaN(parsedId)) {
			console.log('parsedId is not Number.');
			return push('/');
		}
	};
	render() {
		console.log('Detail - this.props: ', this.props);
		const { result, error, loading } = -this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}

import React from 'react';
import { moviesApi, tvApi } from 'api';
import DetailPresenter from './DetailPresenter';

export default class DetailContainer extends React.Component {
	// isMovie
	// this.state.isMovie
	// 의미의 차이 점. - this.isMovie: class에서 한번도 변경하지 않으면, 내부 변수로 남겨둘 수 있다.
	constructor(props) {
		super(props);
		const { location: { pathname } } = props;
		this.state = {
			result: null,
			error: null,
			loading: false,
			isMovie: pathname.includes('/movie/')
		};
	}
	componentDidMount = async () => {
		const { match: { params: { id } }, history: { push } } = this.props;
		const { isMovie } = this.state;
		const parsedId = parseInt(id);
		if (isNaN(parsedId)) {
			return push('/');
		}
		try{
			const { data: result } = isMovie ? await moviesApi.movieDetail(parsedId) : await tvApi.showDetail(parsedId);
			this.setState({result});
		}catch{
			this.setState({ error: "Cant't find anything."});
		}finally{
			this.setState({ loading: false});
		}
	};

	render() {
		const { result, error, loading } = -this.state;
		console.log(this.state);
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}

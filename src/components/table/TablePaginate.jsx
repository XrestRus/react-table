import React, {useEffect, useState} from 'react';
import {Context} from "../Context";

export function TablePaginate() {
	const [state, dispatch] = React.useContext(Context);
	const [links, setLinks] = useState([]);
	
	const createLinks = () => {
		const links = [];
		let count = diff() <= 0 ? 0 : diff();
				
		for (let i = 0; i <= count; i++) {
			links.push(i);
		}

		return links;
	}
	
	function diff() {
		return  Math.round(+(state.paginateState.count / state.paginateState.limit) - 1);
	}
	
	const transition = (link) => {
		dispatch({
			type: 'paginate',
			payload: {
				count: state.paginateState.count,
				next: link + 1,
				current: link,
				prev: link - 1,
			}
		})
	}
	
	useEffect(() => {
		setLinks(createLinks());
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.paginateState.count])
	
	return(
		<nav>
			<ul className="pagination justify-content-center">
				<li className={state.paginateState.current <= 0 ? 'page-item disabled' : 'page-item'}>
					<span
						className="page-link"
						onClick={_ => transition(state.paginateState.current - 1)}
					>
						Предыдущая
					</span>
				</li>
				
				{
					links.map((link, key) =>
						<li
							key={key}
							className={link === state.paginateState.current ? 'page-item active' : 'page-item'}
						>
							<span
								className="page-link"
								onClick={_ => transition(link)}
							>
								{link}
							</span>
						</li>
					)
				}
				
				<li className={state.paginateState.current >= diff() ? 'page-item disabled' : 'page-item'}>
					<span
						className="page-link"
						onClick={_ => transition(state.paginateState.current + 1)}
					>
						Следующая
					</span>
				</li>
			</ul>
		</nav>
	)
}


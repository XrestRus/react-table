import React, {useEffect} from 'react';
import {Context} from "../Context";
import {columnsTypes, filteredColumnsType} from "../../types/columnsTypes";
import {URLServer} from "../../config";

export function TableView() {
	const [state, dispatch] = React.useContext(Context);
	
	const orderBy = (item) => {
		dispatch({
			type: 'sort',
			payload: {
				column: item.name,
				inDesc: state.sortState.column === item.name
					? !state.sortState.inDesc
					: state.sortState.inDesc
			}
		})
	}
	
	useEffect(() => {
		updateData(state)
			.catch(i => console.log(i));
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.filterState, state.paginateState.current, state.sortState]);

	async function updateData(state) {
		const response = await fetch(`${URLServer}${state.filterState.sql}${state.sortState.sql}${state.paginateState.sql}`);
		const result = await response.json();

		dispatch({
			type: 'update',
			payload: {
				body: result.body,
				paginate: result.paginate
			}
		});
	}
	
	return (
		<div className='table-responsive'>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Дата</th>
						{
							filteredColumnsType(columnsTypes[0].name).map((item, key) =>
								<th
									className={state.sortState.column === item.name ? 'table-primary' : ''}
									key={key}
									scope="col"
									onClick={() => orderBy(item)}
								>
									{item.title}
								</th>
							)
						}
					</tr>
				</thead>
				<tbody>
					{state.dataState.map((i, key) =>
						<tr key={key}>
							<td>{i.date}</td>
							<td>{i.title}</td>
							<td>{i.count}</td>
							<td>{i.distance}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
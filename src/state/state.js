import {useReducer} from 'react';
import {LIMIT} from "../config";

const initState = {
	filterState: {
		column: null,
		condition: null,
		value: null,
		sql: '',
	},
	sortState: {
		column: '',
		inDesc: true,
		sql: '',
	},
	paginateState: {
		count: 30,
		next: 1,
		current: 0,
		prev: 0,
		limit: LIMIT,
		sql: `paginate=[0,${LIMIT}]&`,
	},
	dataState: []
}

function mainReducer(state, action) {
	switch (action.type) {
		case 'filter':
			let sql = '';
			if (action.payload.column !== 'reset' && action.payload.condition !== 'reset' && action.payload.value !== '') {
				sql = `filter=[${action.payload.column},${action.payload.condition},${action.payload.value}]&`;
			}
			
			return {
				...state,
				filterState: {
					column: action.payload.column,
					condition: action.payload.condition,
					value: action.payload.value,
					sql: sql,
				},
                paginateState: {
					count: 0,
					next: 1,
					current: 0,
					prev: 0,
					limit: LIMIT,
					sql: `paginate=[0,${LIMIT}]&`
				}
			}
		case 'sort':
			let mode = action.payload.inDesc ? 'desc' : 'asc';
			let sort = `sort=[${action.payload.column},${mode}]&`;
			
			return {
				...state,
				sortState: {
					column: action.payload.column,
					inDesc: action.payload.inDesc,
					sql: sort
				},
			}
		case 'paginate':
			let paginate = `paginate=[${action.payload.current},${LIMIT}]&`;
			
			return {
				...state,
				paginateState: {
					count: action.payload.count,
					next: action.payload.next,
					current: action.payload.current,
					prev: action.payload.prev,
					limit: LIMIT,
					sql: paginate
				}
			}
		case 'update':
			return {
				...state,
				dataState: action.payload.body,
				paginateState: {
					...state.paginateState,
					count: action.payload.paginate.count,
					limit: action.payload.paginate.limit,
				}
			}
		default: return initState;
	}
}

export function useMainState() {
	const [state, dispatch] = useReducer(mainReducer, initState);
	
	return [
		state,
		dispatch
	]
}


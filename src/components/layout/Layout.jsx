import React from 'react';
import {Context} from "../Context";
import {TableFilter} from "../table/TableFilter";
import {TableView} from "../table/TableView";
import {TablePaginate} from "../table/TablePaginate";
import {useMainState} from "../../state/state";

export function Layout() {
	const [state, dispatch] = useMainState();
	
	return(
		<Context.Provider
			value={
				[
					state,
					dispatch
				]
			}
		>
			<div className='container flex-column justify-content-center align-items-center'>
				
				<TableFilter />
				
				<div className="shadow p-2 bg-body rounded">
					<TableView/>
					<TablePaginate />
				</div>
			</div>
		</Context.Provider>
	)
}
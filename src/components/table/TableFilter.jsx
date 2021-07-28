import React, {useState, useEffect} from 'react';
import {conditionsTypes} from "../../types/conditionsTypes";
import {columnsTypes} from "../../types/columnsTypes";
import {Context} from "../Context";

export function TableFilter() {
	const [, dispatch] = React.useContext(Context);
	
	const [column, setColumn] = useState(columnsTypes[0]);
	const [condition, setCondition] = useState(conditionsTypes[0]);
	const [value, setValue] = useState('');
	const [sub, setSub] = useState(false);
	
	const selectColumn = (columnIndex) => {
		setColumn(columnsTypes[columnIndex]);
	}
	const selectCondition = (conditionIndex) => {
		setCondition(conditionsTypes[conditionIndex]);
	}
	const inputValue = (value) => {
		setValue(value);
	}
	
	const reset = (e) => {
		e?.preventDefault();

		selectColumn(0);
		selectCondition(0);
		inputValue('')
		
		setSub(!sub);
	}
	
	const submit = (e) => {
		e?.preventDefault();
		setSub(!sub);
	}
	
	useEffect(() => {
		dispatch({
			type: 'filter',
			payload: {
				column: column.name,
				condition: condition.name,
				value: value
			}
		})
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sub])
	
	return(
		<form
			className='shadow p-3 mb-3 bg-body rounded'
			onSubmit={e => submit(e)}
		>
			<div className="row">
				<div className="col">
					<label htmlFor="selectColumn" className="form-label">Выбор колонки</label>
					<select
						className="col form-select"
					    id='selectColumn'
						onChange={e => selectColumn(e.target.value)}
					>
						{
							columnsTypes.map((item, key) =>
								<option
									key={key}
									value={key}
								>
									{item.title}
								</option>
							)
						}
					</select>
				</div>
				<div className="col">
					<label htmlFor="selectCondition" className="form-label" >Выбор условия</label>
					<select
						className="col form-select"
						id='selectCondition'
						onChange={e => selectCondition(e.target.value)}
					>
						{
							conditionsTypes.map((item, key) =>
								<option
									key={key}
									value={key}
								>
									{item.title}
								</option>
							)
						}
					</select>
				</div>
				<div className="col">
					<label htmlFor="value" className="form-label">Ввод значения</label>
					<input
						className="form-control"
						id="value"
						value={value}
						onChange={e => inputValue(e.target.value)}
						required={true}
					/>
				</div>
				<div className="col d-grid gap-2">
					<button
						type="reset"
						className="col btn btn-danger"
						onClick={e => reset()}
					>
						Сброс
					</button>
					<button
						type="submit"
						className="col btn btn-primary"
					>
						Поиск
					</button>
				</div>
			</div>
		</form>
	)
}


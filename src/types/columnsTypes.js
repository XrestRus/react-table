export const columnsTypes = [
	{
		name: 'reset',
		title: 'Выберите колонку'
	},
	{
		name: 'title',
		title: 'Название'
	},
	{
		name: 'count',
		title: 'Количество'
	},
	{
		name: 'distance',
		title: 'Расстояние'
	}
]

export 	const filteredColumnsType = (discardValue) => columnsTypes.filter(i => i.name !== discardValue);

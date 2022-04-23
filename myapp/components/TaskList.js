import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import {useIsFocused} from '@react-navigation/native'

import { getTasks, deleteTask } from '../api'


const TaskList = () => {

	const [tasks, setTasks] = useState([])
	const [refresing, setRefresing] = useState(false)

	 const isFocused = useIsFocused()

	const loadTasks = async () => {
		const data = await getTasks();
		setTasks(data)
	}

	useEffect(() => {
		
		loadTasks();
	}, [isFocused])

	const renderItem = (({ item }) => {
		return <TaskItem task={item} handleDelete={handleDelete}/>
	})

	const onRefresh = React.useCallback(async () => {
		setRefresing(true)
		await loadTasks();
		setRefresing(false)
	})

	const handleDelete = async(id) => {
		await	deleteTask(id);
		await	loadTasks(id);
	}

	return (
		<FlatList
			style={{ width: '100%' }}
			data={tasks}
			keyExtractor={(item) => item.id + ''}
			renderItem={renderItem}
			refreshControl={
				<RefreshControl
					refreshing={refresing}
					color={["#78e08f"]}
					onRefresh={onRefresh}
					progressBackgroundColor="#0a3d62"
				/>
			}
		/>
	)
}

export default TaskList
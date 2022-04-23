import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api'

const TaskFormScreen = ({ navigation, route }) => {

	const [task, setTask] = useState({
		title: '',
		description: ''
	})

	const [editing, setEditing] = useState(false)



	const handleChange = (name, value) => setTask({ ...task, [name]: value })

	const handleSubmit = async () => {
		try {
			await saveTask(task);
			navigation.navigate('HomeScreen')
		} catch (error) {
			console.log(error);
		}
	}

	const handleUpdate = async () => {
		try {
			await updateTask(route.params.id, task);
			navigation.navigate('HomeScreen')
		} catch (error) {
			console.log(error);
		}
	}

	const getData = async () => {
		const data = await getTask(route.params.id)
		setTask({ title: data.title, description: data.description })
	}

	useEffect(() => {
		if (route.params && route.params.id) {
			navigation.setOptions({ headerTitle: 'Update a Task' })
			setEditing(true)
			getData();
		}
	}, [])


	return (
		<Layout>
			<TextInput
				style={styles.input}
				placeholder="Write a title"
				placeholderTextColor="#576574"
				onChangeText={(text) => handleChange('title', text)}
				value={task.title}
			/>
			<TextInput
				style={styles.input}
				placeholder="Write a description"
				placeholderTextColor="#576574"
				onChangeText={(text) => handleChange('description', text)}
				value={task.description}
			/>
			{editing ?
				<TouchableOpacity
					style={styles.buttonSave}
					onPress={handleUpdate}
				>
					<Text
						style={styles.textButton}
					>Update Task</Text>
				</TouchableOpacity>

				:

				<TouchableOpacity
					style={styles.buttonSave}
					onPress={handleSubmit}
				>
					<Text
						style={styles.textButton}
					>Save Task</Text>
				</TouchableOpacity>

			}



		</Layout>
	)
}

const styles = StyleSheet.create({
	input: {
		width: '90%',
		marginBottom: 7,
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#10ac84',
		height: 35,
		color: '#ffffff',
		textAlign: 'center',
		padding: 4,
		borderRadius: 5

	},
	buttonSave: {
		elevation: 8,
		backgroundColor: "#10ac84",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: '90%',
		marginBottom: 3
	},
	textButton: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
	}
})

export default TaskFormScreen
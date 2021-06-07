import React, {useState, useEffect} from 'react';
import Amplify, { DataStore, Predicates } from "aws-amplify";
import {Note} from './models';

const App = () => {
	const [content, updateContent] = useState('');

	const makeNewNote = async () => {
		try {
			await DataStore.save(
			new Note({
				content: "Potato"
			})
		);
			console.log("Post saved successfully!");
		} catch (error) {
			console.log("Error saving post", error);
		}
	}

	const seeNotes = async () => {
		try {
			const notes = await DataStore.query(Note);
			console.log("Posts retrieved successfully!")
			console.log(notes);
		} catch (error) {
			console.log("Error retrieving posts", error);
		}
	}

	return (
		<div>
			<button onClick={makeNewNote}>save</button>

			<button onClick={seeNotes}>see</button>
		</div>
	)
}

export default App;

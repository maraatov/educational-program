import React, { useRef, useState, useEffect } from "react";

export default props => {
	const inputRef = useRef();
	const context = React.createContext();
	const [library, setLibrary] = useState(
		JSON.parse(localStorage.getItem("library")).sort(() => Math.random() - 0.5) || [
			{ id: 0, word: "", translateWord: "" },
		]
	);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		return () => {
			localStorage.setItem("score", context.score);
		};
	});

	const checkKeyPress = event => {
		if (event.key === "Enter") {
			checkGame();
		}
	};

	const checkGame = () => {
		let libraryTransWord = library[index].translateWord;
		if (libraryTransWord.indexOf(" "))
			libraryTransWord = library[index].translateWord
				.replace(/^(the|a)/i, "")
				.trim()
				.toLowerCase();

		if (index !== library.length - 1 && inputRef.current.value === libraryTransWord) {
			setIndex(index + 1);

			props.setCorrectAnswer(props.correctAnswer + 1);
			context.setScore(context.score + 1);
			library[index].correct = library[index].correct + 1;
			localStorage.setItem("library", JSON.stringify(library));
		} else {
			props.setWrongAnswer(props.wrongAnswer + 1);
			library[index].error = library[index].error + 1;
			localStorage.setItem("library", JSON.stringify(library));
		}

		if (index === library.length - 1) {
			alert("Good job!");
		} else {
			setLibrary(JSON.parse(localStorage.getItem("library")).sort(() => Math.random() - 0.5));
		}
		inputRef.current.value = "";
	};

	return (
		<div className="mode-wrapper">
			<div className="mode-title-word">{library[index].word}</div>
			<p className="mode-title-word-description">Write translation fo this word</p>
			<div className="input-block">
				<input
					onKeyPress={checkKeyPress}
					ref={inputRef}
					id="inputId"
					type="text"
					placeholder="Enter word"
					className="customInput"
				/>
				<button className="btn-enter" onClick={checkGame}>
					Enter
				</button>
			</div>
		</div>
	);
};

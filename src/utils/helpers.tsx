export function getHighlightedText(text: string, highlight: string) {
	// This line takes the text to highlight and find the text we want to highlight and split the text based on the second parameter using regular expression
	const parts = text.split(new RegExp(`(${highlight})`, "gi"));
	// Here we are returning the text splitted and applying the desired style to the highlited text
	return (
		<span>
			{" "}
			{parts.map((part) => (
				<span
					key={part}
					style={
						part.toLowerCase() === highlight.toLowerCase()
							? { backgroundColor: "yellow" }
							: {}
					}
				>
					{part}
				</span>
			))}{" "}
		</span>
	);
}

import React from "react"
import axios from "axios"

class NewTab extends React.Component {
	state = {
		githubRepos: []
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/AntTargett/repos", {
				Accept: "application/vnd.github.inertia-preview+json"
			})
			.then(({ data }) => {
				this.setState({ githubRepos: data })
			})
	}

	render() {
		const { githubRepos } = this.state
		const test = "test"
		return (
			<div>
				{localStorage.getItem("test")}
				<button onClick={() => localStorage.setItem("test", test)}>Save</button>
				<button
					onClick={() =>
						this.setState(prevState => ({
							test: prevState.test + 1
						}))
					}
				/>
				{test}
				{JSON.stringify(githubRepos)}
			</div>
		)
	}
}
export default NewTab

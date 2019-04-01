import React, { useState, useEffect } from "react";
import axios from "axios";

type Data = {
	data: object[];
};

const NewTab = () => {
	const [githubRepos, setGithubRepos] = useState([{}]);
	useEffect(() => {
		axios
			.get("https://api.github.com/users/AntTargett/repos", {
				headers: {
					Accept: "application/vnd.github.inertia-preview+json"
				}
			})
			.then(({ data }: Data) => {
				setGithubRepos(data);
			});
	});
	return <div>{JSON.stringify(githubRepos)}</div>;
};
export default NewTab;

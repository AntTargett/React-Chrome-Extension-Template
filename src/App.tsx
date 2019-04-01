import React, { useEffect, useState } from "react";
import Popup from "./Popup/Popup";
import NewTab from "./NewTab/NewTab";
// /* eslint-disable no-undef */
// chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
//     const { url } = tabs[0]
//     console.log("Chrome", url)
// })

const App = () => {
	const [queryString, setQueryString] = useState("");
	useEffect(() => {
		console.log("test", window.location.search);
		setQueryString(window.location.search);
	});
	if (queryString === "?popup=false") {
		return <NewTab />;
	}
	return <Popup />;
};

export default App;

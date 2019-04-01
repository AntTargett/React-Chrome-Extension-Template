import React, { Component } from "react"
import "./App.css"
import Popup from "./Popup/Popup"
import NewTab from "./NewTab/NewTab"
// /* eslint-disable no-undef */
// chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
//     const { url } = tabs[0]
//     console.log("Chrome", url)
// })

class App extends Component {
	componentDidMount(props) {
		console.log(props)
		console.log("test", window.location.search)
	}

	render() {
		const queryString = window.location.search
		if (queryString === "?popup=false") {
			return <NewTab />
		}
		return <Popup />
	}
}

export default App

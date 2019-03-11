import Link from "next/link"
import React from "react"
import styled from "@emotion/styled"
import axios from "axios"

class NewTab extends React.Component {
    static async getInitialProps() {
        // fetch list of repositories
        const response = await axios.get("https://api.github.com/users/AntTargett/repos", {
            Accept: "application/vnd.github.inertia-preview+json"
        })
        const { data } = await response
        return { data }
    }

    render() {
        const { data } = this.props
        return (
            <div>
                <title>ImAnAnt Tab</title>
                <div>
                    Click
                    <Link href={{ pathname: "https://github.com/AntTargett" }}>here</Link>
                    {JSON.stringify(data)}{" "}
                </div>
                <Button> TestingEmotionSupport</Button>
            </div>
        )
    }
}

const Button = styled.button`
    background-color: blue;
    border-radius: 2px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`

export default NewTab

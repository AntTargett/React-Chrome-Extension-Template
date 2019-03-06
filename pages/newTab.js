import Link from "next/link";
import React from "react";
import styled from '@emotion/styled'

const NewTab = () => (
    <div>
      Click
      <Link href={{ pathname: "https://github.com/", query: { name: "Zeit" } }}>
        here
      </Link>
      <Button>Test Button</Button> 
    </div>
  );


  const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
export default NewTab;

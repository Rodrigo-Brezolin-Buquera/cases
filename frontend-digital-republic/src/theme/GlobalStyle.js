const GlobalStyle = () => {
    return(
        <style global jsx 
        >
            {
                `
                body {
                    padding: 0;
                    margin: 0;
                    font-family: sans-serif;
                    color: black;
                    background: white;
                }

                * {
                box-sizing: border-box;
                }

                input {
                    width: 4em;
                }

                button {
                    
                }

                `
            }
        </style>
    )
}

export default GlobalStyle
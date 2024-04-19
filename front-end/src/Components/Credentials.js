const Credentials = () => {
    return {
        ClientId: process.env.REACT_APP_ClientId,
        ClientSecret: process.env.REACT_APP_ClientSecret,
    }
}

export { Credentials };
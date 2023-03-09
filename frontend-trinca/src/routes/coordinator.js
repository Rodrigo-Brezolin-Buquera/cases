export const goToLoginPage = (navigate) => {
   navigate("/")
}

export const goToMainPage = (navigate) => {
    navigate("/main")
 }

 export const goToDetailsPage = (navigate, id) => {
    navigate(`/details/${id}`)
 }

 export const goBack = (navigate) => {
    navigate(-1)
 }
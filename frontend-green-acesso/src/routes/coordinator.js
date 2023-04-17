
export const goToMainPage = (navigate) => {
    navigate("/")
}

export const goToFavoritesPage = (navigate) => {
    navigate("/favorites")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}
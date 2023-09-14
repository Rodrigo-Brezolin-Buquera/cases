

export const pictureGenerator = () => {
    const randomNum = Math.floor(Math.random() * 99) + 1;
    return `https://randomuser.me/api/portraits/men/${randomNum}.jpg`;
}
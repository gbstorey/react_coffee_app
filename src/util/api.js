export const getProfiles = async () => {
    const res = await fetch("https://react-http-21c77-default-rtdb.firebaseio.com/coffee.json");
    if (!res.ok) {
        throw new Error ("Failed to fetch coffee profiles.");
    }

    return res.json();
}

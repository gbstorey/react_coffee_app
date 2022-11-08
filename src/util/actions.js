export async function action({ request }) {
    const data = await request.formData();
    const profile = {
        brand: data.get("brand"),
        name: data.get("name"),
        comments: data.get("comments"),
        brew_methods: data.get("brew_methods"),
        processing: data.get("processing"),
        acidity: data.get("acidity"),
        body: data.get("acidity"),
        roast: data.get("acidity"),
        imageLink: data.get("imageLink"),
    };
    const res = await fetch(
        "https://react-http-21c77-default-rtdb.firebaseio.com/coffee.json",
        { method: request.method, body: JSON.stringify(profile) }
    );
    if (!res.ok) {
        throw new Error("Failed to post new profile.");
    }
}
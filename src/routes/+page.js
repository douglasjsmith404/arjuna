/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch("/api/posts.json")
    const posts = await res.json()

    return { posts };
};
export const GET = async (request) => {
    try {
        const prompt = request.nextUrl.searchParams.get("prompt")
        const result = await fetch(`https://text.pollinations.ai/${prompt}`)
        const data = await result.text()

        return new Response(JSON.stringify({ message: data }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: "Server is not responsive..." }), { status: 500 })
    }
}
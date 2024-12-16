export const fetchMessage = async (prompt) => {
    try {

        const res = await fetch(`/api/chat?prompt=${encodeURIComponent(prompt)}`)

        if (!res.ok) {
            throw new Error("Failed at fetching the response")
        }

        return await res.json()
    } catch (error) {
        console.log(error)
    }
}


export const typingEffect = (message, onUpdate, speed = 50) => {
    let index = 0
    let str = ""

    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if (index < message.length) {
                str += message[index]
                onUpdate(str)
                index++
            } else {
                clearInterval(interval)
                resolve() // Resolve the promise once typing is complete
            }
        }, speed)
    })
}

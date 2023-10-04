

export default async function getData(URL) {
    const rawData = await fetch(URL)
    if (!rawData.ok) {
        throw new Error('Failed to fetch data')
    }
    return rawData.json()
    
}
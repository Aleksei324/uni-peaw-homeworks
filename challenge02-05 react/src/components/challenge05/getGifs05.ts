export const getGifts05 = async (category: string) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=yZUusNdvrMZSDEHhcsAEUSiFaXMAAiAw&q=${category}&limit=3&offset=0&rating=g&lang=en`
	const resp = await fetch(url)
	const {data} = await resp.json()
	const gifs = data.map( (img: any) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url
		}
	})
	return gifs
}

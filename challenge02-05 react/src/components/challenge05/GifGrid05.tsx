import { useEffect, useState } from "react"
import {getGifts05} from './getGifs05'
import {GifItem05} from './GifItem05'

interface gifGridProps {
	category: string
}

export const GifGrid05 = ({category}: gifGridProps) => {

	const [getListImg, setListImg] = useState([{id: '', title: '', url: ''}])

	/**
	 * Invoke getGifs function inside a new function in 
	 * GifGrid Component, keep in mind, it’s an async 
	 * function.
	 * use a useState hook to handle the list.
	 * Print in console, inside new function, list of Gifs you 
	 * got from getGifs function.
	 */
  const getImages = async() => {
		const images = await getGifts05(category)
		setListImg(images)
		console.log(getListImg)
	}

	/**
	 * Use useEffect hook to call new function created in 
	 * point 2.
	 */
	useEffect( () => {
		getImages();
	},[])

	/**
	 * Print title of each category into the web page, use a 
	 * div tag to group printed list.
	 * Add a className attribute to div tag to use some 
	 * styles.
	 */
	return (
		<>
			<h3>{category}</h3>
			<div>
				{
					getListImg.map( (image, key)=> {
						return <GifItem05 key={key} {...image}/>
					})
				}
			</div>
		</>
	)
}

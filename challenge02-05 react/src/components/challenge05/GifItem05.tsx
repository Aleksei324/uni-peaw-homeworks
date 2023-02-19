interface apiresulttypes {
	id: string,
	title: string,
	url: string
}

export const GifItem05 = ({title, url}: apiresulttypes) => {
	/**
	 * Create a new GifItem component to handle print of 
	 * each title.
	 * Send by props, each category data to GifItem
	 */
  return (
			<img src={url} alt={title} height='250'/>
  )
}

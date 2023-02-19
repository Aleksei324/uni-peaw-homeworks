interface gifgridprops {
  category: string
}

export const GifGrid04 = ({category}: gifgridprops) => {
  return (
    <>
      <h3>{category}</h3>
      <p>Descripción de la categoría: Hello World</p>
    </>
  )
}

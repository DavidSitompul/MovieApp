export const getAnime = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}

export const reproduce = (data, random, gap) => {
  // const random = Math.random()
  const first = Math.max(0, random - gap + 1)
  const last = first + gap
  const response = {
    data: data.slice(first, last),
  }
  console.log(random)
  console.log(first)
  console.log(last)

  return response
}

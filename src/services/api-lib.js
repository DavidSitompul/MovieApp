export const getAnime = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const anime = await response.json()
  return anime
}

export const reproduce = (data, gap) => {
  const first = gap
  const last = first <= 4 ? (gap = 12) : gap + 12
  const response = {
    data: data.slice(first, last),
  }
  return response
}

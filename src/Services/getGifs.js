const apiKey = "fzId3VBuREjibqafqpDWOufrEfE0rw3r";

export default function getGif({ keyword = "emoji" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=50&offset=0&rating=g&lang=es`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((reponse) => {
      const { data = [] } = reponse;
      if (Array.isArray(data)) {
        const gifs = data.map((image, i) => {
          const { id } = image;
          const value = i;
          const { url } = image.images.fixed_height_downsampled
          return { id, url, value }
        })
        return gifs;
      }
    }).catch(error => console.log(error))
}

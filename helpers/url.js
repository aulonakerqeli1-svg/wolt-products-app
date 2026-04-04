export function getCategory(url) {
    const query_string = url.split("?")[1]
    const category = query_string.split("=")[1]
    
    return category
}

export function getProductId(url) {
    const query_string = url.split("?")[1]
    const id = query_string.split("=")[1]
    
    return id
}

export function embedVideo(url) {
  const id = url.split("v=")[1]?.split("&")[0];

  return `<iframe width="100%" height="350"
        src="https://www.youtube.com/embed/${id}"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen>
  </iframe>
  `;
}
export const changeMetaTags = (meta) => {
  document.title = `${meta.title || ''} | Clusters - 可洛斯·創作者集群`
  //   document.querySelector('meta[name="description"]').setAttribute('content', meta.description)
  //   document.querySelector('meta[property="og:title"]').setAttribute('content', meta.title)
  //   document.querySelector('meta[property="og:description"]').setAttribute('content', meta.description)
  //   document.querySelector('meta[property="og:image"]').setAttribute('content', meta.image)
}

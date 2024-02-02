function filterURL(url: string | undefined) {
  if (!url) return "";
  return url.replace(/%20/g, " ").replace(":", "");
}

export default filterURL;

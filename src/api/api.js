export const fetchData = async (url) =>
  await fetch(url).then((res) => res.json());

export const fetchData = async (url) =>
  await fetch(url).then((res) => res.json());

export const fetchDataWithOption = async (url,option) =>
  await fetch(url,option).then((res) => res.json());

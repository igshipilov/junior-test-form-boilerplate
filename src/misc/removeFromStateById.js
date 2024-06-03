export function removeFromStateById(id, data, setData) {
  const newData = data.filter((img) => img.id !== id);

  setData(newData);
  localStorage.setItem('unsplashData', JSON.stringify(newData));
}

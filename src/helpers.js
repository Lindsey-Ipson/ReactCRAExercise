function choice (items) {
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove (items, item) {
  const idx = items.indexOf(item);
  if (idx !== -1) {
    items.splice(idx, 1);
    return items;
  }
  return undefined
}

export { choice, remove };
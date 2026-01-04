export function add(l) {
  var length = Number(l ?? 0);

  return String((length = length + 1));
}

export function subtract(l) {
  var length = Number(l ?? 0);

  if (length === 0) return String(length);

  return String((length = length - 1));
}

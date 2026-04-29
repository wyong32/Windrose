/**
 * Primary nav active state (replaces vue-router RouterLink default matching).
 * Home is exact; other entries match exact path or nested routes.
 * @param {string} itemTo
 * @param {string} currentPath - `route.path`
 */
export function isPrimaryNavActive(itemTo, currentPath) {
  if (itemTo === '/') return currentPath === '/'
  return currentPath === itemTo || currentPath.startsWith(`${itemTo}/`)
}

/** Legal / footer exact routes */
export function isExactPathActive(itemTo, currentPath) {
  return currentPath === itemTo
}

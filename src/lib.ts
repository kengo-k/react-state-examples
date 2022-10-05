export const getIdGenerator = () => {
  let id = 0
  return () => {
    id++
    return id
  }
}

export const wait = (sec: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, sec * 1000)
  })
}

export const helper = (deadline: string) => {
  const date = +new Date()
  const timeStamp = +new Date(deadline) - date
  return {
    days: Math.floor((timeStamp / (1000 * 60 * 60 * 24)) % 30)
      .toString()
      .padStart(2, '0'),
    hours: Math.floor((timeStamp / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0'),
    min: Math.floor((timeStamp / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0'),
    sec: Math.floor((timeStamp / 1000) % 60)
      .toString()
      .padStart(2, '0'),
  }
}

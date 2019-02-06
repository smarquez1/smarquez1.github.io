export function CopyText(query) {
  console.log(query)
  const copyText = document.querySelector(query)
  copyText.select()
  document.execCommand('copy')
}

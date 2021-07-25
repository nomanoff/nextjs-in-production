export default function handler(req, res) {
  // clears the preview cookie
  res.clearPreviewData()
  res.end('preview disabled')
}

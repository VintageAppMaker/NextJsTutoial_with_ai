export default function handler(req, res) {
  // 요청 헤더 반환
  res.status(200).json({
    requestHeaders: req.headers,
    responseHeaders: res.getHeaders()
  })
}

export default function handler(req, res) {
  const { name, pass } = req.query

  const found = users.find(u => u.name === name && u.pass === pass)

  if (found) {
    return res.json({ ok: true, login: true })
  }

  return res.json({ ok: false, login: false })
}

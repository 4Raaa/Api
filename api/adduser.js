let users = []

export default function handler(req, res) {
  const { name, pass } = req.query

  if (!name || !pass) {
    return res.status(400).json({ ok: false, msg: "missing data" })
  }

  users.push({ name, pass })

  return res.json({ ok: true, msg: "user added", users })
}

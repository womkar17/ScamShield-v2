module.exports = function handler(req, res) {
  res.status(200).json({ ok: true, pong: true, time: new Date().toISOString() });
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const runtime = 'experimental-edge';
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'James Hussey' })
}

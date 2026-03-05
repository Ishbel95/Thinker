export default function proxy(req, res) {
  res.status(200).json({ message: "This is a proxy endpoint." });
}
export const config = {
  matcher: ["/", "/thinker-entries"],
};

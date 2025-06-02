function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    res.status(200).json({
      message: "성공",
      email: email,
    });
  } else {
    res.status(200).json({
      message: "성공",
    });
  }
}

export default handler;

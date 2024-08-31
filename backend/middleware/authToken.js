import jwt from "jsonwebtoken";

async function authToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const token =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null;

    console.log("token", token);
    if (!token) {
      return res.status(200).json({
        message: "Please Login...!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      console.log(err);

      if (err) {
        return res.status(401).json({
          message: "Invalid or expired token",
          error: true,
          success: false,
        });
      }
      req.userId = decoded?._id;
      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
}

export default authToken;

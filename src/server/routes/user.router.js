const express = require('express'); 
const bcrypt = require("bcryptjs");
const router = express.Router();
const { generateAccessToken } = require('../services/jwt.service');
const User = require('../models/user.schema');
const { authMiddleware } = require('../middlewares/auth.middleware');
const ApiError = require('../utils/api.error');


router.post("/signup", async (req, res, next) => {
    try {

      const { name,  email, password, confirmPass } = req.body;
  
      
      if (!(email && password && name && confirmPass)) {
          throw new ApiError("Todos los campos son requeridos.",400);
      }
  
      if (password !== confirmPass) {
        throw new ApiError("Las contraseñas no coinciden.",400);
      }
  
      
      const userExist = await User.findOne({ email });
      console.log(userExist);
  
      if (userExist) {
        throw new ApiError("Este usuario ya existe.",400);
      }
  
      
      encryptedPassword = await bcrypt.hash(password, 10);
  
      
      const user = await User.create({
        name,
        email, 
        password: encryptedPassword,
      });
  
      res.status(200).json(user);
    } catch (err) {
      next(err);
      console.log(err);
    }
      
  });


router.post("/login", async (req, res, next) => {

    try {
      
      const { emailLogin, passwordLogin } = req.body;

      if (!(emailLogin && passwordLogin)) {
        res.status(400).json({message: "Todos los campos son requeridos" } );
      }

      const user = await User.findOne({ emailLogin });
  
      if (user && (await bcrypt.compare(passwordLogin, user.passwordLogin))) {
  
        const accessToken = generateAccessToken(user._id, user.emailLogin);
        res.status(200).json({accessToken});
      }else{
        res.status(404).json({message: "No se pudo encontrar este usuario."});
      }
      
    } catch (err) {
      next(err);
      console.log(err);
    }
});

router.get("/dashboard/users", authMiddleware, (req, res, next) => {

    User.find().exec()
    .then((docs) => {
        res.status(200).json(docs); 
    })
    .catch((error) => {
        console.log(error)
        res.status(404).json({message: "404 NOT FOUND"});
    })

});

module.exports = router;
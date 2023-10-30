const Router=require('express');
const router=new Router();
require('dotenv').config();
const test=process.env.USER_NAME;
const testPassword=process.env.USER_PASSWORD;


router.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
        //const user = await User.findOne({ email });
        console.log(test,typeof test)
        console.log(username,typeof username)
        if (username!== test) {
            console.log('hello')
            return res.status(404).json({ message: "User not found", login: false });
        }
        //const isPassValid = bcrypt.compareSync(password, user.password);
      else  if (username===test && password !==testPassword) {
            return res
                .status(400)
                .json({ message: "Invalid password", password: false });
        }
        console.log("success");
      /*  const token = jwt.sign(
            { id: user._id },
             process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );*/
        return res.json({
            success: true,

            user: {

                username: test,
                password: testPassword,
            },
        }).set("Access-Control-Allow-Origin", "*")
            .set("Access-Control-Allow-Headers", "Content-Type")
            ;
    } catch (e) {
        res.send({ message: "Server error" });
    }
});
router.get("/login", async (req, res) => {
    try {
        console.log(req.body);

        return res.json({
            success: true,
            text:"There was success"

        });
    } catch (e) {
        res.send({ message: "Server error" });
    }
});



module.exports = router;
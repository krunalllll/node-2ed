const auth = (req, res, next) => {
    // Ye middleware check karega ki user admin hai ya nahi
    // Isse pehle verify middleware run hona zaruri hai, taaki req.user set ho jaye
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).send("Access Denied: Aap admin nahi hain!");
    }
};

module.exports = auth;

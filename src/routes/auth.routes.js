import { Router } from 'express';

const router = Router();

router.get("/login", (req, res) => {
    res.render("login", {title: "Slicklearn - Inicia sesión"});
});

router.get("/register", (req, res) => {
    res.render("register", {title: "Slicklearn - Registrate"});
})

export default router;
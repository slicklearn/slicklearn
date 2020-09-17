import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.render("index", {title: "Slicklearn - Aprende sin limites"});
});

router.all("*", (req, res) => {
    res.render("404", {title: "Slicklearn - Error 404"});
})

export default router;
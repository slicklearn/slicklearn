import { Router } from 'express';

const router = Router();

router.get("/courses", (req, res) => {
    res.render("courses-list", {title: "Slicklearn - Lista de cursos"});
});

export default router;
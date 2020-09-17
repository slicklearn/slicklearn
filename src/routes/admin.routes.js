import { Router } from 'express';

const router = Router();

router.get("/admin", (req, res) => {
    res.render("admin", {title: "Slicklearn - Admin Panel"});
});

export default router;
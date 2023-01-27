// Libs
import { Request, Response } from "express";

// Classes
/**
 * A controller to the route /
 */
class IndexController {
    /**
     * Get /
     */
    public static get(req: Request, res: Response): void {
        res.status(200).render('index');
    }
}


// Code
export default IndexController;
import { Router } from "express";
import{list, create, getById, update, remove}from
'../controllers/projectController.js';
import { validateProject} from "../middlewares/validateProject.js";
import { authenticate } from "../middlewares/authenticate.js";
const router = Router();

// GET /api/v1/projects
router.get('/', list);

// GET /api/v1/projects/:id
router.get('/:id',  authenticate, getById);

// POST /api/v1/projects
router.post('/', authenticate, validateProject,  create);


// PATCH /api/v1/projects/:id
router.patch('/:id', validateProject, update);

// DELETE /api/v1/projects/:id
router.delete('/:id',  authenticate, remove);

export default router;
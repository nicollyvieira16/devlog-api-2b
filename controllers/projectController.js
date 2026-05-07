// controllers/projectController.js
import {
    listProjects, createProject, getProjectById, updateProject,
    deleteProject
} from '../services/projectService.js'

export function list(req, res, next) {
    try {
        const projects = listProjects();
        res.json({ projects, total: projects.length });
    } catch (err) { next(err); }
}

export function create(req, res, next) {
    try {
        const project = createProject(req.body);
        res.status(201).json(project);
    } catch (err) { next(err); }
}

export function getById(req, res, next) {
    try {
        const project = getProjectById(req.params.id);
        res.json(project);
    } catch (err) { next(err); }
}

export function update(req, res, next) {
    try {
        const project = updateProject(req.params.id, req.body);
        res.json(project);
    } catch (err) { next(err); }
}
export function remove(req, res, next) {
    try {
        deleteProject(req.params.id);
        res.sendStatus(204);
    } catch (err) { next(err); }
}
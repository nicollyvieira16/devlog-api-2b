let projects = [
    { id: 1001, title: "Projeto inicial", description: "Um projeto qualquer", createdAt: "" },
    { id: 1002, title: "Projeto X", description: "Um projeto sigiloso", createdAt: "" },
    { id: 1003, title: "Projeto Top", description: "Ninguém sabe o que é", createdAt: "" }
]; // "banco" em memória

export function listProjects() {
    return projects;
}

export function createProject({ title, description }) {
    const project = {
        id: parseInt(Date.now().toString()),
        title,
        description: description || '',
        createdAt: new Date().toISOString()
    };
    projects.push(project);
    return project;
}

export function getProjectById(id) {
    const project = projects.find(p => p.id === parseInt(id));
    if (!project) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err; // ← lança erro — controller vai capturar
    }
    return project;
}

export function updateProject(id, data) {
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err;
    }
    projects[index] = { ...projects[index], ...data, id: projects[index].id };
    return projects[index];
}

export function deleteProject(id) {
    const index = projects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
        const err = new Error('Projeto não encontrado');
        err.statusCode = 404;
        throw err;
    }
    projects.splice(index, 1);
}
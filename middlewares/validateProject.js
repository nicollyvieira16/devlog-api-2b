  
export function validateProject(req, res, next) { 
  const { title, description } = req.body; 
  
  const errors = []; 
  
  if (!title) { 
    errors.push('O campo title é obrigatório'); 
  } 
  if (title && title.trim().length < 3) { 
    errors.push('title deve ter ao menos 3 caracteres'); 
  } 
  if (description && description.length > 500) { 
    errors.push('description deve ter no máximo 500 caracteres'); 
  } 
  
  if (errors.length > 0) { 
    return res.status(400).json({ errors }); 
  } 
  
  next(); // tudo ok — passa para o handler 
}
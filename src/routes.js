import { Router } from "express";
import LoginController from "./controllers/login-controller";
import DeveloperController from './controllers/developer-projects-controller'
import SessionController from "./controllers/sessions-controller";
import auth from "./middlewares/auth";

const routes = new Router();
//criação de sessao
routes.put('sessions', SessionController.create);
//rotas de usuarios publicos
routes.get('/users', LoginController.index);
routes.get('/users/:id', LoginController.show);
routes.post('/users',LoginController.create);

//rotas projetos publicas
routes.get('/developer', DeveloperController.index);
routes.get('/developer/:id', DeveloperController.show);

routes.use(auth)


// login de usuariosprivado
routes.put('/users/:id', LoginController.update);
routes.delete('/users/:id', LoginController.destroy);

// projetos developer
routes.post('/developer', DeveloperController.create);
routes.put('/developer/:id', DeveloperController.update);
routes.delete('/developer/:id', DeveloperController.destroy);

export default routes
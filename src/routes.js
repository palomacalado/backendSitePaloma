import { Router } from "express";
import LoginController from "./controllers/login-controller";
import DeveloperController from './controllers/developer-projects-controller'
import SessionController from "./controllers/sessions-controller";
import ContentController from "./controllers/content-projects-controller";
import auth from "./middlewares/auth";


const routes = new Router();
//criação de sessao
routes.post('/sessions', SessionController.create);
//rotas de usuarios publicos
routes.get('/users', LoginController.index);
routes.get('/users/:id', LoginController.show);
routes.post('/users',LoginController.create);


//rotas projetos publicas
routes.get('/developer', DeveloperController.index);
routes.get('/developer/:id', DeveloperController.show);

routes.get('/content-creator', ContentController.index);
routes.get('/content-creator/:id', ContentController.show);

//  routes.use(auth)


// login de usuariosprivado
routes.patch('/users/:id', LoginController.update);
routes.delete('/users/:id', LoginController.destroy);

// projetos developer
routes.post('/developer', DeveloperController.create);
routes.put('/developer/:id', DeveloperController.update);
routes.delete('/developer/:id', DeveloperController.destroy);

// projetos content creator
routes.post('/content-creator', ContentController.create);
routes.put('/conrtent-creator/:id', ContentController.update);
routes.delete('/content-creator/:id', ContentController.destroy);

export default routes
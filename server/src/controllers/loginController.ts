import { Request, Response } from 'express';
import { get } from './decorators/routes';

@controller('/')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    if (req.session?.loggedIn === true) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
    }
  }
}

import {Server} from './server';
import { UserAccount } from './routes/signUp';
// import { FilterRoute} from './routes/filterRoute';

//instances of my routes
var server = new Server();
var userAccount = new UserAccount();

server.app.post('/signup', userAccount.signup);

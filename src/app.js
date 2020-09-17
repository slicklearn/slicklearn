// Libraries imports
import express from 'express';
import path from 'path';

// Routes imports
import adminRoutes from './routes/admin.routes';
import authRoutes from './routes/auth.routes';
import coursesRoutes from './routes/courses.route';
import defaultRoutes from './routes/defaut.routes';

// Objects
const app = express();

// Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.set('port', 1000);

// Middlewares
app.use(express.static(path.join(__dirname, "./public")));

// Routes
app.use(adminRoutes);
app.use(authRoutes);
app.use(coursesRoutes);
app.use(defaultRoutes);

// Export application
export default app;
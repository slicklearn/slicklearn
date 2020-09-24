// Libraries imports
import express from 'express';
import helmet from 'helmet';
import path from 'path';

// Routes imports
import adminRoutes from './routes/admin.routes';
import authRoutes from './routes/auth.routes';
import coursesRoutes from './routes/courses.route';
import profileRoutes from './routes/profile.routes';
import defaultRoutes from './routes/defaut.routes';

// Objects
const app = express();

// Settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.set('port', 1000);

// Middlewares
app.use(express.static(path.join(__dirname, "./public")));
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["cdn.slicklearn.xyz", "'self'"],
            scriptSrc: ["www.googletagmanager.com", "code.jquery.com", "static.cloudflareinsights.com", "cdn.slicklearn.xyz", "stackpath.bootstrapcdn.com", "ajax.cloudflare.com", "www.google.com", "www.gstatic.com", "'unsafe-inline'", "'self'"],
            styleSrc: ["'self'", "fonts.googleapis.com","cdn.slicklearn.xyz", "use.fontawesome.com", "stackpath.bootstrapcdn.com", "unpkg.com", "'unsafe-inline'"],
            fontSrc: ["'self'", "fonts.gstatic.com", "use.fontawesome.com"],
            frameSrc: ["'self'", "www.google.com"],
            connectSrc: ["'self'", "api.slicklearn.xyz"]
        }
    }
}));

// Routes
app.use(adminRoutes);
app.use(authRoutes);
app.use(coursesRoutes);
app.use(profileRoutes);
app.use(defaultRoutes);

// Export application
export default app;
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Root } from './Root';
import './index.css';

const container = document.getElementById('root')!;
const app = <StrictMode><Root /></StrictMode>;
// The production HTML is prerendered (prerender.mjs); in `npm run dev` it is empty.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);

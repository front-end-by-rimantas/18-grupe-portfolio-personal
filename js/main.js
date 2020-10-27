// header import
import { Header } from './components/header.js';
// hero import
// about us import (presonal details)
import { renderPersonalDetails } from './components/renderPersonalDetails.js';
// our services import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
// achievements import
import { achievementsData } from './data/achievements.js';
import { renderAchievements } from './components/achievements/renderAchievements.js';
// Featured projects import
import { photosData } from './data/photos.js';
import { renderGallery } from './components/gallery/renderGallery.js';
// Feedback about me import
// Choose your plan import
// blog import
// Sponsors logo import
// footer import
import { verifyEmail } from './email.js'
// header logic
new Header({ selector: '#main_header' });
// hero logic
// about us logic(personal details)
renderPersonalDetails();
// our services logic
renderServices(servicesData);
// achievements logic
renderAchievements(achievementsData);
// Featured projects logic
renderGallery(photosData);
// Feedback about me logic
// Choose your plan logic
// blog logic
// Sponsors logo logic
// footer logic
verifyEmail();


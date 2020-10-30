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
import { RenderAchievements } from './components/achievements/renderAchievements.js';
// Featured projects import
import { photosData } from './data/photos.js';
import { RenderGallery } from './components/gallery/renderGallery.js';
// Testimonial import
import { RenderTetimonial } from './components/testimonial/RenderTestimonial.js';
import { testimonialData } from './data/testimonial.js';
// Choose your plan import
import { plans } from './data/plans.js';
import { renderPlans } from './components/renderPlans.js';
// blog import
import { blogMain } from './components/blog/blogMain.js';
// Sponsors logo import
import { sponsorsData } from './data/sponsorsData.js';
import { Sponsors } from './components/sponsors/Sponsors.js';
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
new RenderAchievements(achievementsData);
// Featured projects logic
new RenderGallery(photosData);
// Testimonial logic
new RenderTetimonial(testimonialData);
// Choose your plan logic
renderPlans(plans);
// blog logic
blogMain();
// Sponsors logo logic
new Sponsors(sponsorsData);
// footer logic
verifyEmail();


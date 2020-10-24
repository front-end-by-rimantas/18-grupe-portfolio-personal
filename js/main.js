// header import
import { Header } from './components/header.js';
// hero import
// about us import (presonal details)
import { renderPersonalDetails } from './components/renderPersonalDetails.js';
// our services import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
// achievements import
import { formatAchievement } from './components/achievements/formatAchievement.js';
import { achievementsData } from './data/achievements.js';
import { renderAchievements } from './components/achievements/renderAchievements.js';
// Featured projects import
import { photosData } from './data/photos.js';
import { renderGallery } from './components/gallery/renderGallery.js';
// Feedback about me import
// Choose your plan import
// blog import
import { isValidCapitalLetter } from './components/blogs/isValidCapitalLetter.js';
import { isValidBlogsHeader } from './components/blogs/isValidBlogsHeader.js';
import { blogsHeaderData } from '../js/data/blogsHeaderData.js';
import { blogsContentData } from './data/blogsContentData.js';
import { generateBlogsHeader } from './components/blogs/generateBlogsHeader.js';
import { renderBlogs } from './components/blogs/renderBlogs.js';
// Sponsors logo import
// footer import

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
generateBlogsHeader(blogsHeaderData);
renderBlogs(blogsContentData);
isValidBlogsHeader(blogsHeaderData);
isValidCapitalLetter(blogsHeaderData);
// Sponsors logo logic
// footer logic

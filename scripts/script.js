const publicationCard = document.querySelector('.publication-card');
const socialIconBtn = document.querySelector('.publication-card__icon-social');
const socialIconPopup = document.querySelector('.publication-card__footer-social-options');
const publicationCardContent = document.querySelector('.publication-card__content');
const windowInnerWidth = window.innerWidth;
const WIDE_SCREEN = 1440;
let isSocialPopupVisible = false;

if (windowInnerWidth >= WIDE_SCREEN) {
  publicationCard.addEventListener('mouseenter', () => {
    publicationCardContent.classList.add('publication-card__content_up');
  });
}

publicationCard.addEventListener('mouseleave', () => {
  publicationCardContent.classList.remove('publication-card__content_up')
  isSocialPopupVisible = false;
  socialIconPopup.classList.remove('publication-card__footer-social-options_visible');
});

socialIconBtn.addEventListener('click', () => {
  socialIconPopup.classList.toggle('publication-card__footer-social-options_visible');
  isSocialPopupVisible = !isSocialPopupVisible;
});

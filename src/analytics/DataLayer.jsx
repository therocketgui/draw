import { CardDrawClick, DrawFormSubmission } from './Events';

function dataLayer(name) {
  let event = [];
  if (name === 'CardDraw_click') {
    event = CardDrawClick;
  } else if (name === 'FormDraw_submit') {
    event = DrawFormSubmission;
  } else {
    event = {};
  }

  (window).dataLayer = (window).dataLayer || [];
  (window).dataLayer.push({
    event: 'main',
    eventCategory: event.eventCategory,
    eventAction: event.eventAction,
    eventLabel: event.eventLabel
  });
}

export default dataLayer;

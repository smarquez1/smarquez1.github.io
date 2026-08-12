import { Controller } from '@hotwired/stimulus';

const duration = 200;
const easing = 'ease-out';

export default class extends Controller {
  connect() {
    this.summary = this.element.querySelector(':scope > summary');
    this.content = this.summary?.nextElementSibling;
    this.motionQuery = globalThis.matchMedia('(prefers-reduced-motion: reduce)');
    this.handleClick = this.handleClick.bind(this);
    this.handleMotionChange = this.handleMotionChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    if (!this.summary || !this.content) return;

    this.open = this.element.open;
    this.content.dataset.disclosureContent = '';
    this.summary.addEventListener('click', this.handleClick);
    this.element.addEventListener('toggle', this.handleToggle);
    this.motionQuery.addEventListener('change', this.handleMotionChange);
  }

  disconnect() {
    this.summary?.removeEventListener('click', this.handleClick);
    this.element.removeEventListener('toggle', this.handleToggle);
    this.motionQuery?.removeEventListener('change', this.handleMotionChange);
    this.animation?.cancel();
    this.ghost?.remove();
    this.cleanup();
  }

  handleClick(event) {
    event.preventDefault();
    this.setOpen(!this.open);
  }

  handleMotionChange() {
    if (!this.motionQuery.matches) return;

    this.animation?.finish();
  }

  handleToggle() {
    this.open = this.element.open;
  }

  setOpen(open) {
    const wasOpen = this.open;
    const visualContent = this.ghost || this.content;
    const currentHeight = this.ghost || wasOpen ? visualContent.getBoundingClientRect().height : 0;
    const currentOpacity =
      this.ghost || wasOpen
        ? Number.parseFloat(globalThis.getComputedStyle(visualContent).opacity)
        : 0;

    this.animation?.cancel();
    this.ghost?.remove();
    this.ghost = undefined;
    const animatedContent = open ? this.content : this.createGhost();
    this.open = open;
    this.element.open = open;

    if (this.motionQuery.matches) {
      this.ghost?.remove();
      this.ghost = undefined;
      this.cleanup();
      return;
    }

    const expandedHeight = open ? this.content.scrollHeight : currentHeight;
    const startHeight = currentHeight || (open ? 0 : expandedHeight);
    const endHeight = open ? expandedHeight : 0;
    const startOpacity =
      currentHeight === 0 && open
        ? 0
        : Number.isNaN(currentOpacity)
          ? open
            ? 0
            : 1
          : currentOpacity;

    Object.assign(animatedContent.style, {
      height: `${startHeight}px`,
      opacity: `${startOpacity}`,
      overflow: 'hidden',
    });
    if (open) animatedContent.style.display = 'block';
    animatedContent.getBoundingClientRect();
    this.animation = animatedContent.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity },
        { height: `${endHeight}px`, opacity: open ? 1 : 0 },
      ],
      { duration, easing },
    );

    const animation = this.animation;
    animation.addEventListener('finish', () => {
      if (this.animation !== animation) return;

      this.animation = undefined;
      this.ghost?.remove();
      this.ghost = undefined;
      this.cleanup();
    });
  }

  createGhost() {
    const bounds = this.content.getBoundingClientRect();
    const ghost = this.content.cloneNode(true);

    ghost.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
    ghost.removeAttribute('id');
    ghost.dataset.disclosureGhost = '';
    ghost.setAttribute('aria-hidden', 'true');
    ghost.inert = true;
    Object.assign(ghost.style, {
      height: `${bounds.height}px`,
      overflow: 'hidden',
      pointerEvents: 'none',
    });
    this.element.after(ghost);
    this.ghost = ghost;

    return ghost;
  }

  cleanup() {
    if (!this.content) return;

    this.content.style.removeProperty('display');
    this.content.style.removeProperty('height');
    this.content.style.removeProperty('opacity');
    this.content.style.removeProperty('overflow');
  }
}

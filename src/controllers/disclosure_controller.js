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

    if (!this.summary || !this.content) return;

    this.content.dataset.disclosureContent = '';
    this.summary.addEventListener('click', this.handleClick);
    this.motionQuery.addEventListener('change', this.handleMotionChange);
  }

  disconnect() {
    this.summary?.removeEventListener('click', this.handleClick);
    this.motionQuery?.removeEventListener('change', this.handleMotionChange);
    this.animation?.cancel();
    this.ghost?.remove();
    this.cleanup();
  }

  handleClick(event) {
    event.preventDefault();
    this.setOpen(!this.element.open);
  }

  handleMotionChange() {
    if (!this.motionQuery.matches) return;

    this.animation?.finish();
  }

  setOpen(open) {
    const visualContent = this.ghost || this.content;
    const currentHeight = visualContent.getBoundingClientRect().height;
    const currentOpacity = Number.parseFloat(globalThis.getComputedStyle(visualContent).opacity);

    this.animation?.cancel();
    this.ghost?.remove();
    this.ghost = undefined;
    const animatedContent = open ? this.content : this.createGhost();
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
    const startOpacity = Number.isNaN(currentOpacity) ? (open ? 0 : 1) : currentOpacity;

    if (open) this.content.style.display = 'block';
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
      background: globalThis.getComputedStyle(this.content).background,
      height: `${bounds.height}px`,
      left: `${bounds.left}px`,
      margin: '0',
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'fixed',
      top: `${bounds.top}px`,
      width: `${bounds.width}px`,
      zIndex: '10',
    });
    this.element.ownerDocument.body.append(ghost);
    this.ghost = ghost;

    return ghost;
  }

  cleanup() {
    if (!this.content) return;

    this.content.style.removeProperty('display');
  }
}

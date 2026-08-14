import { Controller } from '@hotwired/stimulus';

const duration = 200;
const easing = 'ease-out';

export default class extends Controller {
  static targets = ['content'];

  // Prepare the reduced-motion listener and mark the content enhanced.
  connect() {
    this.motionQuery = globalThis.matchMedia('(prefers-reduced-motion: reduce)');
    this.handleMotionChange = this.handleMotionChange.bind(this);

    this.contentTarget.dataset.animatedDetailsContent = '';
    this.motionQuery.addEventListener('change', this.handleMotionChange);
  }

  // Remove listeners and temporary animation nodes when Stimulus disconnects.
  disconnect() {
    this.motionQuery?.removeEventListener('change', this.handleMotionChange);
    this.animation?.cancel();
    this.ghost?.remove();
    this.cleanup();
  }

  // Keep native summary semantics while routing the visual transition through Stimulus.
  handleClick(event) {
    event.preventDefault();
    this.setOpen(!this.element.open);
  }

  // Finish the current transition immediately when reduced motion is enabled.
  handleMotionChange() {
    if (!this.motionQuery.matches) return;

    this.animation?.finish();
  }

  // Read the current state, update native disclosure state, and start the next transition.
  setOpen(open) {
    const visualState = this.readVisualState();
    this.resetAnimation();
    this.element.open = open;

    if (this.motionQuery.matches) {
      this.cleanup();
      return;
    }

    const animation = this.buildAnimation(open, visualState);
    this.animateContent(animation);
  }

  // Measure the visible content so interrupted transitions can reverse smoothly.
  readVisualState() {
    const visualContent = this.ghost || this.contentTarget;
    const hasVisibleContent = Boolean(this.ghost || this.element.open);

    if (!hasVisibleContent) {
      return { height: 0, opacity: 0 };
    }

    return {
      height: visualContent.getBoundingClientRect().height,
      opacity: Number.parseFloat(globalThis.getComputedStyle(visualContent).opacity),
    };
  }

  // Resolve the animated node and its height/opacity keyframes for the requested state.
  buildAnimation(open, visualState) {
    const content = open ? this.contentTarget : this.createGhost();
    const expandedHeight = open ? this.contentTarget.scrollHeight : visualState.height;

    return {
      content,
      startHeight: visualState.height || (open ? 0 : expandedHeight),
      endHeight: open ? expandedHeight : 0,
      startOpacity: this.getStartOpacity(visualState, open),
      open,
    };
  }

  // Cancel the previous animation and remove its temporary closing clone.
  resetAnimation() {
    this.animation?.cancel();
    this.ghost?.remove();
    this.ghost = undefined;
  }

  // Choose a safe starting opacity when computed styles do not expose one.
  getStartOpacity({ height, opacity }, open) {
    if (height === 0 && open) {
      return 0;
    }

    if (!Number.isNaN(opacity)) {
      return opacity;
    }

    return open ? 0 : 1;
  }

  // Apply transition styles, force layout, and register the animation completion callback.
  animateContent({ content, startHeight, endHeight, startOpacity, open }) {
    Object.assign(content.style, {
      height: `${startHeight}px`,
      opacity: `${startOpacity}`,
      overflow: 'hidden',
    });
    if (open) content.style.display = 'block';
    content.getBoundingClientRect();

    const animation = content.animate(
      [
        { height: `${startHeight}px`, opacity: startOpacity },
        { height: `${endHeight}px`, opacity: open ? 1 : 0 },
      ],
      { duration, easing },
    );
    this.animation = animation;
    animation.addEventListener('finish', () => this.finishAnimation(animation));
  }

  // Ignore stale animation events and restore the content to its stylesheet-defined state.
  finishAnimation(animation) {
    if (this.animation !== animation) return;

    this.animation = undefined;
    this.ghost?.remove();
    this.ghost = undefined;
    this.cleanup();
  }

  // Clone closing content because native details rendering hides it before the close animation ends.
  createGhost() {
    const bounds = this.contentTarget.getBoundingClientRect();
    const ghost = this.contentTarget.cloneNode(true);

    for (const descendant of ghost.querySelectorAll('[id]')) {
      descendant.removeAttribute('id');
    }
    ghost.removeAttribute('id');
    ghost.dataset.animatedDetailsGhost = '';
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

  // Remove inline transition styles after the final state has been reached.
  cleanup() {
    this.contentTarget.style.removeProperty('display');
    this.contentTarget.style.removeProperty('height');
    this.contentTarget.style.removeProperty('opacity');
    this.contentTarget.style.removeProperty('overflow');
  }
}

import { describe, it, expect } from 'vitest';

describe('useAnimationState', () => {
  it('animates state after delay', async () => {
    const state = reactive<AnimationStateData>({ opacity: 0, scale: 0 });
    const { animate } = useAnimationState(state, { opacity: 1, scale: 1 }, 10);
    animate();
    await new Promise((r) => setTimeout(r, 20));
    expect(state.opacity).toBe(1);
    expect(state.scale).toBe(1);
  });

  it('does not mutate properties not in endState', async () => {
    const state = reactive<AnimationStateData>({
      opacity: 0,
      scale: 0,
      translateX: 5,
      translateY: 0,
    });
    const endState = { opacity: 1, scale: 1, translateX: 10, translateY: 10 };
    const { animate } = useAnimationState(state, endState, 10);
    animate();
    await new Promise((r) => setTimeout(r, 20));
    for (const property in endState) {
      expect(state[property as AnimationStateKeys]).toBe(
        endState[property as AnimationStateKeys]
      );
    }
  });
});

import type { Reactive } from 'vue';

export interface AnimationStateData {
  scale?: number;
  opacity?: number;
  translateX?: number;
  translateY?: number;
}

export type AnimationStateKeys = keyof AnimationStateData;

export const useAnimationState = <T extends AnimationStateData>(
  animationState: Reactive<T>,
  endState: T,
  delay: number = 0
) => {
  const animate = () => {
    setTimeout(() => {
      for (const property in endState) {
        animationState[property as AnimationStateKeys] =
          endState[property as AnimationStateKeys];
      }
    }, delay);
  };

  return {
    animationState,
    animate,
  };
};

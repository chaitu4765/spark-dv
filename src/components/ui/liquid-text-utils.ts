import {useEffect, useState, useSyncExternalStore, type RefObject} from 'react';

// The supplied component references helpers that were not included in its snippet.
// Keep their implementations local, with bounded resolution and visible-only work.
export type BjorkTone = 'light' | 'dark';
export const BJORK_PALETTE = {light: {text: '#122f3c'}, dark: {text: '#f6f5f1'}};
export function useBjorkTone(tone?: BjorkTone): BjorkTone { return tone ?? 'light'; }
const reducedQuery = '(prefers-reduced-motion: reduce)';
const subscribeReduced = (notify: () => void) => {
  const query = matchMedia(reducedQuery);
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
export function useLiveReducedMotion() {
  return useSyncExternalStore(subscribeReduced, () => matchMedia(reducedQuery).matches, () => true);
}
export function defaultMaxDpr() { return matchMedia('(pointer: coarse)').matches ? 1.5 : 2; }
export function sizeCanvas(canvas: HTMLCanvasElement, width: number, height: number, maxDpr: number) {
  const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  return dpr;
}
export function useElementSize(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return {width};
}
export function useVisibleLoop(ref: RefObject<HTMLElement>, frame: (dt: number) => void, {enabled}: {enabled: boolean}) {
  useEffect(() => {
    if (!enabled || !ref.current) return;
    let visible = false, raf = 0, previous = 0;
    const tick = (now: number) => {
      frame(previous ? Math.min((now - previous) / 1000, 1 / 30) : 1 / 60);
      previous = now;
      raf = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(raf);
      previous = 0;
      if (visible && !document.hidden) raf = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {visible = entry.isIntersecting; sync();});
    observer.observe(ref.current);
    document.addEventListener('visibilitychange', sync);
    return () => {cancelAnimationFrame(raf); observer.disconnect(); document.removeEventListener('visibilitychange', sync);};
  }, [ref, frame, enabled]);
}

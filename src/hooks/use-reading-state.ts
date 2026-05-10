import { useState, useEffect, useCallback } from "react";
import type { ReadingState } from "@/content/types";

const STORAGE_KEY = "oba-reading-state";

const EMPTY_STATE: ReadingState = {
  completedSections: [],
  discoveredScraps: [],
  notesUnlocked: [],
};

function loadState(): ReadingState {
  try {
    if (typeof window === "undefined") return EMPTY_STATE;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...EMPTY_STATE, ...JSON.parse(raw) };
  } catch {
    // Ignore parse errors — start fresh
  }
  return EMPTY_STATE;
}

/**
 * Persistent reading-state hook. Tracks completed sections, discovered scraps,
 * and unlocked notes across sessions via localStorage.
 *
 * Section keys use the format "slug#section-id", enabling deep-linking and
 * cross-story unlock mechanics. Scraps and notes use the same namespaced format.
 *
 * Usage:
 *   const { state, markSectionComplete, discoverScrap, unlockNote, isSectionComplete } =
 *     useReadingState();
 */
export function useReadingState() {
  const [state, setState] = useState<ReadingState>(loadState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage quota exceeded or unavailable — silently ignore
    }
  }, [state]);

  const markSectionComplete = useCallback((storySlug: string, sectionId: string) => {
    const key = `${storySlug}#${sectionId}`;
    setState((prev) =>
      prev.completedSections.includes(key)
        ? prev
        : { ...prev, completedSections: [...prev.completedSections, key] },
    );
  }, []);

  const discoverScrap = useCallback((storySlug: string, scrapLabel: string) => {
    const key = `${storySlug}#${scrapLabel}`;
    setState((prev) =>
      prev.discoveredScraps.includes(key)
        ? prev
        : { ...prev, discoveredScraps: [...prev.discoveredScraps, key] },
    );
  }, []);

  const unlockNote = useCallback((noteId: string) => {
    setState((prev) =>
      prev.notesUnlocked.includes(noteId)
        ? prev
        : { ...prev, notesUnlocked: [...prev.notesUnlocked, noteId] },
    );
  }, []);

  const isSectionComplete = useCallback(
    (storySlug: string, sectionId: string) =>
      state.completedSections.includes(`${storySlug}#${sectionId}`),
    [state.completedSections],
  );

  const isScrapDiscovered = useCallback(
    (storySlug: string, scrapLabel: string) =>
      state.discoveredScraps.includes(`${storySlug}#${scrapLabel}`),
    [state.discoveredScraps],
  );

  const reset = useCallback(() => setState(EMPTY_STATE), []);

  return {
    state,
    markSectionComplete,
    discoverScrap,
    unlockNote,
    isSectionComplete,
    isScrapDiscovered,
    reset,
  };
}

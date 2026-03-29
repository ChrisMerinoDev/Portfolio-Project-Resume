"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

export function useOnScreen<T extends HTMLElement>(
	threshold = 0.15,
): [RefObject<T | null>, boolean] {
	const ref = useRef<T | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold },
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return [ref, visible];
}

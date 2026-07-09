"use client";

import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

/* Google Maps tiles cost ~1MB per load — only fetch them when asked. */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="map-shell h-full">
      {loaded ? (
        <iframe
          title="Google Maps – Anand Pipe Agencies, Erode"
          src="https://www.google.com/maps?q=11.349772,77.723527&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[340px]"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 p-8 text-center">
          <MapPinIcon className="h-8 w-8 text-[var(--water)]" />
          <p className="basin-muted max-w-[16rem] text-sm leading-6">
            143 APT Road, Near CD Building, Erode
          </p>
          <button onClick={() => setLoaded(true)} className="btn btn-light">
            Load map
          </button>
        </div>
      )}
    </div>
  );
}

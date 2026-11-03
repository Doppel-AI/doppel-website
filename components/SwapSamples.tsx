import { SAMPLES } from "@/lib/samples";

/** One line, with each {value} as a chip. */
function Line({ text, chip }: { text: string; chip: "chip-real" | "chip-double" }) {
  return (
    <p>
      {text
        .split(/(\{[^}]*\})/)
        .filter(Boolean)
        .map((part, i) =>
          part.startsWith("{") ? (
            <mark key={i} className={`chip ${chip}`}>
              {part.slice(1, -1)}
            </mark>
          ) : (
            part
          ),
        )}
    </p>
  );
}

/**
 * The live swap's four examples, laid out in the same cell. The ticket shows until a tab picks
 * another (HomeEffects); all four are here so the panel keeps the height of the longest and
 * nothing below it moves when the example changes.
 */
export default function SwapSamples() {
  return Object.entries(SAMPLES).map(([name, sample]) => (
    <div key={name} className={name === "ticket" ? "swap-sample is-on" : "swap-sample"} data-sample={name}>
      <p className="swap-label">On your machine</p>
      <div className="swap-lines" data-side="real">
        {sample.real.map((line, i) => (
          <Line key={i} text={line} chip="chip-real" />
        ))}
      </div>
      <p className="swap-label">What the model receives</p>
      <div className="swap-lines" data-side="double">
        {sample.double.map((line, i) => (
          <Line key={i} text={line} chip="chip-double" />
        ))}
      </div>
    </div>
  ));
}

"use client";

export function Button(): JSX.Element {
  return (
    <div>
      <button onClick={(): void => alert("clicked")} type="button">
        Hi
      </button>
    </div>
  );
}

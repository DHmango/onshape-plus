// you get to choose which slot to save it too, and they show what they were.
// 00 - Onshape Light
// Overwrite?
// getKeys and for each that starts with theme- make a card that says save here with ^^ also show a delete button for everything. Also show any gaps in save data and one extra, like 1, 2, 3, 4 even if only 1 and 4 exist

export default function SaveCards({
  reportBack,
  currentTheme,
  saveSlots,
  onClose,
}: {
  reportBack: (slot: string, value: string) => void; // its a string because leading zeroes are needed and maybe futureproof or not
  currentTheme: string;
  saveSlots: string[];
  onClose: () => void;
}) {
  return (
    <>
      <div className="w-200">
        <button className="w-8 h-8 bg-red-800" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="grid grid-cols-3 gap-4">
          {saveSlots.map((slot) => (
            <OneCard
              currentTheme={currentTheme}
              number={slot.slice(0, 2)}
              name={slot.slice(3)}
              reportBack={(slot: string, value: string) => {
                reportBack(slot, value);
              }}
            ></OneCard>
          ))}
          |<OneCard currentTheme={currentTheme}
              number={'03'}
              name={'blank'}
              reportBack={(slot: string, value: string) => {
                reportBack(slot, value);
              }}></OneCard>
        </div>
      </div>
    </>
  );
}
function OneCard({
  number,
  name,
  currentTheme,
  reportBack,
}: {
  number: string;
  name: string;
  currentTheme: string;
  reportBack: (slot: string, value: string) => void;
}) {
  console.log("jump!");
  return (
    <>
      <div className="flex flex-col">
        <div>{`Slot-${number}`}</div>
        {name}
        <button
          onClick={() => {
            reportBack(number, currentTheme);
          }}
          className="w-12 h-6 bg-amber-950"
        >
          save here
        </button>
      </div>
    </>
  );
}

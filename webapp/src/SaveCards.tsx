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
      <div>
        <button className="w-6 h-6 bg-pink-300" onClick={onClose}></button>
        <div className="grid grid-cols-5 gap-4"></div>
        {saveSlots.map((slot)=>(
          <OneCard
          currentTheme={currentTheme}
          number={slot.slice(0,2)}
          name={slot.slice(3)}
          reportBack={(slot: string, value: string) => {
            reportBack(slot, value);
          }}
        ></OneCard>
        ))}
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

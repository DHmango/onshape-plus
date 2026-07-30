// you get to choose which slot to save it too, and they show what they were.
// 00 - Onshape Light
// Overwrite?
// getKeys and for each that starts with theme- make a card that says save here with ^^ also show a delete button for everything. Also show any gaps in save data and one extra, like 1, 2, 3, 4 even if only 1 and 4 exist
export default function SaveCards({
  reportBack,
  onClose,
}: {
  reportBack: (slot: number, value: string) => void;
  onClose: () => void;
}) {
  console.log("hillow");
  return (
    <>
      <div>
        <button className="w-6 h-6 bg-pink-300" onClick={onClose}></button>
        <OneCard number="01" name="12" reportBack={() => {}}></OneCard>
      </div>
    </>
  );
}
function OneCard({
  number,
  name,
  reportBack,
}: {
  number: string;
  name: string;
  reportBack: (slot: number, value: string) => void;
}) {
  console.log("jump!");
  return (
    <>
      <div className="flex flex-col">
        <div>{`Slot-${number}`}</div>
        {name}
      </div>
    </>
  );
}

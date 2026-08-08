// you get to choose which slot to save it too, and they show what they were.
// 00 - Onshape Light
// Overwrite?
// getKeys and for each that starts with theme- make a card that says save here with ^^ also show a deleteTheme button for everything. Also show any gaps in save data and one extra, like 1, 2, 3, 4 even if only 1 and 4 exist

import { useState } from "react";

export default function SaveCards({
  reportBack,
  currentTheme,
  saveSlots,
  onClose,
  deleteTheme,
  loadTheme,
}: {
  reportBack: (slot: string, value: string) => void; // its a string because leading zeroes are needed and maybe futureproof or not
  currentTheme: string;
  saveSlots: string[];
  onClose: () => void;
  deleteTheme: (slot: string) => void;
  loadTheme: (slot: string) => void;
}) {
  return (
    <>
      <div className="shadow-lg/25 h-100 w-200 bg-[#dee6ef]">
        <button
          className="inset-ring-2 inset-ring-red-900 text-neutral-300 w-6 h-6 bg-red-700"
          onClick={onClose}
        >
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
        <div className="grid grid-cols-3">
          {saveSlots.map((slot) => (
            <OneCard
              currentTheme={currentTheme}
              number={slot.slice(0, 2)}
              name={slot.slice(3)}
              reportBack={(slot: string, value: string) => {
                reportBack(slot, value);
              }}
              deleteTheme={(slot: string) => {
                deleteTheme(slot);
              }}
              loadTheme={(slot: string) => {
                loadTheme(slot);
              }}
            ></OneCard>
          ))}
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
  deleteTheme,
  loadTheme,
}: {
  number: string;
  name: string;
  currentTheme: string;
  reportBack: (slot: string, value: string) => void;
  deleteTheme: (slot: string) => void;
  loadTheme: (slot: string) => void;
}) {
  const [reallyClear, setReallyClear] = useState(false);
  return (
    <>
      <div className="m-2 border-2 border-neutral-300 shadow-lg p-1 bg-stone-200 rounded-md overflow-auto flex flex-col">
        <div className="font-thin">{`Slot-${number}`}</div>
        <div
          title={name}
          className="overflow-clip text-ellipsis text-nowrap text-lg font-playfair font-semibold text-[#190301]"
        >
          {name}{" "}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => {
              reportBack(number, currentTheme);
            }}
            className="col-span-2 font-normal hover:bg-[#efeee8] transition text-neutral-700 font-workSans rounded-sm h-6 bg-amber-50"
          >
            Save here
          </button>
          <button
            onClick={() => {
              loadTheme(number);
              
            }}
            className={`font-normal text-neutral-700 font-workSans rounded-sm h-6 bg-amber-50`}
          >
            Load
          </button>
          <button
            onClick={() => {
              if (reallyClear) {
                deleteTheme(number);
                setReallyClear(false);
              } else {
                setReallyClear(true);
                setTimeout(() => {
                  setReallyClear(false);
                }, 2000);
              }
            }}
            className={`font-normal ${reallyClear ? "bg-rose-500 inset-ring-red-700 inset-ring-4" : "hover:bg-red-300 hover:inset-ring-4 hover:inset-ring-red-400"} duration-200 transition text-neutral-700 font-workSans rounded-sm h-6 bg-amber-50`}
          >
            {reallyClear ? "Delete?" : "Delete"}
          </button>
        </div>
      </div>
    </>
  );
}

import { Checkbox, Slider, TextInput, Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";

import { FiMapPin } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

export function Sidebar() {
  const { hovered, ref } = useHover();

  return (
    <aside className="w-96 bg-black text-white h-full flex flex-col p-6 gap-6 justify-between">
      <div>
        <h3 className="font-medium text-lg">Filter</h3>

        {/* SLIDER */}
        <div>
          <FilterSectionLabel label="Trust Score" />
          <Slider
            step={10}
            defaultValue={500}
            min={200}
            max={1000}
            ref={ref}
            label={null}
            styles={{
              thumb: {
                transition: "opacity 150ms ease",
                opacity: hovered ? 1 : 0,
              },
              dragging: {
                opacity: 1,
              },
            }}
            className="mt-3"
          />
        </div>

        {/* CONDITIONS */}
        <div className="flex flex-col gap-3">
          <FilterSectionLabel label="Conditions" />
          <Checkbox
            label="Trust streak"
            size="sm"
            styles={{
              label: { color: "#F6F6F6", fontSize: 12 },
              input: { backgroundColor: "#4E4E4E", borderColor: "#4E4E4E" },
            }}
          />
          <Checkbox
            label="Ready for work"
            size="sm"
            styles={{
              label: { color: "#F6F6F6", fontSize: 12 },
              input: { backgroundColor: "#4E4E4E", borderColor: "#4E4E4E" },
            }}
          />
          <Checkbox
            label="In-Person payment"
            size="sm"
            styles={{
              label: { color: "#F6F6F6", fontSize: 12 },
              input: { backgroundColor: "#4E4E4E", borderColor: "#4E4E4E" },
            }}
          />
          <Checkbox
            label="Recommended by other people"
            size="sm"
            styles={{
              label: { color: "#F6F6F6", fontSize: 12 },
              input: { backgroundColor: "#4E4E4E", borderColor: "#4E4E4E" },
            }}
          />
        </div>

        <div>
          <FilterSectionLabel label="Locale" />
          <TextInput
            icon={<FiMapPin />}
            placeholder="My city"
            styles={{
              input: {
                backgroundColor: "#4E4E4E",
                borderColor: "#4E4E4E",
                color: "#F6F6F6",
              },
              root: { caretColor: "white" },
            }}
            className="mt-3"
          />
        </div>

        {/* PRICE */}
        <div>
          <FilterSectionLabel label="Price" />
          <TextInput
            icon={<MdAttachMoney />}
            placeholder="Above $20"
            styles={{
              input: {
                backgroundColor: "#4E4E4E",
                borderColor: "#4E4E4E",
                color: "#F6F6F6",
              },
              root: { caretColor: "white" },
            }}
            className="mt-3"
          />
          <TextInput
            icon={<MdAttachMoney />}
            placeholder="Under $200"
            styles={{
              input: {
                backgroundColor: "#4E4E4E",
                borderColor: "#4E4E4E",
                color: "#F6F6F6",
              },
              root: { caretColor: "white" },
            }}
            className="mt-3"
          />
          <p className="text-xs mt-2">Filtering: $20 - $200</p>
        </div>
      </div>

      <Button className="bg-primary">Apply</Button>
    </aside>
  );
}

interface IFilterLabel {
  label: string;
}
function FilterSectionLabel({ label }: IFilterLabel) {
  return <span className="text-sm font-medium">{label}</span>;
}

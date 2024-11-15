import React from 'react';

const demoColors = ['red', 'blue', 'gray'];
const ColorPicker = () => {
  return (
    <div className="mb-2 flex gap-2">
      {demoColors.map((color) => (
        <div
          key={color}
          className="relative flex items-center justify-center rounded-full"
        >
          <input
            className="size-8 appearance-none rounded-full border-2 border-neutral-300 dark:bg-neutral-900"
            type="radio"
            name="topping"
            value="Large"
            id="large"
          />
          <div
            className="absolute size-3 rounded-full "
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;

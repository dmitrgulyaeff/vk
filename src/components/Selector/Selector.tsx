import { EventCallable } from 'effector';
import { ChangeEvent } from 'react';

type SelectorProps<T> = {
  name: string;
  label: string;
  options: Record<string, T>;
  handler: EventCallable<T>;
};

export function Selector<U>({ label, options, handler, name }: SelectorProps<U>) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    handler(options[value]);
  };

  return (
    <div>
      <label>{label}</label>
      <select name={name} onChange={handleChange}>
        {[...Object.keys(options)].map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

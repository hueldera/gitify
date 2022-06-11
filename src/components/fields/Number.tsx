import * as React from 'react';

interface IFieldCheckbox {
  name: string;
  label: string;
  onChange: any;
  placeholder?: string;
  value: number;
}

export const FieldNumber = (props: IFieldCheckbox) => {
  return (
    <div className="flex flex-row items-center mt-1 mb-3">
      <div className="text-sm">
        <label
          htmlFor={props.name}
          className="block tracking-wide text-grey-dark text-sm font-semibold mb-2"
        >
          {props.label}
        </label>
      </div>
      <div className="flex items-center h-5 ml-3">
        <input
          type="number"
          id={props.name}
          className="appearance-none block w-full dark:text-gray-800 bg-gray-100 border border-red rounded py-1.5 px-4 mb-2 focus:bg-gray-200 focus:outline-none"
          min={5}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
        />
      </div>
    </div>
  );
};

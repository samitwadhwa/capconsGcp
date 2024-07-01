import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  mode: 'single';
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  initialFocus: boolean;
}

export const Calendar: React.FC<CalendarProps> = ({ mode, selected, onSelect, initialFocus }) => {
  return (
    <DayPicker
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      initialFocus={initialFocus}
    />
  );
};

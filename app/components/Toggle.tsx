
import { useState } from 'react';

interface ToggleProps {
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only peer"
      />
      <div
        className={`relative w-11 h-6 rounded-full peer-focus:outline-none peer-focus:ring-4 transition-colors ${
          isChecked ? 'bg-blue-600 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <div
          className={`absolute top-[2px] start-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${
            isChecked ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></div>
      </div>
      <span className="ms-3 text-sm font-medium text-gray-900">
        Theme
      </span>
    </label>
  );
};

export default Toggle;

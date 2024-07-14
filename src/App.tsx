import React, { useState } from 'react';
import styles from './App.module.css';
import { Select } from './components/Select';
import { Option } from './interfaces';
import { SelectPage } from './components/customSelect/SelectPage';
import Slider from './components/switchBox/Slider';

const options: Option[] = [
  {
    label: "60 / page",
    value: "60"
  },
  {
    label: "80 / page",
    value: "80"
  },
  {
    label: "100 / page",
    value: "100"
  },
  {
    label: "120 / page",
    value: "120"
  },
];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);
  return (<>
    <div className={styles['app']}>
      <Select
        placeholder='60 / page'
        selected={selectedItem}
        options={options}
        onChange={(selection: Option) => setSelectedItem(selection)}
      />
      <p>Hello, my selection is {selectedItem?.label}</p>
      <SelectPage />
      <Slider />
    </div>
  </>
  );
};

export default App;
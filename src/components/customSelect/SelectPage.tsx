import React from 'react';
import { CustomSelect } from './CustomSelect';



interface Page {
  name: string;
  id: number;
}

export const SelectPage = () => {
  const pages: Page[] = [
    { id: 60, name: "60 / page" },
    { id: 80, name: "80 / page" },
    { id: 100, name: "100 / page" },
    { id: 120, name: "120 / page" }
  ];


  const [user, setUser] = React.useState(pages[0]);

  return (
    <div>
      <div>Value: {user.id}</div>

      <CustomSelect
        value={user}
        onChange={setUser}
        options={pages}
        // has an error if no mapOptionToLabel is provided!
        // I don't know why the type for user isn't automatic
        mapOptionToLabel={(user: Page) => user.name}
        mapOptionToValue={(user: Page) => user.id}
      />
    </div>
  );
};
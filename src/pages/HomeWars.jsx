import React from 'react';
import FilterByName from '../component/FilterByName';
import Filters from '../component/Filters';
import TableWars from '../component/TableWars';

function HomeWars() {
  return (
    <section>
      <FilterByName />
      <Filters />
      <TableWars />
    </section>
  );
}

export default HomeWars;

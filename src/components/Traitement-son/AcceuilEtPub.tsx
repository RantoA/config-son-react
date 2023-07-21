import DataTable from "react-data-table-component";
import data from "./data";
import { SetStateAction, useMemo, useState } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import Navigations from "../Navigations/Navigations";
import { Editeson } from "../Service/Services";

const columns = [
  {
    name: "Numeros",
    selector: (row: { numero: any; }) => row.numero,
    sortable: true
  },
  {
    name: "Editeurs",
    selector: (row: { editeur: any; }) => row.editeur,
    sortable: true
  },
  {
    name: "Applications",
    selector: (row: { application: any; }) => row.application,
    sortable: true,
    right: true
  },
  {
    name: "Accueil",
    selector: (row: { accueil: any; }) => row.accueil,
    sortable: true,
    right: true,
  },
  {
    name: "AccueilAleatoire1",
    selector: (row: { accueilAleatoire1: any; }) => row.accueilAleatoire1,
    sortable: true,
    right: true
  },
  {
    name: "AccueilAleatoire2",
    selector: (row: { accueilAleatoire2: any; }) => row.accueilAleatoire2,
    sortable: true,
    right: true
  },
  {
    name: "Pub",
    selector: (row: { pub: any; }) => row.pub,
    sortable: true,
    right: true
  },
  {
    name: "Editer",
    cell: () => (
      <Editeson />
    ),
    allowOverflow: true,
    button: true,
  }
];


const FilterComponent = ({ filterText, onFilter, onClear }: { filterText: any; onFilter: any; onClear: any }) => (
  <>
    <div className="star">
      <InputGroup>
        <Input
          id="search"
          type="text"
          placeholder="Numero"
          bsSize='sm'
          aria-label="Search Input"
          value={filterText}
          onChange={onFilter} />
        <Button
          color="primary"
          onClick={onClear}
          size="sm"
          outline
        >
          Clear
        </Button>

      </InputGroup>
    </div>
  </>
);




export default function PubEtAccueil() {

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    item => item.numero && item.numero.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={(e: { target: { value: SetStateAction<string>; }; }) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>

      <div className="justify-content-center">
        <Navigations />
      </div>
      <div>

        <DataTable
          title="Gestion Son Accueil et Pub"
          columns={columns}
          data={filteredItems}
          defaultSortFieldId="title"
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          persistTableHead
          subHeaderComponent={subHeaderComponentMemo}
          pagination
        />
      </div>
    </div>

  );
}


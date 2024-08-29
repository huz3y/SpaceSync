import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const TableContext = createContext();

export default function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="table" role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

Table.propTypes = {
  columns: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      className="table__header"
      role="row"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      className="table__row"
      role="row"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

function Body({ data, render }) {
  if (!data.length) return <p>No data</p>;
  return (
    <div className="table__body">
      {data.map((item, index) => render(item, index))}
    </div>
  );
}

Body.propTypes = {
  data: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
};

function Footer({ children }) {
  return <footer className="table__footer">{children}</footer>;
}

Footer.propTypes = {
  children: PropTypes.node,
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

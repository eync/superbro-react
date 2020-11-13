import styled from "styled-components";
import PropTypes from "prop-types";
const gap = ({ gap = "15em" }) => gap;
const Grid = styled.div`
  display: grid;
  height: ${"auto"};
  grid-template-columns: repeat(var(--columns, 12), minmax(1em, 1fr));
  grid-gap: ${gap};
`;

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
};

export default Grid;
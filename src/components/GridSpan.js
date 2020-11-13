import styled from "styled-components";
import PropTypes from "prop-types";

const Span = styled.div`
    grid-row: span 1; 
    width: 100%;
    height: 100%;
    ${({ span }) => span && `grid-column: span ${span}`};
`;

Span.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  span: PropTypes.number,
  height: PropTypes.number,
};

export default Span;
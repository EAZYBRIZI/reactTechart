import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Portal = ({ component }) => {
    const container = document.getElementById('portal')
    return (
        ReactDOM.createPortal(component, container)
    )
}

Portal.propTypes = {
    component: PropTypes.element,
    elemId: PropTypes.string.isRequired
}

export default Portal

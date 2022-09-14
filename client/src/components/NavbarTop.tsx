import { Nav } from 'react-bootstrap'
import '../styles/navbarTop.scss'

interface displayElement {
  displayName: string
  internalKey: string
}

interface NavbarProps {
  displayElements: displayElement[]
  activeKey: string | undefined
  onSelect(e: string | null): void
}

const NavbarTop = (props: NavbarProps) => {
  return (
    <Nav
      className="option-change"
      variant="pills"
      defaultActiveKey={props.activeKey}
      onSelect={props.onSelect}
    >
      {props.displayElements.map((displayElement: displayElement) => (
        <Nav.Item key={displayElement.internalKey}>
          <Nav.Link eventKey={displayElement.internalKey}>
            {displayElement.displayName}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}
export default NavbarTop

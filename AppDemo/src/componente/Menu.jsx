import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Jesús Canales
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;
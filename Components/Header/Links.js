import Link from 'next/link';
import { Nav } from 'react-bootstrap';

export default function Links() {
    return (
        <>
            <Link href="/biography" passHref>
                <Nav.Link>Biography</Nav.Link>
            </Link>
            <Link href="/youtube" passHref>
                <Nav.Link>YouTube</Nav.Link>
            </Link>
            <Link href="/blog" passHref>
                <Nav.Link>Blog</Nav.Link>
            </Link>
            <Link href="/resume" passHref>
                <Nav.Link>Resume</Nav.Link>
            </Link>
        </>
    )
}

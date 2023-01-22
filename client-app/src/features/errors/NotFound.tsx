import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

export default function Notfound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Sorry - we cannot find what you are looking for!
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    );
}

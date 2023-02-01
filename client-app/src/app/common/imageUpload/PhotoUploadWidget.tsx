import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function PhotoUploadWidget() {
    return (
        <Grid>
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step1 - Add Photo' />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step2 - Resize image' />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={4}>
                <Header sub color='teal' content='Step3 - Preview and upload' />
            </Grid.Column>
        </Grid>
    );
}

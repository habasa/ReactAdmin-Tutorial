import React from "react";
import { Edit, SimpleForm, TextInput, RichTextField } from 'react-admin'

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="title"/>
        </SimpleForm>
    </Edit>
);
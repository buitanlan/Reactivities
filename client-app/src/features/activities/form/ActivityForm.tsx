import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
}
export default function ActivityForm(props: Props) {
    return (
			<Segment clearing>
				<Form>
					<Form.Input placeholder='Title' />
					<Form.TextArea placeholder='Description' />
					<Form.Input placeholder='Category' />
					<Form.Input placeholder='Date' />
					<Form.Input placeholder='City' />
					<Form.Input placeholder='Venue' />
					<Button floated='right' positive type='submit' content='Submit' />
					<Button onClick={props.closeForm} floated='right' type='button' content='Cancel' />
				</Form>
			</Segment>
		);
}
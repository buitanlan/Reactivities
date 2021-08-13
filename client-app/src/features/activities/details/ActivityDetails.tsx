import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
	activity: Activity | undefined;
	cancelSelectActivity: () => void;
	openForm: (id?: string) => void
}
export default function ActivityDetails(props: Props) {
	return (
		<Card fluid>
			<Image src={`/assets/categoryImages/${props.activity?.category}.jpg`} />
			<Card.Content>
				<Card.Header>{props.activity?.title}</Card.Header>
				<Card.Meta></Card.Meta>
				<Card.Description>{props.activity?.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<ButtonGroup widths='2'>
					<Button onClick={() => props.openForm(props.activity?.id)} basic color='blue' content='Edit' />
					<Button onClick={props.cancelSelectActivity} basic color='grey' content='Cancel' />
				</ButtonGroup>
			</Card.Content>
		</Card>
	);
}

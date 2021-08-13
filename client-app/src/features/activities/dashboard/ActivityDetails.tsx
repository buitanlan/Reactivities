import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activity: Activity;
}
export default function ActivityDetails(props: Props) {
	return (
		<Card>
			<Image src={`/assets/categoryImages/${props.activity.category}.jpg`} />
			<Card.Content>
				<Card.Header>{props.activity.title}</Card.Header>
				<Card.Meta></Card.Meta>
				<Card.Description>{props.activity.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button basic color='blue' content='Edit' />
				<Button basic color='blue' content='Cancel' />
			</Card.Content>
		</Card>
	);
}

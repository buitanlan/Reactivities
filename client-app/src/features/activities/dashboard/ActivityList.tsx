import { Button, Item, ItemContent, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[]
}

export default function ActivityList(props: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {props.activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue'></Button>
                                <Label basic content={ activity.category}/>
                            </Item.Extra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
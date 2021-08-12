import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from './shared/models/activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Activity[]>('https://localhost:5001/api/activities');
        setActivities(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();  
  }, []);


  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>  
        <List>
          {activities.map((activity: Activity) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;

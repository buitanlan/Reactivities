import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivitiesDashboard';

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
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard activities={activities}/>
      </Container>
    </div>
  );
}

export default App;

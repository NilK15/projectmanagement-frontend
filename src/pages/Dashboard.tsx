import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IProject from '../types/IProject';
import {ProjectCard} from '../components/ProjectCard';

const url = "https://github.com/NilK15/projectmanagement-frontend/tree/a98563357df9ce4743e8b813984c18028be368f7/src"
const sampleProject: IProject = {
    projectName: "sampleName",
    manager: "sampleManager",
    author: "sampleAuther",
    gitUrl: url,
    projectStack: "projectStack",
    description: "description"
}
let projectArray: IProject[] = [];
projectArray.push(sampleProject)
projectArray.push(sampleProject)
projectArray.push(sampleProject)
projectArray.push(sampleProject)
projectArray.push(sampleProject)

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState("");

	return (
		<div className='projectCardContainer flex h-96'>
			<div className='projectCards flex justify-around gap-5 w-full flex-wrap'>
				{projectArray.map((item,index) => {return ProjectCard(item)})}
			</div>
		</div>
	);
}
export default Dashboard;
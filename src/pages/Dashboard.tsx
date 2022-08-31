import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IProject from '../types/IProject';
import {ProjectCard} from '../components/ProjectCard';
import { stdout } from 'process';

const url = "https://github.com/NilK15/projectmanagement-frontend/tree/a98563357df9ce4743e8b813984c18028be368f7/src"

const sampleProject: IProject = {
    projectName: "Project Management - Front-End",
    manager: "Nil",
    author: "Nil",
    gitUrl: url,
    projectStack: "React, Express, Axios",
    description: "Presentable UI to see an overview for projects as well as direct links to them"
}

let projectArray: IProject[] = [];
projectArray.push(sampleProject)
// projectArray.push(sampleProject)
// projectArray.push(sampleProject)
// projectArray.push(sampleProject)
// projectArray.push(sampleProject)

let array:any[] = [];



const Dashboard = () => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState("");

	const getProjectsOnLoad = async () => {

		try {
			const {data: response} = await axios.get('api/projects');
			response.forEach(project => {
				projectArray.push(project);
			});
			setData(projectArray)
		} catch (error) {
			console.log(error)
		}
	}
	
	useEffect(()=>{

	// Loads the projects from SQL lite using Axios GET call to projectArray
	getProjectsOnLoad();

	},[projectArray])

	return (
		<div className='projectCardContainer flex h-screen w-full'>
			<div className='projectCards flex mx-10 lg:mx-0 gap-5 lg:h-3/4 w-full justify-around flex-wrap'>
			{ data.map((item,index)=> {return ProjectCard(item)})}
			</div>
		</div>
	);
}
export default Dashboard;

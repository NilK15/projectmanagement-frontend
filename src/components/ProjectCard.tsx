import IProject from "../types/IProject"

export const ProjectCard = (props: IProject) => {
    return(
            <div className="ProjectCard flex w-full h-full mx-5 lg:m-0 lg:w-5/12 lg:h-full hover:-translate-y-2 duration-200 hover:bg-orange-800 hover:border-2 hover:border-orange-200  border-black bg-orange-900  rounded-xl shadow-xl shadow-slate-900 overflow-hidden cursor-pointer whitespace-nowrap text-xl" 
            onClick={()=>{window.open(props.gitUrl)}}>
                <div className="ProjectInfoDescContainer flex flex-col w-full " >
                    <div className="ProjectInformation flex flex-col text-3xl font-serif h-full items-center justify-around px-2 text-brown-300 ">
                        <div className="ProjectDescription flex flex-col w-full h-1/5 text-lg italic hover:-translate-y-2 duration-200 font-serif text-brown-900 mx-2 whitespace-normal bg-orange-100 rounded-xl shadow-md shadow-slate-800 border border-slate-900">
                            <label className="label pl-2 ">Project Name:</label>
                            <div className="p-5" >{props.projectName}</div>
                        </div>
                        <div className="ProjectDescription flex flex-col w-full h-1/5 text-lg italic hover:-translate-y-2 duration-200 font-serif text-brown-900 mx-2 whitespace-normal bg-orange-200 rounded-xl shadow-md shadow-slate-800 border border-slate-900">
                            <label className="label pl-2">Project Contributors:</label>
                            <div className="p-5" >{props.author}</div>
                        </div>
                        <div className="ProjectDescription flex flex-col w-full h-1/5 text-lg italic hover:-translate-y-2 duration-200 font-serif text-brown-900 mx-2 whitespace-normal bg-orange-300 rounded-xl shadow-md shadow-slate-800 border border-slate-900">
                            <label className="label pl-2">Project Stack:</label>
                            <div className="p-5" >{props.projectStack}</div>
                        </div>
                        <div className="ProjectDescription flex flex-col w-full h-1/5 text-lg italic hover:-translate-y-2 duration-200 font-serif text-brown-900 mx-2 whitespace-normal bg-orange-400 rounded-xl shadow-md shadow-slate-800 border border-slate-900">
                            <label className="label pl-2">Brief Description:</label>
                            <div className=" text-brown-900 p-5 pt-2 text-xl">{props.description}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
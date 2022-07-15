export interface IProject {
  _id?: string,
  projectName: string,
  repositoryPath: string,
  diffType: number,
  commitId?: string
}

export interface IUser {
  _id: string,
  username: string,
  ip: string,
  projects: IProject[],
  __v: number
}

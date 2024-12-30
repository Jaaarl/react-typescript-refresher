import {useState} from "react";

function App() {

	type User = {
		name: string,
		email: string,
		id: number,
	}

	const DEFAULT_USERS = [
		{id: 1, name: 'John', email: 'john@example.com'},
		{id: 2, name: 'John', email: 'john@example.com'},
		{id: 3, name: 'John', email: 'john@example.com'},
	]

	const [users, setUsers] = useState<User[]>(DEFAULT_USERS)

	return (
		<>
			<h1 className={"font-bold"}>User list</h1>
			<div className={"flex flex-col gap-4"}>
				{users.map((user) => (
					<UserCard key={user.id} id={user.id} name={user.name} email={user.email}/>
				))}
			</div>
		</>
	)
}

export default App

type UserCardProps = User

function UserCard(props: UserCardProps) {
	return (
		<>
			<div className={"flex flex-col gap-2 p-2 bg-gray-200 max-w-sm"}>
				<h1>id: {props.id}</h1>
				<h1> name: {props.name} </h1>
				<h1> email: {props.email} </h1>
			</div>
		</>
	)
}

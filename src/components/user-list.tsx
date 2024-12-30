import {useState} from "react";
import {UserCard} from "./user-card.tsx";
import {User} from "../types.ts";

export function UserList() {

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
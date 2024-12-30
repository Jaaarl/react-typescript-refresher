import {User} from "../types.ts";

export type UserCardProps = User

export function UserCard(props: UserCardProps) {
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
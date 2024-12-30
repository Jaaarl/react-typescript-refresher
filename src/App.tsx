function App() {

	return (
		<>
			<h1 className={"font-bold"}>User list</h1>
			<div className={"flex flex-col gap-4"}>
				<UserCard name="John Doe" email="johndoe@gmail.com"/>
				<UserCard name="Rey Valera" email="reyvalera@gmail.com"/>
				<UserCard name="Sukona Jujutsu" email="sukona@gmail.com"/>
			</div>
		</>
	)
}

export default App

type UserCardProps = {
	name: string;
	email: string;
}

function UserCard(props: UserCardProps) {
	return (
		<>
			<div className={"flex flex-col gap-2 p-2 bg-gray-200 max-w-sm"}>
				<h1> name: {props.name} </h1>
				<h1> email: {props.email} </h1>
			</div>
		</>
	)
}

const Test = ({ why }) => {

	console.log('why', why);
	return (
		<>
			<h1>Inside Test</h1>
		</>
	)
}

export default Test;

export async function getStaticProps(context) {
	return {
		props: {
			why: 'why working here?'
		}
	}
}